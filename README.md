```markdown
# 🎫 OneCard — Jinja SSS Landing Page

<div align="center">

![OneCard Logo](public/favicon.svg)

**Smart Student Management System for Jinja Senior Secondary School**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)](https://vercel.com)

[![Live Site](https://img.shields.io/badge/Live-onecard--system--six.vercel.app-00C2BA?style=flat-square)](https://onecard-system-six.vercel.app/)
[![System](https://img.shields.io/badge/OneCard_System-Login-0A1F3F?style=flat-square)](https://onecard-jinja-sss.onrender.com/login/)

</div>

---

## 📋 Overview

Landing page for **OneCard** — an all-in-one smart student card and school management system that serves **29,560+ students** at Jinja Senior Secondary School in Uganda.

**Landing Page:** [onecard-system-six.vercel.app](https://onecard-system-six.vercel.app/)  
**Live System:** [onecard-jinja-sss.onrender.com](https://onecard-jinja-sss.onrender.com/login/)

---

## ✨ Features

- 🎯 **Hero Section** with parallax image & count-up statistics
- 📊 **Stats Section** with animated counters that reset on scroll
- 💬 **Staff Testimonials** for social proof
- 🎥 **Demo Video Section** (ready for embed)
- 🔄 **How It Works** — 4-step guide
- 👥 **User Roles** — 5 staff roles + parent portal
- ⚡ **Performance Metrics** showcase
- 🛠️ **Tech Badges** with custom SVG icons
- ❓ **FAQ Accordion** with smooth animations
- 📧 **Contact Form** with Brevo email integration
- 🌓 **Dark/Light Mode** with system preference detection
- 🌍 **Google Translate** — English, Luganda, Kiswahili, French
- 🍪 **Cookie Consent Banner** with localStorage
- 🔝 **Back to Top Button**
- 🟢 **Live Status Badge** — pings the real system every 60s
- 🖥️ **Developer Console Easter Egg**
- 📱 **PWA Support** — installable on mobile devices
- 📄 **Terms of Service** & **Privacy Policy** pages
- 🔍 **Full SEO** — Open Graph, Twitter Cards, sitemap, robots.txt
- ♿ **WCAG AA Accessible** — keyboard navigation, ARIA labels, contrast
- 🚫 **Custom 404 Page**

---

## 🚀 Tech Stack

| Category | Technology |
|----------|------------|
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
| Gray Medium | `#9CA3AF` | Secondary text |
| Charcoal | `#374151` | Body text |

---

## 📁 Project Structure

```

onecard-landing/
├── public/
│   ├── favicon.ico              # Custom hexagon favicon
│   ├── favicon.svg              # SVG fallback favicon
│   ├── og-image.svg             # Social sharing preview
│   ├── manifest.json            # PWA manifest
│   ├── robots.txt               # SEO robots config
│   ├── sitemap.xml              # Site index for search engines
│   ├── console-message.js       # Developer console easter egg
│   ├── googlee083547305f9a958.html  # Google Search Console verification
│   └── images/
│       └── onecard-hero.jpg     # Hero background image
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (SEO, fonts, providers)
│   │   ├── page.tsx             # Main landing page
│   │   ├── not-found.tsx        # Custom 404 page
│   │   ├── globals.css          # Global styles & dark mode
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts     # Contact form API endpoint
│   │   ├── terms/
│   │   │   └── page.tsx         # Terms of Service
│   │   └── privacy/
│   │       └── page.tsx         # Privacy Policy
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation with active link highlighting
│   │   ├── Hero.tsx             # Hero with parallax & count-up
│   │   ├── Features.tsx         # 6 feature cards
│   │   ├── Stats.tsx            # Impact statistics
│   │   ├── LiveCounter.tsx      # Live animated counters
│   │   ├── Testimonials.tsx     # Staff testimonials
│   │   ├── DemoVideo.tsx        # Video placeholder section
│   │   ├── HowItWorks.tsx       # 4-step guide
│   │   ├── UserRoles.tsx        # 5 user roles + parent card
│   │   ├── PerformanceMetrics.tsx # Speed/security metrics
│   │   ├── TechBadges.tsx       # Technology stack badges
│   │   ├── FAQ.tsx              # Accordion FAQ
│   │   ├── Contact.tsx          # Contact info + form
│   │   ├── ContactForm.tsx      # Working email form
│   │   ├── Footer.tsx           # Footer with links
│   │   ├── ThemeToggle.tsx      # Dark/light mode switch
│   │   ├── LanguageSwitcher.tsx # Google Translate dropdown
│   │   ├── CookieBanner.tsx     # GDPR cookie consent
│   │   ├── BackToTop.tsx        # Scroll-to-top button
│   │   ├── LoadingScreen.tsx    # Animated splash screen
│   │   ├── StatusBadge.tsx      # System online/offline indicator
│   │   └── DeveloperBadge.tsx   # "Powered by Herman Software"
│   ├── context/
│   │   └── ThemeContext.tsx      # Theme provider (dark/light)
│   └── lib/
│       └── brevo.ts             # Brevo email integration
├── .env.local                   # Environment variables (API keys)
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/jiangsalim/onecard-landing.git
cd onecard-landing

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Add your Brevo API key to .env.local

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser.

---

📧 Contact Form Setup

1. Create a free account at Brevo
2. Generate an SMTP API key
3. Add to .env.local:

```env
BREVO_API_KEY=your-api-key-here
CONTACT_EMAIL=infohermansoftware@gmail.com
```

---

🌍 Environment Variables

Variable Description Required
BREVO_API_KEY Brevo API key for email sending ✅ Yes
CONTACT_EMAIL Destination email for contact form ✅ Yes

---

🚀 Deployment

This project is optimized for Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

Environment Variables needed on Vercel:

· BREVO_API_KEY
· CONTACT_EMAIL

---

📊 OneCard System Info

Metric Value
Students Managed 29,560+
Student Photos 250+
Fee Verification 2 seconds
Staff Roles 5
Card Type PVC with QR Code
Platform Web-based (Django + MySQL)
Offline Support Yes
Hosting Render (Cloud)
Uptime 24/7

---

🔐 Security Notes

· API keys are stored in environment variables, never in code
· .env.local is gitignored
· Google Search Console verification via HTML file
· All contact form submissions validated server-side
· WCAG AA accessible design

---

📈 SEO & Analytics

· ✅ Full Open Graph + Twitter Card metadata
· ✅ sitemap.xml submitted to Google Search Console
· ✅ robots.txt configured for indexing
· ✅ Vercel Analytics integrated
· ✅ Canonical URLs set
· ✅ Structured data ready

---

👨‍💻 Developer

Herman Software Solutions

· 📧 Email: infohermansoftware@gmail.com
· 📱 Phone: +256 772723188
· 🌐 Website: herman-software-website.vercel.app
· 💻 GitHub: github.com/jiangsalim
· 📦 Repo: github.com/jiangsalim/onecard-landing

---

📄 License

© 2026 Herman Software Solutions. All Rights Reserved.

---

🙏 Acknowledgments

· Jinja Senior Secondary School — P.O Box 255, Jinja
· Built with ❤️ in Uganda 🇺🇬

---

<div align="center">

"One Card. Entire School Life. Smarter School Management."

🌐 Live Site • 🔐 System Login

</div>
```