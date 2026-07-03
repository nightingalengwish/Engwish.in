"""Backend API tests for Engwish Skills Academy enquiries."""
import os
import requests
from datetime import datetime

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://engwish-preview.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


def test_root():
    r = requests.get(f"{API}/", timeout=15)
    assert r.status_code == 200
    assert "message" in r.json()


def test_create_enquiry_and_persist():
    payload = {
        "name": "TEST_User",
        "phone": "+91 9999999999",
        "email": "test@example.com",
        "course": "Spoken English & Communication Skills",
        "message": "TEST message",
    }
    r = requests.post(f"{API}/enquiries", json=payload, timeout=15)
    assert r.status_code == 200, r.text
    data = r.json()
    for k in ("id", "created_at", "name", "phone", "course"):
        assert k in data
    assert data["name"] == payload["name"]
    assert data["phone"] == payload["phone"]
    assert data["course"] == payload["course"]
    assert data["email"] == payload["email"]
    # parse created_at
    datetime.fromisoformat(data["created_at"].replace("Z", "+00:00"))
    created_id = data["id"]

    # Verify persistence via GET list
    r2 = requests.get(f"{API}/enquiries", timeout=15)
    assert r2.status_code == 200
    lst = r2.json()
    assert isinstance(lst, list)
    assert any(e["id"] == created_id for e in lst)


def test_create_enquiry_optional_fields():
    payload = {"name": "TEST_Min", "phone": "9000000000", "course": "IELTS & Duolingo Test Prep"}
    r = requests.post(f"{API}/enquiries", json=payload, timeout=15)
    assert r.status_code == 200
    d = r.json()
    assert d["email"] is None
    assert d["message"] is None


def test_create_enquiry_missing_required_field():
    payload = {"name": "TEST_Bad", "course": "Spoken English"}  # missing phone
    r = requests.post(f"{API}/enquiries", json=payload, timeout=15)
    assert r.status_code == 422


def test_get_enquiries_returns_list():
    r = requests.get(f"{API}/enquiries", timeout=15)
    assert r.status_code == 200
    assert isinstance(r.json(), list)
