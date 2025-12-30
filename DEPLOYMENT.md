# Deployment Guide for D Bakes

## Production Build

This application is ready for production deployment. Follow these steps:

### 1. Build for Production

```bash
npm run build -- --configuration production
```

The production build will be created in the `dist/d-bakes` directory.

### 2. Hosting Options

#### Option A: Static Hosting (Recommended)
- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist/d-bakes` folder or connect GitHub
- **GitHub Pages**: Use the `dist/d-bakes` folder contents
- **Firebase Hosting**: Deploy the `dist/d-bakes` folder

#### Option B: Traditional Web Server
- Copy all files from `dist/d-bakes` to your web server's public directory
- Configure your server to serve `index.html` for all routes (for Angular routing)

### 3. Environment Configuration

The app uses environment variables for configuration. Check:
- `src/environments/environment.ts` (development)
- `src/environments/environment.prod.ts` (production)

### 4. Important Notes

- The app is a static Angular application - no backend required
- All images are hosted on Cloudinary (configured in environment files)
- The logo is served from `public/logo.jpg`
- Instagram links are configured in footer and hero components

### 5. Build Output

The production build includes:
- Optimized and minified JavaScript bundles
- Optimized CSS
- Tree-shaken code (removed unused code)
- Production-ready assets

### 6. Performance

- Initial bundle size: ~400KB (gzipped: ~120KB)
- Lazy loading enabled for better performance
- Images optimized and lazy-loaded

## Quick Deploy Commands

```bash
# Build for production
npm run build -- --configuration production

# The dist/d-bakes folder is ready to deploy
```

