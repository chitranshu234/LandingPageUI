# Boldcraft - Bold Geometric Landing Page

A modern, fully responsive, and animated landing page built with Next.js 15, Tailwind CSS 4, and Framer Motion. Features a bold geometric/abstract design aesthetic with vibrant colors and playful animations.

## Preview

The landing page includes:
- **Hero Section** - Asymmetric layout with floating geometric shapes
- **Features Section** - Color-coded feature cards with offset positioning
- **Testimonials Section** - Bold colored cards with geometric accents
- **Pricing Section** - Three-tier pricing with animated badges
- **Footer** - Geometric pattern background with newsletter signup

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **UI Components:** shadcn/ui
- **Language:** TypeScript
- **Font:** Space Grotesk (Google Fonts)

## Design System

### Color Palette

| Color   | Hex       | Usage                    |
|---------|-----------|--------------------------|
| Coral   | `#FF6B6B` | Primary accent           |
| Teal    | `#4ECDC4` | Secondary accent         |
| Yellow  | `#FFE66D` | Tertiary accent          |
| Navy    | `#2C3E50` | Dark backgrounds & text  |
| Off-white | `#F7F7F7` | Light backgrounds      |

### Design Elements

- **Sharp edges** - No border radius for that bold, blocky feel
- **Chunky shadows** - 6px offset shadows for depth
- **Asymmetric layouts** - Offset positioning and creative compositions
- **Color blocking** - Bold background colors per section
- **Geometric shapes** - Circles, triangles, rectangles as decorative elements

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/boldcraft-landing.git
   cd boldcraft-landing
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── globals.css          # Global styles & Tailwind theme
│   ├── layout.tsx           # Root layout with fonts & metadata
│   └── page.tsx             # Main landing page
│
├── components/
│   ├── landing/             # Landing page sections
│   │   ├── geo-navbar.tsx       # Navigation bar
│   │   ├── geo-hero.tsx         # Hero section
│   │   ├── geo-features.tsx     # Features grid
│   │   ├── geo-testimonials.tsx # Testimonials section
│   │   ├── geo-pricing.tsx      # Pricing tiers
│   │   └── geo-footer.tsx       # Footer with newsletter
│   │
│   └── ui/                  # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
│
├── public/                  # Static assets
│   └── testimonial-*.jpg    # Testimonial avatars
│
├── lib/
│   └── utils.ts             # Utility functions
│
└── hooks/                   # Custom React hooks
\`\`\`

## Customization

### Changing Colors

Edit the CSS variables in `app/globals.css`:

\`\`\`css
:root {
  --geo-coral: #FF6B6B;
  --geo-teal: #4ECDC4;
  --geo-yellow: #FFE66D;
  --geo-navy: #2C3E50;
  --geo-light: #F7F7F7;
}
\`\`\`

### Modifying Sections

Each section is a standalone component in `components/landing/`. Edit the individual files to customize:

- **Content** - Update text, images, and data arrays
- **Layout** - Modify grid columns and spacing
- **Animations** - Adjust Framer Motion variants
- **Colors** - Change background and accent colors

### Adding New Sections

1. Create a new component in `components/landing/`
2. Import and add it to `app/page.tsx`
3. Follow the existing pattern for animations and styling

## Animations

The project uses Framer Motion for animations:

- **Scroll-triggered reveals** - Elements fade/slide in on viewport entry
- **Floating shapes** - Continuous rotation and movement
- **Hover effects** - Scale, shadow removal, and color changes
- **Staggered children** - Sequential animation of list items

### Animation Variants

\`\`\`tsx
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}
\`\`\`

## Responsive Breakpoints

| Breakpoint | Width    | Description     |
|------------|----------|-----------------|
| `sm`       | 640px    | Mobile landscape|
| `md`       | 768px    | Tablet          |
| `lg`       | 1024px   | Desktop         |
| `xl`       | 1280px   | Large desktop   |

## Performance

- **Optimized images** - Next.js Image component with lazy loading
- **Code splitting** - Automatic per-route bundles
- **Font optimization** - Next.js font loading with display swap
- **Animation optimization** - Framer Motion with `viewport={{ once: true }}`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

Build the production bundle and deploy the `.next` folder:

\`\`\`bash
npm run build
\`\`\`

## License

MIT License - feel free to use this for personal or commercial projects.

## Credits

- Design inspiration: Bold geometric/abstract aesthetic
- Icons: [Lucide Icons](https://lucide.dev)
- UI Components: [shadcn/ui](https://ui.shadcn.com)
- Animations: [Framer Motion](https://www.framer.com/motion)
