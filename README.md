Here's the comprehensive README for OneCard Landing — following the same professional structure:

```markdown
# 🎫 OneCard — Jinja SSS Landing Page

<p align="center">
  <img src="https://onecard-system-six.vercel.app/favicon.ico" alt="OneCard Logo" width="80" height="80" />
</p>

<h1 align="center">OneCard</h1>

<p align="center">
  <em>One Card. Entire School Life.</em>
</p>

<p align="center">
  A modern landing page for the smart student management system powering <strong>29,560+ students</strong> at Jinja Senior Secondary School, Uganda.
</p>

<p align="center">
  <a href="https://onecard-system-six.vercel.app">🌐 Landing Page</a> •
  <a href="https://onecard-jinja-sss.onrender.com/login/">⚙️ Live System</a> •
  <a href="#-features">✨ Features</a> •
  <a href="#-installation">📥 Installation</a> •
  <a href="#-support">📧 Support</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel" alt="Vercel" />
</p>

---

## 📖 About OneCard

OneCard is an all-in-one smart student card and school management system that replaces paper ID cards with permanent PVC cards featuring unique QR codes.

Staff scan a QR code to instantly check fees, mark attendance, track student movement, and control meal access — all from any device, anywhere.

This repository contains the **landing page** that showcases the system and drives users to the live OneCard platform.

Built with love in Uganda 🇺🇬 for Jinja Senior Secondary School.

---

## ✨ Features

### 🎨 Landing Page
- **Hero Section** — parallax image with animated count-up statistics
- **Impact Stats** — numbers recount every time you scroll back into view
- **Staff Testimonials** — real voices from Jinja SSS
- **How It Works** — 4-step visual guide
- **User Roles** — 5 staff roles + parent portal explained
- **Performance Metrics** — speed, accessibility, and security badges
- **Tech Stack Showcase** — Django, MySQL, Cloud, Offline-ready
- **FAQ Accordion** — smooth expand/collapse animations

### 📧 Working Contact Form
- Powered by **Brevo** (Sendinblue) REST API
- Server-side validation
- Styled HTML email template
- Auto-reply sent directly to sender

### 🌓 Dark/Light Mode
- Auto-detects system preference
- Persists choice in `localStorage`
- Fully styled across every component

### 🌍 Multi-Language Support
- Google Translate integration
- English, Luganda, Kiswahili, Français
- Available in navbar and footer

### 🍪 Privacy & Legal
- Cookie consent banner
- Terms of Service page
- Privacy Policy page

### 📱 Progressive Web App
- Installable on Android, iOS, and Desktop
- Custom app manifest
- Offline-ready assets

### 🔍 SEO & Analytics
- Full Open Graph + Twitter Card metadata
- `sitemap.xml` submitted to Google Search Console
- `robots.txt` configured for indexing
- Vercel Analytics integrated
- Canonical URLs

### ♿ Accessibility
- WCAG AA compliant
- Keyboard navigable
- ARIA labels on interactive elements
- High-contrast color system
- Focus indicators

### 🎁 Extra Polish
- Animated loading splash screen
- Back to Top button
- Live system status badge (pings every 60s)
- Developer console easter egg
- "Powered by Herman Software" badge
- Custom branded 404 page

---

## 🚀 Getting Started

### 🌐 Use the Website

Visit [onecard-system-six.vercel.app](https://onecard-system-six.vercel.app) — no installation needed!

1. Browse the features and impact stats
2. Explore the user roles and FAQ
3. Contact us via the form
4. Click **Login** to access the live OneCard system

### 📱 Install as an App

OneCard works as a Progressive Web App (PWA):

**On Android:**
1. Open the site in Chrome
2. Tap the menu (⋮) → **Add to Home screen**
3. Tap **Install**

**On iPhone/iPad:**
1. Open the site in Safari
2. Tap **Share** → **Add to Home Screen**
3. Tap **Add**

**On Desktop:**
1. Open the site in Chrome or Edge
2. Click the install icon in the address bar
3. Click **Install**

---

## 🛠️ Tech Stack

OneCard is built with modern, fast technology:

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion 12 |
| **Fonts** | Inter + Playfair Display (Google Fonts) |
| **Email** | Brevo (Sendinblue) REST API |
| **Translation** | Google Translate |
| **Analytics** | Vercel Analytics |
| **Hosting** | Vercel |
| **Icons** | Custom SVG (Heroicons style) |

---

## 🎨 Color System

| Color | Hex | Usage |
|-------|-----|-------|
| Navy | `#0A1F3F` | Headers, hero, footer |
| Navy Dark | `#06162E` | Footer background |
| Navy Light | `#132D52` | Borders, overlays |
| Teal | `#00C2BA` | Buttons, links, highlights |
| Teal Dark | `#00A8A0` | Hover states |
| White | `#FFFFFF` | Page backgrounds |
| Gray Light | `#F8F9FA` | Section backgrounds |
| Charcoal | `#374151` | Body text |

