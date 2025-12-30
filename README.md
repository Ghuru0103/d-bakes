# D Bakes - Angular Bakery Website

A beautiful, modern, and interactive Angular application for a bakery with smooth animations, pink-themed design, and Instagram integration.

## Features

- 🎨 **Modern Design** - Clean, responsive design with pink theme matching the logo
- ✨ **Interactive Animations** - Smooth scroll animations, hover effects, and transitions
- 📸 **Gallery Section** - Image gallery with lightbox using Unsplash images
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎯 **Smooth Navigation** - Fixed header with smooth scrolling to sections
- 📧 **Newsletter Signup** - Email subscription form with validation
- 🖼️ **Image Management** - Images hosted on Cloudinary CDN
- 💖 **Pink Theme** - Beautiful pink color scheme (#EC4899) throughout the app
- 📱 **Instagram Integration** - Direct links to Instagram for ordering

## Sections

1. **Header** - Fixed navigation with logo and mobile menu
2. **Hero** - Eye-catching hero section with call-to-action buttons
3. **Menu** - Product showcase with animated cards
4. **Philosophy** - Brand story and values section
5. **Gallery** - Image gallery with lightbox (supports Cloudinary)
6. **Newsletter** - Email subscription section
7. **Footer** - Contact information and links

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Angular CLI (v18 or higher)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
ng serve
```

3. Open your browser and navigate to `http://localhost:4200`

## Image Hosting

Images are currently hosted on Cloudinary CDN. The app uses direct Cloudinary URLs for:
- Menu item images
- Philosophy section images
- Hero section background image

All images are optimized and served via Cloudinary's CDN for fast loading.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation header
│   │   ├── hero/            # Hero section
│   │   ├── menu/            # Menu/products section
│   │   ├── philosophy/      # Philosophy section
│   │   ├── gallery/         # Gallery with Cloudinary support
│   │   ├── newsletter/      # Newsletter signup
│   │   └── footer/          # Footer section
│   ├── services/
│   │   └── cloudinary.service.ts  # Cloudinary integration service
│   └── app.component.*      # Main app component
├── styles.scss              # Global styles
└── index.html              # Main HTML file
```

## Animations

The app uses Angular Animations for smooth, interactive effects:

- **Fade In** - Elements fade in on scroll
- **Slide In** - Elements slide in from different directions
- **Stagger** - Sequential animations for lists
- **Hover Effects** - Interactive hover animations
- **Lightbox** - Smooth image lightbox transitions

## Customization

### Colors

The app uses a pink theme matching the D Bakes logo. Update CSS variables in `src/styles.scss`:

```scss
:root {
  --primary-pink: #EC4899;
  --primary-pink-light: #F472B6;
  --primary-pink-dark: #DB2777;
  --dark-gray: #1F2937;
  --light-gray: #6B7280;
  --light-pink: #FDF2F8;
  // ... more variables
}
```

### Images

- **Menu Images**: Cloudinary URLs in `src/app/components/menu/menu.component.ts`
- **Philosophy Images**: Cloudinary URLs in `src/app/components/philosophy/philosophy.component.ts`
- **Hero Image**: Cloudinary URL in `src/app/components/hero/hero.component.html`
- **Gallery Images**: Unsplash placeholder images in `src/app/components/gallery/gallery.component.ts`

## Build

```bash
# Development build
ng build

# Production build
ng build --configuration production
```

## Technologies Used

- Angular 18
- TypeScript
- SCSS
- Angular Animations
- Cloudinary (optional)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for use.

## Support

For issues or questions, please open an issue in the repository.
