# Boldcraft

Modern, animated landing page with bold geometric designs.

## Tech Stack

- **Next.js 15** - React framework
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Space Grotesk** - Typography

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── globals.css          # Styles & Tailwind config
├── layout.tsx           # Root layout
└── page.tsx             # Landing page

components/landing/      # Page sections
├── geo-navbar.tsx
├── geo-hero.tsx
├── geo-features.tsx
├── geo-testimonials.tsx
├── geo-pricing.tsx
└── geo-footer.tsx

components/ui/           # Reusable components
```

## Color Palette

| Color  | Hex       | Usage     |
|--------|-----------|-----------|
| Coral  | `#FF6B6B` | Primary   |
| Teal   | `#4ECDC4` | Secondary |
| Yellow | `#FFE66D` | Accent    |
| Navy   | `#1a1a2e` | Dark      |

## Scripts

```bash
npm run dev       # Development server
npm run build     # Production build
npm run start     # Start production
```

## Deployment

Deploy to Vercel with one click or build and deploy to any platform:

```bash
npm run build
```

## License

MIT