---

## 📁 Project Structure

```

onecard-landing/
├── public/
│   ├── favicon.ico                    # Custom hexagon favicon
│   ├── favicon.svg                    # SVG fallback
│   ├── og-image.svg                   # Social sharing preview
│   ├── manifest.json                  # PWA manifest
│   ├── robots.txt                     # SEO robots config
│   ├── sitemap.xml                    # Site index for search engines
│   ├── console-message.js             # Developer console easter egg
│   ├── googlee083547305f9a958.html    # Google Search Console verification
│   └── images/
│       └── onecard-hero.jpg           # Hero background image
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout (SEO, fonts, providers)
│   │   ├── page.tsx                   # Main landing page
│   │   ├── not-found.tsx              # Custom 404 page
│   │   ├── globals.css                # Global styles & dark mode
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts           # Contact form API endpoint
│   │   ├── terms/
│   │   │   └── page.tsx               # Terms of Service
│   │   └── privacy/
│   │       └── page.tsx               # Privacy Policy
│   │
│   ├── components/
│   │   ├── Navbar.tsx                 # Navigation with active link highlighting
│   │   ├── Hero.tsx                   # Hero with parallax & count-up
│   │   ├── Features.tsx               # 6 feature cards
│   │   ├── Stats.tsx                  # Impact statistics
│   │   ├── LiveCounter.tsx            # Live animated counters
│   │   ├── Testimonials.tsx           # Staff testimonials
│   │   ├── DemoVideo.tsx              # Video placeholder section
│   │   ├── HowItWorks.tsx             # 4-step guide
│   │   ├── UserRoles.tsx              # 5 user roles + parent card
│   │   ├── PerformanceMetrics.tsx     # Speed/security metrics
│   │   ├── TechBadges.tsx             # Technology stack badges
│   │   ├── FAQ.tsx                    # Accordion FAQ
│   │   ├── Contact.tsx                # Contact info + form
│   │   ├── ContactForm.tsx            # Working email form
│   │   ├── Footer.tsx                 # Footer with links
│   │   ├── ThemeToggle.tsx            # Dark/light mode switch
│   │   ├── LanguageSwitcher.tsx       # Google Translate dropdown
│   │   ├── CookieBanner.tsx           # GDPR cookie consent
│   │   ├── BackToTop.tsx              # Scroll-to-top button
│   │   ├── LoadingScreen.tsx          # Animated splash screen
│   │   ├── StatusBadge.tsx            # System online/offline indicator
│   │   └── DeveloperBadge.tsx         # "Powered by Herman Software"
│   │
│   ├── context/
│   │   └── ThemeContext.tsx           # Theme provider (dark/light)
│   │
│   └── lib/
│       └── brevo.ts                   # Brevo email integration
│
├── .env.local                         # Environment variables (gitignored)
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

```

---

## 💻 Development Setup

Want to run OneCard Landing locally? Here's how:

### Prerequisites

