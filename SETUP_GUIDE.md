# Setup & Deployment Guide

## Initial Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The website will automatically open at `http://localhost:3000`

## File Structure Overview

### Components (`src/components/`)

- **Navbar.jsx**: Navigation bar with dark mode toggle and mobile menu
- **Footer.jsx**: Footer with social links and site navigation
- **ProjectCard.jsx**: Reusable card component for displaying projects
- **TechBadge.jsx**: Technology badge component

### Pages (`src/pages/`)

- **Home.jsx**: Landing page with hero section and featured projects
- **Projects.jsx**: Projects grid with filter functionality
- **ProjectDetail.jsx**: Individual project page with full details
- **About.jsx**: About section with skills and experience
- **Contact.jsx**: Contact form and contact information

### Data (`src/data/`)

- **projects.js**: All project data in structured format

### Configuration

- **tailwind.config.js**: Tailwind theme customization
- **vite.config.js**: Vite build configuration
- **postcss.config.js**: PostCSS configuration for Tailwind

## Adding Project Screenshots

1. **Prepare your screenshots**: Take PNG or JPG images of your projects (recommended: 1200x800px)

2. **Place in public folder**:

   ```
   public/projects/
   ├── video-cv-analyzer.png
   ├── accident-dashboard.png
   ├── weather-energy-dashboard.png
   ├── data-streaming-architecture.png
   ├── moving-company-website.png
   └── school-ent-system.png
   ```

3. **Update project URLs** in `src/data/projects.js` if using real images (currently shows emoji placeholders)

## Customization Guide

### Colors

Edit `tailwind.config.js` theme to change colors globally:

```javascript
colors: {
  blue: {
    600: '#your-color'
  }
}
```

### Fonts

Add custom fonts to `index.html` and update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ["Font Name", "sans-serif"];
}
```

### Adding New Pages

1. Create new file in `src/pages/`:

```javascript
// src/pages/YourPage.jsx
export default function YourPage() {
  return <div className="min-h-screen pt-20 pb-12">{/* Your content */}</div>;
}
```

2. Import in `App.jsx`:

```javascript
import YourPage from "./pages/YourPage";
```

3. Add route:

```javascript
<Route path="/your-path" element={<YourPage />} />
```

4. Add to navbar in `Navbar.jsx`:

```javascript
{ path: '/your-path', label: 'Your Page' }
```

### Adding New Components

1. Create component file in `src/components/YourComponent.jsx`:

```javascript
export default function YourComponent({ props }) {
  return <div>Component content</div>;
}
```

2. Export from `src/components/index.js`:

```javascript
export { default as YourComponent } from "./YourComponent";
```

3. Use in pages:

```javascript
import { YourComponent } from "../components";
```

## Deployment Options

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build first
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. Add to `package.json`:

```json
"homepage": "https://yourusername.github.io/portfolio"
```

2. Build and deploy:

```bash
npm run build
```

3. Push to GitHub and enable Pages in repository settings

## Environment Variables

Create `.env.local` for sensitive data:

```
VITE_CONTACT_EMAIL=your@email.com
```

Access in code:

```javascript
const email = import.meta.env.VITE_CONTACT_EMAIL;
```

## Performance Optimization

1. **Image Optimization**
   - Use compressed PNG/JPG images
   - Use WebP format where supported
   - Lazy load images below the fold

2. **Code Splitting**
   - Currently handled automatically by Vite/React

3. **SEO Optimization**
   - Update meta tags in `index.html`
   - Add meta descriptions to pages
   - Use semantic HTML

## Troubleshooting

### Port Already in Use

```bash
# Use different port
npm run dev -- --port 3001
```

### Tailwind Classes Not Working

```bash
# Rebuild CSS
npm run dev
```

### Build Issues

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run build
```

## Production Checklist

- [ ] Update personal information
- [ ] Add project screenshots
- [ ] Update project descriptions and links
- [ ] Test all links and navigation
- [ ] Check dark mode functionality
- [ ] Test responsive design on mobile
- [ ] Update social media links
- [ ] Add Google Analytics (optional)
- [ ] Set up contact form backend (currently uses mailto)
- [ ] Test contact form
- [ ] Optimize images
- [ ] Run performance audit
- [ ] Deploy to production

## Contact Form Backend Integration

To make the contact form functional with email backend:

1. **Using Formspree** (Easy):

   ```bash
   # Replace form action in Contact.jsx
   ```

2. **Using EmailJS**:

   ```bash
   npm install @emailjs/browser
   ```

3. **Own Backend**:
   Create API endpoint and update form submission logic

## Monitoring

After deployment:

- Set up Google Analytics
- Monitor error logs
- Check performance metrics
- Track user behavior

## Support

For issues or questions, check the README.md or update the documentation.
