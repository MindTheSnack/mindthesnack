# MindTheSnack - Healthy Vending Landing Page

A modern, professional landing page for MindTheSnack, built with **Next.js 14+**, **React 19**, **Tailwind CSS**, and **TypeScript**.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and animated background orbs
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Components**: 
  - Smooth scroll navigation with active state detection
  - Product carousel with smooth transitions
  - Machine image carousel with dot indicators
  - Product/founder modals with animations
- **Performance Optimized**:
  - Next.js static export for GitHub Pages
  - Image optimization with Next.js Image component
  - Fast build with Turbopack
- **Professional Styling**: Tailwind CSS with custom animations and glassmorphism effects
- **TypeScript**: Full type safety throughout the application

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Setup & Development

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser. The page will auto-update as you make changes.

### Production Build

```bash
npm run build
npm start
```

## 📦 Deployment to GitHub Pages

### Option 1: Automated with GitHub Actions (Recommended)

1. Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

2. Push to main branch to trigger deployment

### Option 2: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `out` directory to GitHub Pages

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.ts` to modify:
- Dark theme colors
- Accent colors (cyan blue)
- Custom animations

### Content
Update components in `components/` directory:
- `Hero.tsx` - Hero section
- `AboutUs.tsx` - Team/About section
- `Partnership.tsx` - Charity partnership
- `Products.tsx` - Product showcase
- `Machines.tsx` - Machine information
- `Carousel.tsx` - Product carousel
- `Footer.tsx` - Footer links

### Images
Place all images in `public/img/` directory. Update image paths in components as needed.

## 📁 Project Structure

```
mindthesnack/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & animations
├── components/
│   ├── Navigation.tsx      # Bottom navigation
│   ├── Hero.tsx            # Hero section
│   ├── AboutUs.tsx         # About Us section
│   ├── Partnership.tsx     # Partnership section
│   ├── Products.tsx        # Products section
│   ├── Machines.tsx        # Machines section
│   ├── Carousel.tsx        # Product carousel
│   ├── Modal.tsx           # Modal component
│   ├── Footer.tsx          # Footer
│   └── BackgroundOrbs.tsx  # Animated background
├── public/
│   └── img/               # Image assets
├── tailwind.config.ts     # Tailwind configuration
├── next.config.ts         # Next.js configuration
└── package.json           # Dependencies
```

## 🎯 Key Features

### Navigation
- Fixed bottom navigation bar
- Auto-detects current section on scroll
- Smooth scroll to section on click

### Modals
- Click on products or founders to view details
- Smooth open/close animations
- Responsive image display

### Carousels
- Product showcase carousel with arrow navigation
- Machine image carousel with dot indicators
- Smooth transitions and responsive behavior

### Responsive Design
- Mobile-first approach
- Breakpoints at 600px and 900px
- Touch-friendly navigation and buttons

## 🚀 Performance

- **Static Export**: Pre-renders all pages for GitHub Pages
- **Image Optimization**: Lazy loading and responsive images
- **CSS-in-JS**: Tailwind CSS for minimal bundle size
- **Fast Build**: Turbopack-powered build system

## 📝 License

All rights reserved © 2026 MindTheSnack

## 📞 Contact

- Email: customerservice.mindthesnack@gmail.com
- Phone: 07379509885 / 07597113757
- Location: London, United Kingdom
