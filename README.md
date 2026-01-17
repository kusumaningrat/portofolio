# DevOps Portfolio Website

A modern, production-ready portfolio website for a DevOps Engineer, built with Next.js 14 (App Router) and Tailwind CSS. Features a clean, dark theme inspired by terminal and infrastructure aesthetics.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router and TypeScript
- **Styling**: Tailwind CSS with custom terminal-inspired theme
- **Fully Responsive**: Optimized for desktop and mobile devices
- **SEO Optimized**: Meta tags, OpenGraph, and semantic HTML
- **Accessible**: Semantic HTML structure and ARIA labels
- **Sections**:
  - Hero section with professional introduction
  - Skills categorized by technology domains
  - Experience timeline with impact-focused achievements
  - Projects showcase with tech stacks and GitHub links
  - Contact section with email and social links

## 📋 Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

## 🛠️ Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd portofolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 🏗️ Project Structure

```
portofolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Navigation.tsx      # Fixed navigation bar
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   ├── Skills.tsx          # Skills showcase
│   ├── Experience.tsx      # Experience timeline
│   ├── Projects.tsx        # Projects grid
│   └── Contact.tsx         # Contact section
├── public/                 # Static assets (if needed)
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 📝 Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, role, and description
   - Modify GitHub and LinkedIn URLs

2. **Experience** (`components/Experience.tsx`):
   - Edit the `experiences` array with your work history
   - Update companies, roles, periods, and achievements

3. **Projects** (`components/Projects.tsx`):
   - Modify the `projects` array with your projects
   - Update descriptions, tech stacks, and GitHub links

4. **Contact** (`components/Contact.tsx`):
   - Change email address
   - Update social media links

5. **Metadata** (`app/layout.tsx`):
   - Update SEO metadata (title, description, keywords)
   - Modify OpenGraph and Twitter card information

### Styling

- **Colors**: Edit `tailwind.config.ts` to customize the color scheme
- **Fonts**: Modify `app/layout.tsx` to change font families
- **Animations**: Adjust animations in `tailwind.config.ts` and `app/globals.css`

## 🚢 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts. For production deployment:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub Integration

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the project
   - Click "Deploy"

3. **Automatic Deployments:**
   - Every push to the main branch will trigger a production deployment
   - Pull requests will create preview deployments

### Environment Variables

If you need environment variables:
1. Add them in Vercel dashboard: Project Settings → Environment Variables
2. Or use `.env.local` for local development (already in `.gitignore`)

## 🧪 Build for Production

Test the production build locally:

```bash
npm run build
npm start
```

This creates an optimized production build and serves it at `http://localhost:3000`.

## 📦 Build Output

The production build will be in the `.next` directory (not committed to git).

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available for personal use. Customize it freely for your portfolio.

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and adapt it for your own use!

---

Built with ❤️ using Next.js and Tailwind CSS
