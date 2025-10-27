# Creator Landing Page 🌟

A beautiful, modern landing page for content creators built with React, Tailwind CSS, and Vite.

## Features

✨ **Stunning Design**
- Gradient backgrounds with animated elements
- Smooth transitions and hover effects
- Mouse-tracking background animations
- Floating sparkle effects

🔗 **Multiple Link Sections**
- Social media links with follower counts
- Affiliate/favorite product links
- Business/premium service links
- Newsletter signup section

📱 **Responsive Design**
- Mobile-first approach
- Adapts beautifully to all screen sizes

🎨 **Customizable**
- Easy to update colors, links, and content
- Modular component structure

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit the URL shown in the terminal (typically `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to deploy.

## Customization

### Update Your Information

Edit `src/App.jsx` to customize:

1. **Profile Information** (lines 105-120)
   - Name
   - Bio/description
   - Profile image URL

2. **Social Links** (lines 25-30)
   - Update URLs to your social media profiles
   - Modify follower counts
   - Add or remove platforms

3. **Affiliate Links** (lines 32-36)
   - Update product links and descriptions
   - Customize discount codes

4. **Business Links** (lines 38-42)
   - Update service offerings
   - Customize pricing/descriptions

### Color Scheme

The page uses a pink-purple-blue gradient theme. To customize colors, search for Tailwind color classes in `src/App.jsx`:
- `from-pink-*`, `to-purple-*`, `to-blue-*` for gradients
- `bg-pink-*`, `bg-purple-*`, `bg-blue-*` for solid colors
- `text-pink-*`, `text-purple-*`, `text-blue-*` for text colors

## Tech Stack

- **React** - UI framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

## License

Feel free to use this template for your own landing page!

---

Made with ❤️ for content creators

