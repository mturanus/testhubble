# Test Hubble - Next.js Website with Framer Motion Animations

A modern, professional website for Test Hubble built with Next.js 14 and Framer Motion, featuring advanced scroll-driven animations and micro-interactions.

## Features

### Animation Components
- **RevealOnScroll** - Elements fade in and slide up as you scroll
- **ParallaxBackground** - Subtle parallax effects for background elements
- **ScrollProgress** - Animated progress bar at the top showing scroll position
- **StickySection** - Sections that pin and fade as you scroll
- **AnimatedCard** - Cards with hover effects and reveal animations
- **Timeline** - Staggered timeline animations for process steps
- **AnimatedSVG** - SVG animations with path drawing effects

### Performance Optimizations
- Reduced motion support for accessibility
- Viewport-based animations (only animate when visible)
- Optimized re-renders with React hooks
- CSS-based animations where possible

### Design Features
- **Light, airy design** with pastel color palette
- **Soft gradients** and rounded cards throughout
- **Clean typography** using Inter font family
- **Fully responsive** layout for all devices
- **Smooth animations** powered by Framer Motion

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.js          # Root layout with font loading
│   ├── page.js            # Homepage
│   ├── services/
│   │   └── page.js        # Services page
│   └── globals.css        # Global styles
├── components/
│   ├── animations/         # Reusable animation components
│   │   ├── RevealOnScroll.js
│   │   ├── ParallaxBackground.js
│   │   ├── ScrollProgress.js
│   │   ├── StickySection.js
│   │   ├── AnimatedCard.js
│   │   ├── Timeline.js
│   │   └── AnimatedSVG.js
│   ├── Navbar.js
│   ├── Hero.js
│   ├── ValueProposition.js
│   ├── ProblemsSolved.js
│   ├── HowItWorks.js
│   ├── TrustSignals.js
│   ├── ContactForm.js
│   ├── Footer.js
│   └── [other page components]
├── hooks/
│   └── useReducedMotion.js  # Hook for reduced motion preference
└── package.json
```

## Animation Features

### Scroll-Driven Animations
- Elements reveal as they enter the viewport
- Parallax effects on hero background orbs
- Scroll progress indicator at top of page
- Sticky sections with fade effects

### Micro-Interactions
- Card hover effects with scale and shadow
- Button hover states
- Form input focus states
- Smooth page transitions

### Timeline Animations
- Staggered animations for process steps
- Rotating number badges
- Icon animations with spring physics

## Accessibility

- Respects `prefers-reduced-motion` media query
- All animations can be disabled for users who prefer reduced motion
- Semantic HTML structure
- Keyboard navigation support

## Browser Support

Works in all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --soft-blue: #B8D4E3;
  --mint-green: #C5E4D7;
  --lavender: #D4C5E8;
  /* ... */
}
```

### Animation Timing
Adjust animation durations in component files or use Framer Motion's transition props.

## Technologies Used

- **Next.js 14** - React framework
- **Framer Motion** - Animation library
- **React 18** - UI library
- **CSS Modules** - Styling

## License

© 2024 Test Hubble. All rights reserved.
