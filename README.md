# 🎨 Website Headers Showcase

A comprehensive collection of **101+ production-ready React header components** based on the popular Figma design file "101+ Free Website Headers for web design v1.2".

![Website Headers Preview](https://img.shields.io/badge/headers-101+-blue)
![React](https://img.shields.io/badge/react-18.2.0-61dafb)
![TypeScript](https://img.shields.io/badge/typescript-5.2.2-3178c6)
![Tailwind CSS](https://img.shields.io/badge/tailwind-3.3.6-38bdf8)

## ✨ Features

- 🎯 **101+ Header Designs** - Diverse collection covering all major design patterns
- ⚛️ **React + TypeScript** - Built with modern React and full TypeScript support
- 🎨 **Tailwind CSS** - Utility-first styling for easy customization
- 📱 **Responsive Design** - All headers are mobile-friendly and adaptive
- 🔧 **Production Ready** - Clean, maintainable code following best practices
- 🎭 **Multiple Categories** - Portfolio, Minimal, Hero, E-commerce, Corporate, Creative, App
- 🚀 **Easy Integration** - Copy and paste components into your project
- ♿ **Accessible** - Built with accessibility in mind

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Logo.tsx
│   │   ├── Navigation.tsx
│   │   ├── Container.tsx
│   │   ├── SocialIcons.tsx
│   │   └── MenuIcon.tsx
│   ├── headers/         # Header components
│   │   ├── Header1.tsx
│   │   ├── Header2.tsx
│   │   └── ...
│   └── HeaderGallery.tsx
├── pages/
│   └── HomePage.tsx
├── types/
│   └── index.ts
├── data/
│   └── headers.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🎨 Header Categories

### Portfolio (12 headers)
Professional portfolio and personal brand headers with hero sections and prominent CTAs.

### Minimal (18 headers)
Clean, simple headers focusing on essential navigation and content.

### Hero (24 headers)
Full-screen hero sections with large images, videos, or illustrations.

### E-commerce (15 headers)
Product-focused headers with shopping features and promotional elements.

### Corporate (14 headers)
Professional business headers suitable for companies and organizations.

### Creative (13 headers)
Artistic and unique headers with bold designs and animations.

### App (5 headers)
Modern SaaS and application headers with user authentication elements.

## 🔧 Component Usage

Each header is a self-contained React component that you can easily integrate into your project:

```tsx
import Header1 from './components/headers/Header1';

function App() {
  return (
    <div>
      <Header1 />
      {/* Your content */}
    </div>
  );
}
```

## 🎯 Base UI Components

The project includes reusable base components:

### Button
```tsx
<Button variant="primary" size="lg">
  Click Me
</Button>
```

Variants: `primary`, `secondary`, `outline`, `ghost`
Sizes: `sm`, `md`, `lg`

### Logo
```tsx
<Logo variant="white" />
```

### Navigation
```tsx
<Navigation
  items={[
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' }
  ]}
  variant="white"
/>
```

### Container
```tsx
<Container maxWidth="xl">
  {/* Content */}
</Container>
```

## 🎨 Customization

### Colors
Update `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your brand colors
      },
    },
  },
}
```

### Typography
Modify font families in `tailwind.config.js`:

```js
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

## 📱 Responsive Design

All headers are designed with mobile-first principles:
- Desktop: Full layout with all features
- Tablet: Optimized spacing and navigation
- Mobile: Hamburger menus and stacked layouts

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Tech Stack

- **React 18.2** - UI framework
- **TypeScript 5.2** - Type safety
- **Vite 5.0** - Build tool
- **Tailwind CSS 3.3** - Styling
- **React Router 6** - Navigation
- **Lucide React** - Icons

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new header designs
- Improve existing components
- Fix bugs or issues
- Enhance documentation

## 📄 License

This project is based on the Figma Community file "101+ Free Website Headers for web design v1.2".

The code is provided as-is for educational and commercial use. Images used in the original Figma file are placeholders - replace with your own licensed images.

## 🙏 Credits

- Original Figma Design: [101+ Free Website Headers](https://www.figma.com/community)
- Icons: [Lucide Icons](https://lucide.dev/)
- Fonts: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing documentation
- Review the component examples

---

**Made with ❤️ by the community, for the community**
