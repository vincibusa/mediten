# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a Next.js 15.5.4 application using the App Router with TypeScript. The project is a modern website for Mediterranea Engineering, an Italian engineering and consulting company.

### Core Technologies
- **Next.js 15.5.4** with App Router and Turbopack
- **TypeScript** with strict mode enabled
- **Tailwind CSS 4** with custom theme using OKLCH color space
- **Shadcn UI** component library with Radix UI primitives
- **Framer Motion** for animations
- **Lucide React** for icons

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── page.tsx           # Homepage
│   ├── restauro/          # Service pages (7 total)
│   ├── riqualificazione/
│   ├── edilizia/
│   ├── turismo/
│   ├── idraulica/
│   ├── energia/
│   ├── consulting/
│   ├── progetti/          # Project overview
│   │   └── [project]/     # Individual project pages
│   ├── contatti/          # Contact form
│   └── policy/            # Policies and certifications
├── components/
│   ├── ui/                # Shadcn UI components
│   ├── nav-bar.tsx        # Navigation with services dropdown
│   ├── footer-section.tsx # Company footer
│   ├── feature-card.tsx   # Immersive service cards
│   ├── service-card.tsx   # Service display cards
│   ├── project-card.tsx   # Project display cards
│   └── animated-section.tsx # Scroll-triggered animations
└── lib/
    └── utils.ts           # Utility functions (cn helper)
```

## Component System

### Custom Components
- **NavBar**: Sticky navigation with services dropdown (desktop) and sheet menu (mobile)
- **FeatureCard**: Immersive cards with full-size images, gradient overlays, and hover animations
- **AnimatedSection**: Wrapper for scroll-triggered animations using Framer Motion
- **FooterSection**: Company information and organized links

### Shadcn UI Components
Components are located in `src/components/ui/` and include:
- Button, Card, Input, Textarea
- NavigationMenu, Sheet, HoverCard
- Accordion, Tabs, Separator
- Badge, Label, Form

## Styling System

- **Tailwind CSS 4** with custom theme variables
- **Color System**: OKLCH color space with primary (blue) and accent (teal) colors
- **Typography**: Inter font with CSS variables
- **Responsive**: Mobile-first design with breakpoint utilities
- **Dark Mode**: CSS variables defined for dark theme

## Development Conventions

### Code Style (from .cursor/rules/)
- **Indentation**: Tabs
- **Strings**: Single quotes
- **Semicolons**: Omitted
- **Line Length**: Max 80 characters
- **Naming**: PascalCase for components, kebab-case for files, camelCase for variables

### Component Patterns
```tsx
'use client' // Only when necessary

interface Props {
  // TypeScript interfaces
}

export function ComponentName({ props }: Props) {
  // Component logic
  return (...)
}
```

### Animation Patterns
- Use Framer Motion for all animations
- Scroll-triggered animations with `whileInView`
- Smooth transitions with proper easing
- Performance optimized with `viewport={{ once: true }}`

## Key Dependencies

- **@radix-ui/react-***: Accessible UI primitives
- **framer-motion**: Animation library
- **lucide-react**: Icon library
- **react-hook-form**: Form handling
- **@hookform/resolvers**: Form validation with Zod
- **zod**: Schema validation
- **clsx + tailwind-merge**: Conditional className utilities

## Content and Localization

- **Language**: Italian
- **Company**: Mediterranea Engineering S.r.l.
- **Services**: 7 main service areas with detailed project pages
- **Certifications**: ISO 9001, 14001, 37001, 45001, PdR 125

## Image Optimization

Next.js Image component with remote patterns configured for:
- `images.unsplash.com`
- `static.wixstatic.com`

## Accessibility

- Semantic HTML structure
- ARIA labels and attributes
- Keyboard navigation support
- Screen reader friendly
- Proper color contrast ratios