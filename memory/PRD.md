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

## Implemented (June 2026)
- Backend: POST /api/enquiries, GET /api/enquiries
- Home: Hero with 3D coverflow slider + floating objects animation, 4 course cards, About with stats, Testimonials (male names, no photos), Contact enquiry form
- Course detail pages at /course/:slug (spoken-english, study-abroad, ielts-duolingo, academic-coaching)
- Floating WhatsApp button (wa.me/919000060601), sticky glass navbar, footer
- Spoken English image AI-generated (male speaker) to comply with "no females" constraint
- Testing: iteration_1 — backend 100%, frontend 100%

## Backlog
- P1: Google Maps embed for location; enquiries admin view for staff
- P2: SEO meta tags/OG images; email notification on new enquiry (needs Resend/SendGrid key); gallery section
- P2: Rate limiting on enquiry endpoint (spam protection)

## Next Tasks
- Gather real testimonials/stats from client (current numbers are placeholders)
- Optional: connect custom domain www.engwish.in on deployment