- Node.js 18+
- npm 9+
- A Brevo account (for the contact form)

### 1. Clone the repository

```bash
git clone https://github.com/jiangsalim/onecard-landing.git
cd onecard-landing
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

Create .env.local in the root:

```env
BREVO_API_KEY=your-brevo-api-key-here
CONTACT_EMAIL=infohermansoftware@gmail.com
```

4. Start the development server

```bash
npm run dev
```

5. Open in browser

Visit http://localhost:3000

---

📧 Contact Form Setup

The contact form uses Brevo for email delivery.

1. Create a free account at brevo.com
2. Go to SMTP & API → API Keys
3. Generate a new API key
4. Add it to .env.local:

```env
BREVO_API_KEY=xkeysib-...
CONTACT_EMAIL=infohermansoftware@gmail.com
```

Emails arrive with a branded HTML template and Reply-To set to the sender.

---

🚀 Deployment

This project is optimized for Vercel.

Deploy with CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Deploy via GitHub

1. Push your repo to GitHub
2. Go to vercel.com/new
3. Import the repository
4. Add environment variables:
   · BREVO_API_KEY
   · CONTACT_EMAIL
5. Click Deploy

---

🌍 Environment Variables

Variable Description Required
BREVO_API_KEY Brevo API key for sending emails ✅ Yes
CONTACT_EMAIL Destination email for the contact form ✅ Yes

---

📊 OneCard System Info

Metric Value
Students Managed 29,560+
Student Photos 250+
Fee Verification Time 2 seconds
Staff Roles 5
Card Type PVC with QR Code
Platform Web-based (Django + MySQL)
Offline Support Yes
Hosting Render (Cloud)
Uptime 24/7

---

🤝 Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a branch for your feature (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m "Add amazing feature")
4. Push to your branch (git push origin feature/amazing-feature)
5. Open a Pull Request

---

📜 Legal

Copyright Notice

All content on this landing page is the property of Herman Software Solutions and Jinja Senior Secondary School.

Disclaimer

This is a landing page for the OneCard system. It is not affiliated with any third-party services mentioned. All trademarks belong to their respective owners.

---

📧 Support

Having issues? We're here to help!

Channel Contact
📧 Email jaingsalim@gmail.com
📱 Phone 0772723188
🌐 Website herman-software-website.vercel.app
🐛 Bug Reports GitHub Issues

---

🙏 Acknowledgements

OneCard Landing would not be possible without the incredible open-source community:

· Next.js — React framework
· Tailwind CSS — Utility-first styling
· Framer Motion — Animation library
· Brevo — Transactional email
· Google Translate — Multi-language support
· Vercel — Hosting and analytics
· Heroicons — SVG icon inspiration

---

📄 License

© 2026 Herman Software Solutions. All Rights Reserved.

---

🗺️ Roadmap

✅ Completed

· ☑ Hero with parallax and count-up stats
· ☑ Animated stats sections
· ☑ Staff testimonials
· ☑ Working contact form (Brevo)
· ☑ Dark/Light mode
· ☑ Google Translate (4 languages)
· ☑ Cookie consent banner
· ☑ Terms & Privacy pages
· ☑ PWA support
· ☑ SEO (sitemap, robots, Open Graph)
· ☑ WCAG AA accessibility
· ☑ Custom 404 page
· ☑ Live status badge
· ☑ Developer console easter egg

🚧 In Progress

· ☐ Demo video embed
· ☐ Multi-language Luganda (full translation)
· ☐ Blog section
· ☐ Testimonials CMS

🔮 Future

· ☐ Interactive live demo
· ☐ Downloadable OneCard brochure (PDF)
· ☐ Parent portal preview
· ☐ School admin dashboard preview
· ☐ Multi-school support page

---

<p align="center">
  <strong>Made with ❤️ in Uganda by HERMAN Software Solutions</strong>
</p>

<p align="center">
  ⭐ If you find OneCard useful, please give it a star on GitHub!
</p>

---

Last updated: September 2026

```