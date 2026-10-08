# Folex - Digital Agency Landing Page (Astro)

This is the exact Folex Lite digital agency website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## 🚀 Quick Start (Local Setup)

1. **Extract and open terminal in project directory**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the local dev server:**
   ```bash
   npm run dev
   ```
4. Open [http://localhost:4321](http://localhost:4321) in your browser!

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🛠️ Project Structure

- `src/layouts/Layout.astro` - Base HTML shell, Google Fonts, and meta tags
- `src/pages/index.astro` - Main index landing page
- `src/components/Navbar.astro` - Header navigation, language selector, and CTA
- `src/components/Hero.astro` - Hero section with headline and creative studio photography
- `src/components/ClientLogos.astro` - 2x4 logo grid
- `src/components/Services.astro` - Interactive expandable services breakdown
- `src/components/Projects.astro` - 2x2 featured case studies grid
- `src/components/Pricing.astro` - 3-tier pricing cards
- `src/components/Contact.astro` - Electric yellow contact form & social links
- `src/components/Footer.astro` - Bottom contact information bar
