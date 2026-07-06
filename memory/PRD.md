# Engwish Skills Academy — Website PRD

## Original Problem Statement
Build a website for Engwish Skills Academy (www.engwish.in), located at Bandlaguda, Chandrayangutta, Hyderabad 500005, Phone: +91 9000060601. Home screen with 4 options: 1) Spoken English/Communication Skills, 2) Study Abroad (USA, UK, Canada, NZ, AU, Europe), 3) IELTS & Duolingo test prep, 4) Intermediate Academic Coaching (TS Board, 11th/12th — Maths M1/M2, Physics, Commerce, Economics). Multiple animations (3D slider, exploring objects). Constraints: NO pictures of females, NO country flags. Exciting, smooth, glass finish; glossy red/black/white palette.

## User Choices
- Enquiry form (stored in DB) + WhatsApp click-to-chat button
- Full site: Hero, 4 courses, About, Testimonials, Contact + separate detail page per course
- Logo extracted from user's visiting-card PDF (saved to /app/frontend/public/logo-icon.png, logo-full.png)

## Architecture
- FastAPI backend (port 8001, /api prefix) + MongoDB (enquiries collection)
- React frontend: react-router, framer-motion animations, Swiper 3D coverflow slider, Tailwind + shadcn, sonner toasts
- Fonts: Chakra Petch italic (headings — matches angular Engwish logotype) + Outfit (body); red & white theme (#FF0033 on white, soft #FFF7F8 alternating sections). Actual logo wordmark image (/logo-wordmark.png cropped from client PDF) used in navbar/footer.

## Change Log
- June 2026: Restyled from dark glossy theme → red & white per user request; swapped Clash Display → Chakra Petch (brand font match); navbar/footer now use real logo wordmark from PDF.
- June 2026 (v3 launch-ready): 4 AI-generated course images (Indian-American conversation, blue-sky university, exam PCs with IELTS/duolingo badges, Indian maths teacher premium class); Google Maps embed (17.3210917,78.4671568) + Get Directions (https://maps.app.goo.gl/y5FzbgJhBJJsUe2d6); full address updated everywhere; SEO pack: title/meta/OG/Twitter/canonical/JSON-LD EducationalOrganization schema, robots.txt, sitemap.xml (www.engwish.in), manifest.json, favicon from logo; Privacy Policy (/privacy) & Terms (/terms) pages linked in footer.
- June 2026 (v4): Removed logo showcase section; navbar logo now a glossy 3D glass-ball that spins on scroll (framer-motion useScroll); added EMAIL=info@engwish.in to Contact, Footer and JSON-LD schema.
- June 2026 (v5): Navbar logo — removed ball border/background (full logo shown), spin changed to 3D rotateY (left-to-right), mapped to full-page scrollYProgress (0→1440°) so it spins until the page bottom.
- June 2026 (v6): Rebuilt logo as a true 3D sphere (CSS globe technique: logo texture repeat-x slides horizontally with scroll + sphere shading/gloss overlays) so the ball stays fully round while spinning — never goes slim edge-on.
- Feb 2026 (v7 — Engwish AI-Practice): Added flagship AI product. Homepage 5th section (red gradient teaser after Courses) + full marketing page /ai-practice (hero with live-conversation mockup, animated stat counters 6000+/500+/20+, 6 feature cards, 20-category grid with view-all toggle, real-time assessment dashboard mockup with circular gauges + progress bars, traditional-vs-AI comparison, 4-step how-it-works, gradient CTA). Full auth: JWT email/password (register name/email/phone/password, login, refresh, logout, brute-force lockout 5 fails/15min keyed on X-Forwarded-For ip:email) + Emergent Google Auth (session_id exchange → session_token cookie). Protected /dashboard: welcome, Continue Practice CTA (toast placeholder — live AI lab not wired yet), stat cards, recommended scenarios, achievement badges (locked states), empty-state recent conversations & feedback history. Navbar: AI Practice link w/ NEW badge + Login/Dashboard button. Footer + sitemap updated. Backend split: database.py, auth.py, server.py (GET /api/dashboard/stats). Tested: iteration_2 — backend 18/19 → both reported issues fixed & verified (brute force multi-replica bypass, logout redirect race).

## Implemented (June 2026)
- Backend: POST /api/enquiries, GET /api/enquiries
- Home: Hero with 3D coverflow slider + floating objects animation, 4 course cards, About with stats, Testimonials (male names, no photos), Contact enquiry form
- Course detail pages at /course/:slug (spoken-english, study-abroad, ielts-duolingo, academic-coaching)
- Floating WhatsApp button (wa.me/919000060601), sticky glass navbar, footer
- Spoken English image AI-generated (male speaker) to comply with "no females" constraint
- Testing: iteration_1 — backend 100%, frontend 100%

## Backlog
- P0: Wire dashboard "Continue Practice" to the user's real AI Conversational Lab (built in another Emergent app) — need its deployed URL, OR rebuild live AI voice conversation inside this app (would need OpenAI Realtime/TTS-STT integration)
- P0: Domain hookup — user owns www.engwish.in on GoDaddy; guide via Emergent Deploy → Custom Domain (DNS CNAME) after deployment
- P1: Google Maps embed done; enquiries admin view for staff
- P1: Email forwarding of leads to info@engwish.in (needs Resend/SendGrid key)
- P2: OG images; rate limiting on enquiry endpoint (spam protection)

## Auth (Feb 2026)
- users: {user_id, name, email, phone, password_hash?, picture?, auth_provider, created_at}; user_sessions (Google), login_attempts (lockout)
- Endpoints: /api/auth/{register,login,session,me,refresh,logout}, /api/dashboard/stats
- Test creds in /app/memory/test_credentials.md; testing playbook /app/auth_testing.md

## Next Tasks
- Gather real testimonials/stats from client (current numbers are placeholders)
- Optional: connect custom domain www.engwish.in on deployment
