# L's Portfolio

A modern, responsive web developer portfolio built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Optimized for mobile, tablet, and desktop devices
- **Dark Mode**: Toggle between light and dark themes
- **Interactive Elements**: Smooth scrolling, hover effects, and micro-interactions
- **Performance Optimized**: Built with Next.js best practices
- **Accessible**: Semantic HTML and ARIA labels

## 📋 Sections

1. **Hero**: Introduction with call-to-action
2. **About**: Personal bio and skills overview
3. **Projects**: Showcase of web development projects
4. **Skills**: Technical skills and tech stack visualization
5. **Experience**: Work history, education, and certifications
6. **Contact**: Contact form and information

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Custom UI components with shadcn/ui patterns
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Next.js with Turbopack

## 📦 Dependencies

### Core Dependencies
- `next`: React framework
- `react`: UI library
- `react-dom`: React DOM renderer

### UI & Styling
- `tailwindcss`: Utility-first CSS framework
- `class-variance-authority`: Utility for component variants
- `clsx`: Utility for constructing className strings
- `tailwind-merge`: Utility for merging Tailwind classes

### Components & Icons
- `lucide-react`: Icon library
- `@radix-ui/react-slot`: Primitive component for composition

### Animations
- `framer-motion`: Animation library

### Utilities
- `uuid`: Unique identifier generator

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Base UI components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── about.tsx
│   ├── contact.tsx
│   ├── experience.tsx
│   ├── hero.tsx
│   ├── navigation.tsx
│   ├── projects.tsx
│   └── skills.tsx
├── lib/                   # Utility functions
│   └── utils.ts
├── public/               # Static assets
└── tailwind.config.ts   # Tailwind configuration
```

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

- `components/hero.tsx` - Name, tagline, and avatar
- `components/about.tsx` - Personal bio and skills
- `components/projects.tsx` - Project showcase
- `components/skills.tsx` - Technical skills
- `components/experience.tsx` - Work history and education
- `components/contact.tsx` - Contact information

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update `app/globals.css` for global styles
- Adjust component-specific styles in individual component files

### Theme Colors
The theme uses CSS custom properties defined in `app/globals.css`. Modify these variables to change the color scheme.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm run start
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 🔄 Performance

- Next.js static generation
- Optimized images
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind CSS
- Lazy loading for images

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

---

Built with ❤️ using Next.js and TypeScript
