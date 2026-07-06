# Auth Testing Playbook (Engwish)

## Auth system
- Custom JWT email/password auth + Emergent Google Auth coexist.
- users collection: {user_id (uuid str), name, email, phone, password_hash?, picture?, auth_provider, created_at}
- Google sessions in user_sessions: {user_id, session_token, expires_at}
- JWT cookies: access_token (15 min), refresh_token (7 days), httpOnly, secure, samesite=none
- Google cookie: session_token (7 days), httpOnly, secure, samesite=none

## Endpoints
- POST /api/auth/register {name, email, phone, password}
- POST /api/auth/login {email, password} (brute force: 5 fails = 15 min lockout)
- POST /api/auth/session {session_id} (Emergent Google exchange)
- GET /api/auth/me (cookie or Bearer)
- POST /api/auth/refresh
- POST /api/auth/logout
- GET /api/dashboard/stats (protected)

## API testing (JWT)
```
API_URL=$(grep REACT_APP_BACKEND_URL /app/frontend/.env | cut -d '=' -f2)
curl -c /tmp/cookies.txt -X POST "$API_URL/api/auth/register" -H "Content-Type: application/json" -d '{"name":"Test User","email":"test@example.com","phone":"9000000000","password":"Test@1234"}'
curl -b /tmp/cookies.txt "$API_URL/api/auth/me"
```

## Google session testing (simulated)
Create test user + session directly in MongoDB:
```
mongosh --eval "
use('test_database');
var userId = 'user_test' + Date.now();
var sessionToken = 'test_session_' + Date.now();
db.users.insertOne({user_id: userId, email: 'test.google@example.com', name: 'Google Test', picture: '', auth_provider: 'google', created_at: new Date().toISOString()});
db.user_sessions.insertOne({user_id: userId, session_token: sessionToken, expires_at: new Date(Date.now() + 7*24*60*60*1000).toISOString(), created_at: new Date().toISOString()});
print('token: ' + sessionToken);
"
```
Then: `curl "$API_URL/api/auth/me" -H "Authorization: Bearer <sessionToken>"`

## Browser testing
Set session_token cookie on the preview domain, navigate to /dashboard, expect dashboard (not redirect to /auth).

## Success indicators
- /api/auth/me returns user (never raw _id)
- /dashboard loads for authenticated user, redirects to /auth otherwise
- Register → auto-login → redirect /dashboard
