# Cloudinary Gallery Setup Guide

## Issue: Gallery Not Showing Cloudinary Images

The Cloudinary Admin API (`/resources/search`) **cannot be called directly from the browser** due to:
1. **CORS restrictions** - Cloudinary Admin API doesn't allow browser requests
2. **Security** - API secret should never be exposed in client-side code

## Solutions

### Option 1: Backend Proxy (Recommended for Production)

Create a backend API endpoint that proxies Cloudinary requests:

**Example Node.js/Express endpoint:**
```javascript
app.get('/api/cloudinary/media', async (req, res) => {
  const cloudinary = require('cloudinary').v2;
  cloudinary.config({
    cloud_name: 'ddanlymn8',
    api_key: '973769153475969',
    api_secret: 'iCBaJIS17RAto1MhsVISvbQTKhE'
  });

  try {
    const result = await cloudinary.search
      .expression('folder:bakery-gallery/*')
      .max_results(100)
      .execute();
    
    res.json(result.resources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

Then update `cloudinary.service.ts`:
```typescript
getAllMedia(): Observable<...> {
  return this.http.get<any>(`/api/cloudinary/media`);
}
```

### Option 2: Manual Public IDs (Quick Fix)

If you know the file names in your Cloudinary folder, you can manually specify them:

**Update `gallery.component.ts`:**
```typescript
ngOnInit() {
  // Manually specify your Cloudinary image/video file names
  const publicIds = [
    'image1.jpg',
    'image2.jpg',
    'video1.mp4',
    // ... add all your file names
  ];
  
  this.cloudinaryMedia = this.cloudinaryService.getMediaByPublicIds(publicIds);
}
```

### Option 3: Use Cloudinary Widget/SDK

Install Cloudinary Angular SDK:
```bash
npm install @cloudinary/angular @cloudinary/url-gen
```

### Option 4: Test with Known URLs

You can test if your Cloudinary setup works by constructing URLs directly:

**Image URL format:**
```
https://res.cloudinary.com/ddanlymn8/image/upload/w_600,h_600,q_auto:good,f_auto,c_fill/bakery-gallery/your-image-name.jpg
```

**Video URL format:**
```
https://res.cloudinary.com/ddanlymn8/video/upload/q_auto,f_auto/bakery-gallery/your-video-name.mp4
```

## Current Status

- ✅ Cloudinary credentials configured
- ✅ Gallery component ready to display images/videos
- ⚠️ Admin API requires backend proxy (CORS issue)
- ✅ Fallback to dummy images when Cloudinary fails

## Next Steps

1. **Check browser console** for specific error messages
2. **Verify folder name** - Ensure folder is exactly `bakery-gallery` in Cloudinary
3. **Upload test images** to `bakery-gallery` folder in Cloudinary dashboard
4. **Create backend proxy** (Option 1) for production use
5. **Or use manual public IDs** (Option 2) for quick testing

## Testing

1. Open browser console (F12)
2. Look for Cloudinary error messages
3. Check Network tab for failed API requests
4. Verify Cloudinary folder has images uploaded

