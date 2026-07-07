# Page2Lead — AI Automation Agency Website

A premium, conversion-optimized website for an AI Automation Agency. Built with React, TypeScript, Vite, and Tailwind CSS — designed to look and feel like a ₹5–10 lakh agency build.

## Tech Stack

- **React 18** + **TypeScript** — component architecture & type safety
- **Vite** — build tool & dev server
- **Tailwind CSS** — utility-first styling with a custom design system
- **React Router v6** — client-side routing
- **Framer Motion** — animations & micro-interactions
- **Lucide React** — icon library
- **React Hook Form + Zod** — form handling & validation
- **Radix UI primitives** — accessible component foundations

## Pages Included

- Home
- Services (+ individual service detail pages)
- Industries
- Portfolio
- Case Studies
- Pricing
- About
- Contact (with working form validation)
- Blog
- FAQ
- Privacy Policy
- Terms of Service
- 404 Page

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

Fill in any values you need (only required if/when you connect a real backend — the site runs fully without them).

### 3. Run the development server

```bash
npm run dev
```

Visit `http://localhost:5173` to view the site.

### 4. Build for production

```bash
npm run build
```

This generates an optimized production build in the `dist/` folder.

### 5. Preview the production build locally

```bash
npm run preview
```

## Project Structure

```
page2lead/
├── public/                  # Static assets (favicon, etc.)
├── src/
│   ├── components/
│   │   ├── ui/               # Reusable primitives (Button, Card, Input, etc.)
│   │   ├── layout/            # Navbar, Footer, Layout wrapper
│   │   ├── sections/           # Homepage sections (Hero, Services, FAQ, etc.)
│   │   └── pages/              # Route-level page components
│   ├── data/                  # Static content (services, testimonials, FAQs, pricing)
│   ├── hooks/                  # Custom React hooks (useTheme, useScrolled)
│   ├── lib/                    # Utility functions (cn, formatPrice, slugify)
│   ├── types/                  # TypeScript interfaces
│   ├── App.tsx                 # Route definitions
│   ├── main.tsx                 # App entry point
│   └── index.css                # Global styles & design tokens
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Design System Notes

- **Colors**: Custom brand palette (indigo/electric blue accent on navy/white base), defined as CSS variables in `index.css` for full dark/light mode support.
- **Typography**: Inter for display/body, JetBrains Mono for any code/technical content.
- **Spacing**: Extended Tailwind spacing scale for generous, premium layouts.
- **Dark Mode**: Toggled via the `dark` class on `<html>`, persisted to `localStorage`. Toggle button is in the navbar.
- **Animations**: Framer Motion for scroll-triggered reveals, hover states, and page transitions. Kept subtle and purposeful — not flashy.

## Deployment

This is a static Vite build — it deploys to any static host.

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Then drag the `dist/` folder into Netlify, or connect your Git repo
# Build command: npm run build
# Publish directory: dist
```

### Any static host (Hostinger, GitHub Pages, etc.)
Run `npm run build`, then upload the contents of the `dist/` folder.

## Next Steps / Future Backend

The codebase is structured so a backend can be added cleanly:

- **Contact form**: Currently simulates submission client-side. Replace the `onSubmit` handler in `src/components/pages/ContactPage.tsx` with a real API call (Node.js/Express + Supabase recommended, see `.env.example`).
- **Blog**: Currently static content in `BlogPage.tsx`. Can be connected to a CMS or Supabase table for dynamic posts.
- **AI Chatbot widget**: Not yet implemented on this site — can be added using the OpenAI/Gemini API keys in `.env.example`, following the pattern used in the Page2Lead SmileCare-style projects.

## License

Proprietary — built for Page2Lead. All rights reserved.
