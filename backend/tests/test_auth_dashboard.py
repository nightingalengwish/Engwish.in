"""Auth + dashboard tests for Engwish (register, login, /me, dashboard/stats,
refresh, logout, brute-force lockout, Google-session simulation)."""
import os
import time
import uuid
import subprocess
import requests
import pytest

with open("/app/frontend/.env") as f:
    for line in f:
        if line.startswith("REACT_APP_BACKEND_URL="):
            BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
            break
API = f"{BASE_URL}/api"


def rand_email(prefix="TESTuser"):
    return f"{prefix}_{uuid.uuid4().hex[:10]}@engwishtest.com"


@pytest.fixture(scope="module")
def new_user():
    return {
        "name": "Test User",
        "email": rand_email(),
        "phone": "9876543210",
        "password": "Test@1234",
    }


# ---------- Registration ----------

def test_register_success(new_user):
    s = requests.Session()
    r = s.post(f"{API}/auth/register", json=new_user, timeout=20)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["email"] == new_user["email"].lower()
    assert "password_hash" not in data
    assert "_id" not in data
    assert data.get("user_id", "").startswith("user_")
    cookie_names = {c.name for c in s.cookies}
    assert "access_token" in cookie_names
    assert "refresh_token" in cookie_names


def test_register_duplicate_email(new_user):
    r = requests.post(f"{API}/auth/register", json=new_user, timeout=20)
    assert r.status_code == 400
    assert "exists" in r.json()["detail"].lower()


def test_register_weak_password():
    r = requests.post(f"{API}/auth/register", json={
        "name": "X Y", "email": rand_email(), "phone": "9876543210", "password": "short"
    }, timeout=20)
    assert r.status_code == 422


def test_register_short_phone():
    r = requests.post(f"{API}/auth/register", json={
        "name": "X Y", "email": rand_email(), "phone": "12345", "password": "Test@1234"
    }, timeout=20)
    assert r.status_code == 422


# ---------- Login ----------

def test_login_success(new_user):
    s = requests.Session()
    r = s.post(f"{API}/auth/login", json={
        "email": new_user["email"], "password": new_user["password"]
    }, timeout=20)
    assert r.status_code == 200, r.text
    assert r.json()["email"] == new_user["email"].lower()
    assert "access_token" in {c.name for c in s.cookies}


def test_login_wrong_password(new_user):
    r = requests.post(f"{API}/auth/login", json={
        "email": new_user["email"], "password": "WrongPass9!"
    }, timeout=20)
    assert r.status_code == 401


def test_login_brute_force_lockout():
    throwaway = rand_email("TESTlock")
    reg = requests.post(f"{API}/auth/register", json={
        "name": "Lock Test", "email": throwaway, "phone": "9876543210", "password": "Test@1234",
    }, timeout=20)
    assert reg.status_code == 200
    for _ in range(5):
        r = requests.post(f"{API}/auth/login", json={
            "email": throwaway, "password": "Nope@1234"
        }, timeout=20)
        assert r.status_code == 401
    r6 = requests.post(f"{API}/auth/login", json={
        "email": throwaway, "password": "Nope@1234"
    }, timeout=20)
    assert r6.status_code == 429, f"Expected 429, got {r6.status_code}: {r6.text}"


# ---------- /me & dashboard ----------

def test_me_with_cookie(new_user):
    s = requests.Session()
    s.post(f"{API}/auth/login", json={
        "email": new_user["email"], "password": new_user["password"]
    }, timeout=20)
    r = s.get(f"{API}/auth/me", timeout=20)
    assert r.status_code == 200
    assert r.json()["email"] == new_user["email"].lower()


def test_me_unauthenticated():
    r = requests.get(f"{API}/auth/me", timeout=20)
    assert r.status_code == 401


def test_dashboard_stats_authenticated(new_user):
    s = requests.Session()
    s.post(f"{API}/auth/login", json={
        "email": new_user["email"], "password": new_user["password"]
    }, timeout=20)
    r = s.get(f"{API}/dashboard/stats", timeout=20)
    assert r.status_code == 200
    body = r.json()
    assert "user" in body and "stats" in body
    stats = body["stats"]
    assert stats["today_minutes"] == 0
    assert stats["total_minutes"] == 0
    assert stats["streak_days"] == 0
    assert stats["recent_conversations"] == []


def test_dashboard_stats_unauthenticated():
    r = requests.get(f"{API}/dashboard/stats", timeout=20)
    assert r.status_code == 401


# ---------- Logout & refresh ----------

def test_logout_clears_cookies(new_user):
    s = requests.Session()
    s.post(f"{API}/auth/login", json={
        "email": new_user["email"], "password": new_user["password"]
    }, timeout=20)
    r = s.post(f"{API}/auth/logout", timeout=20)
    assert r.status_code == 200
    r2 = s.get(f"{API}/auth/me", timeout=20)
    assert r2.status_code == 401


def test_refresh_issues_new_access_token(new_user):
    s = requests.Session()
    s.post(f"{API}/auth/login", json={
        "email": new_user["email"], "password": new_user["password"]
    }, timeout=20)
    time.sleep(1)
    r = s.post(f"{API}/auth/refresh", timeout=20)
    assert r.status_code == 200, r.text
    assert s.cookies.get("access_token") is not None
    r2 = s.get(f"{API}/auth/me", timeout=20)
    assert r2.status_code == 200


# ---------- Google session via MongoDB ----------

def test_google_session_via_mongo():
    token = f"test_session_{uuid.uuid4().hex}"
    user_id = f"user_gtest{uuid.uuid4().hex[:8]}"
    email = f"TESTgoogle_{uuid.uuid4().hex[:6]}@engwishtest.com"
    js = (
        "db = db.getSiblingDB('test_database');"
        f"db.users.insertOne({{user_id: '{user_id}', email: '{email}', name: 'Google Test', "
        "picture: '', auth_provider: 'google', created_at: new Date().toISOString()});"
        f"db.user_sessions.insertOne({{user_id: '{user_id}', session_token: '{token}', "
        "expires_at: new Date(Date.now() + 7*24*60*60*1000).toISOString(), created_at: new Date().toISOString()});"
    )
    result = subprocess.run(
        ["mongosh", "--quiet", "--eval", js],
        capture_output=True, text=True, timeout=20,
    )
    assert result.returncode == 0, f"mongosh failed: {result.stderr}"
    r = requests.get(f"{API}/auth/me", headers={"Authorization": f"Bearer {token}"}, timeout=20)
    assert r.status_code == 200, r.text
    body = r.json()
    assert body["email"] == email
    assert body["auth_provider"] == "google"
    assert "_id" not in body
