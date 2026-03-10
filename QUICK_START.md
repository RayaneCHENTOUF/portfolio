# Quick Start Commands

## Installation & Development

```bash
# Install dependencies
npm install

# Start development server (opens on port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

### Watch Mode

The development server runs with hot module replacement (HMR).
Any changes to `.jsx`, `.js`, or `.css` files will hot reload.

```bash
npm run dev
```

### Preview Build

Test production build locally:

```bash
npm run build
npm run preview
```

## Project Customization

### Update Personal Information

1. Edit `src/pages/About.jsx` - bio and skills
2. Edit `src/pages/Contact.jsx` - contact info
3. Update `src/data/projects.js` - project details

### Add New Project

1. Edit `src/data/projects.js`:

```javascript
{
  id: 7,
  title: "New Project",
  shortDescription: "...",
  detailedDescription: "...",
  features: ["..."],
  technologies: ["..."],
  screenshot: "new-project.png",
  github: "https://github.com/...",
  color: "from-blue-600 to-blue-400"
}
```

### Add Project Screenshot

1. Add image to `public/projects/`
2. Update `screenshot` field in project data

### Change Colors

Edit theme in `tailwind.config.js`:

```javascript
extend: {
  colors: {
    primary: "#your-color";
  }
}
```

### Add New Page

1. Create `src/pages/NewPage.jsx`
2. Add route in `App.jsx`:

```javascript
<Route path="/new" element={<NewPage />} />
```

3. Add to navbar in `Navbar.jsx`

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
npm run build
# Push dist folder to gh-pages branch
```

## Debugging

### Check for Errors

```bash
# View console in browser DevTools
# Check terminal for build errors
```

### Dark Mode Issues

- Clear browser cache (Ctrl+Shift+Delete)
- Reload page (Ctrl+Shift+R)

### Styling Issues

- Save file to trigger HMR
- Check Tailwind classes are spelled correctly
- Verify dark: prefix is used for dark mode

## Performance

### Check Bundle Size

```bash
npm run build
# Check dist/ folder size
```

### Lighthouse Audit

- Open DevTools (F12)
- Go to Lighthouse tab
- Run audit

## Git Commands

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote
git remote add origin https://github.com/username/portfolio

# Push
git push -u origin main
```

## Troubleshooting

### Port 3000 Already in Use

```bash
npm run dev -- --port 3001
```

### Dependencies Issues

```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Build Fails

```bash
npm run build -- --debug
# Check error messages in terminal
```

### Dark Mode Not Working

1. Check `Navbar.jsx` `useEffect` hook
2. Verify dark: classes in components
3. Check `tailwind.config.js` has `darkMode: 'class'`

## File Editing Tips

### Update Contact Email

- `src/pages/Contact.jsx` - Form and contact card
- `src/components/Footer.jsx` - Footer links

### Update Social Links

- `src/components/Navbar.jsx` - Navbar
- `src/components/Footer.jsx` - Footer
- `src/pages/Contact.jsx` - Contact page

### Update About Section

- `src/pages/About.jsx` - Bio, skills, education

### Update Home Page

- `src/pages/Home.jsx` - All sections

## Useful VS Code Extensions

- **ES7+ React/Redux/React-Native snippets** - dsznajder.es7-react-js-snippets
- **Tailwind CSS IntelliSense** - bradlc.vscode-tailwindcss
- **Prettier** - esbenp.prettier-vscode
- **ES Lint** - dbaeumer.vscode-eslint

## Resources

- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)

## Common Patterns

### Create New Component

```javascript
// src/components/MyComponent.jsx
export default function MyComponent({ props }) {
  return <div className="...">{/* Content */}</div>;
}
```

### Add Route

```javascript
// App.jsx
<Route path="/path" element={<MyComponent />} />
```

### Use State

```javascript
import { useState } from "react";

const [state, setState] = useState(initialValue);
```

### Conditional Styling

```javascript
className={`base-class ${condition ? 'class-if-true' : 'class-if-false'}`}
```

## Performance Tips

1. Keep components small and focused
2. Use CSS classes instead of inline styles
3. Lazy load images when possible
4. Minimize re-renders with proper dependencies
5. Use React.memo for expensive components

## Security Notes

- Contact form uses mailto: (basic security)
- No sensitive data stored client-side
- Use HTTPS in production
- Validate form input before submission

## License

MIT License - Feel free to use this template for your portfolio!

---

For more detailed information, see README.md and SETUP_GUIDE.md
