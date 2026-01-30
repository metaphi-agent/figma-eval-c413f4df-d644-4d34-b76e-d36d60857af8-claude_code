# Usage Guide - Website Headers Showcase

## Getting Started

### Development

Start the development server:

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Application Structure

### Home Page
The landing page (`/`) showcases:
- Overview of the header collection
- Feature highlights
- Category browser
- Call-to-action sections

### Gallery Page
The gallery (`/gallery`) provides:
- Interactive header preview
- Navigation controls (buttons + keyboard arrows)
- Header information (name, category, ID)
- Thumbnail navigation

## Using Headers in Your Project

### Option 1: Copy Individual Components

1. Navigate to `/src/components/headers/`
2. Copy the header component you want (e.g., `Header1.tsx`)
3. Copy required UI components from `/src/components/ui/`
4. Import and use in your project:

```tsx
import Header1 from './components/headers/Header1';

function App() {
  return <Header1 />;
}
```

### Option 2: Export and Customize

1. Open the header component file
2. Customize colors, text, and styling
3. Modify the component structure as needed
4. Use Tailwind classes for quick styling changes

## Component Architecture

### Base UI Components

#### Button
```tsx
<Button
  variant="primary"    // primary | secondary | outline | ghost
  size="lg"           // sm | md | lg
  onClick={handleClick}
>
  Button Text
</Button>
```

#### Logo
```tsx
<Logo
  variant="white"     // default | white
  className="custom-class"
/>
```

#### Navigation
```tsx
<Navigation
  items={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' }
  ]}
  variant="white"     // default | white
/>
```

#### Container
```tsx
<Container
  maxWidth="xl"       // sm | md | lg | xl | 2xl | full
  className="py-8"
>
  {children}
</Container>
```

## Customization Guide

### Changing Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-brand-color',
        600: '#your-darker-shade',
      },
    },
  },
}
```

Then update component classes:
```tsx
// From
className="bg-blue-600"

// To
className="bg-primary-600"
```

### Changing Fonts

1. Add font to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

2. Update `tailwind.config.js`:
```js
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

### Modifying Layout

Headers use CSS Grid and Flexbox:

```tsx
// Two-column layout
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
  <div>Left Content</div>
  <div>Right Content</div>
</div>

// Responsive spacing
<div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
  Content
</div>
```

## Header Categories Explained

### 1. Portfolio Headers
- Full-screen hero sections
- Large typography
- Personal brand focus
- CTA buttons
- Social media links

**Best for:** Freelancers, designers, photographers

**Examples:** Header 1

### 2. Minimal Headers
- Clean, simple navigation
- Minimal elements
- Typography-focused
- Subtle effects

**Best for:** Blogs, documentation, minimal websites

**Examples:** Header 2, 3, 4, 7

### 3. Hero Headers
- Full-screen backgrounds
- Large images/videos
- Prominent headlines
- Strong CTAs

**Best for:** Landing pages, product launches, marketing sites

**Examples:** Header 8, 14

### 4. E-commerce Headers
- Product showcase
- Shopping features
- Multiple CTAs
- Promotional elements

**Best for:** Online stores, product sites

### 5. Corporate Headers
- Professional design
- Business-focused
- Trust elements
- Clear information hierarchy

**Best for:** Companies, B2B, professional services

**Examples:** Header 43

### 6. Creative Headers
- Bold designs
- Artistic elements
- Unique layouts
- Experimental effects

**Best for:** Creative agencies, portfolios, art sites

**Examples:** Header 34

### 7. App Headers
- Modern SaaS design
- User authentication elements
- Dashboard navigation
- Feature highlights

**Best for:** Web apps, SaaS products, platforms

**Examples:** Header 67, 75

## Responsive Design

All headers are built mobile-first:

```tsx
// Mobile: Stack vertically
// Tablet: Show side-by-side
// Desktop: Full layout with optimal spacing

<div className="
  flex flex-col          // Mobile: vertical
  md:flex-row           // Tablet: horizontal
  lg:grid lg:grid-cols-2 // Desktop: grid
">
```

### Breakpoints
- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (laptop)
- `xl`: 1280px (desktop)
- `2xl`: 1536px (large desktop)

## Performance Optimization

### Image Optimization
Replace placeholder gradients with optimized images:

```tsx
// Before
<div className="bg-gradient-to-br from-blue-100 to-purple-50">

// After
<img
  src="/optimized-image.webp"
  alt="Description"
  loading="lazy"
  className="w-full h-full object-cover"
/>
```

### Code Splitting
Headers are already code-split by component. Import only what you need:

```tsx
// Import specific header
import Header1 from './components/headers/Header1';

// Instead of importing all
import * from './components/headers';
```

## Keyboard Shortcuts

In the gallery:
- **← Left Arrow**: Previous header
- **→ Right Arrow**: Next header

## Accessibility Features

All components include:
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Screen reader support

### Improving Accessibility

Add descriptive alt text:
```tsx
<img src="..." alt="Descriptive text here" />
```

Ensure color contrast:
```tsx
// Check contrast ratios for text
// Minimum 4.5:1 for normal text
// Minimum 3:1 for large text
```

## Common Customizations

### 1. Change Button Colors
```tsx
// Edit Button.tsx variants
const variants = {
  primary: 'bg-your-color hover:bg-your-darker-color text-white',
}
```

### 2. Update Logo
```tsx
// Replace in Logo.tsx
<div className="flex items-center gap-2">
  <img src="/your-logo.svg" alt="Your Brand" />
  <span>Your Brand</span>
</div>
```

### 3. Modify Navigation Items
```tsx
const navItems = [
  { label: 'Your Item 1', href: '/path1' },
  { label: 'Your Item 2', href: '/path2' },
];
```

### 4. Add Dark Mode
```tsx
// Add to tailwind.config.js
darkMode: 'class',

// Use dark mode classes
className="bg-white dark:bg-gray-900"
```

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the `dist` folder to Netlify
```

### Custom Server
```bash
npm run build
# Serve the `dist` folder with any static file server
```

## Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### TypeScript Errors
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

### Styling Issues
```bash
# Rebuild Tailwind
npm run dev
# Check browser console for CSS errors
```

## Best Practices

1. **Keep Components Small**: Each header is self-contained
2. **Use TypeScript**: Leverage type safety for props
3. **Follow Naming Conventions**: Component names match their file names
4. **Maintain Accessibility**: Always include ARIA labels
5. **Optimize Images**: Use WebP format and lazy loading
6. **Test Responsiveness**: Check all breakpoints
7. **Document Changes**: Update comments when modifying code

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Lucide Icons](https://lucide.dev/icons/)

## Support

For issues or questions:
1. Check this guide
2. Review the README.md
3. Check component source code
4. Open a GitHub issue

---

**Happy coding!** 🚀
