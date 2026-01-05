# Nabeel Sabzwari Portfolio

A modern, responsive portfolio website showcasing professional experience, projects, education, and skills. Built with React, TypeScript, and Tailwind CSS.

## Live Site

Visit the portfolio at: [https://nabs2000.github.io/portfolio_website/](https://nabs2000.github.io/portfolio_website/)

## Features

- **Modern UI**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive layout that works on all devices
- **Sections**:
  - Hero section with profile image and call-to-action
  - About section with background and technical skills
  - Professional experience with detailed responsibilities
  - Projects showcase
  - Education history
  - Recommendations
  - Contact information
- **Interactive Elements**: Smooth scrolling, fade-in animations, and hover effects
- **Downloadable Resume**: One-click resume download functionality

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives with custom styling
- **Routing**: Wouter (lightweight client-side routing)
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Development

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Nabs2000/portfolio_website.git
cd portfolio_website

# Install dependencies
npm install
```

### Running Locally

```bash
# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## Deployment

### Automatic Deployment (Recommended)

The site automatically deploys to GitHub Pages when you push to the `main` branch using GitHub Actions.

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy the site
3. Your site will be live at `https://nabs2000.github.io/portfolio_website/`

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch.

### GitHub Pages Setup

To enable GitHub Pages for your repository:

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. Save the settings

The site will be deployed automatically on the next push to the main branch.

## Project Structure

```
portfolio_website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── client/
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── lib/                # Utility functions
│   │   ├── pages/              # Page components
│   │   ├── App.tsx             # Main app component
│   │   └── index.css           # Global styles
│   └── index.html              # HTML template
├── public/
│   ├── profile.jpeg            # Profile image
│   └── Nabeel_Sabzwari_Resume.pdf  # Resume PDF
├── package.json                # Dependencies and scripts
├── vite.config.ts              # Vite configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## Customization

### Updating Content

To update the portfolio content, edit the respective component files in `client/src/components/`:

- `hero-section.tsx` - Name, title, and introduction
- `about-section.tsx` - Background and skills
- `experience-section.tsx` - Work experience
- `projects-section.tsx` - Project showcase
- `education-section.tsx` - Educational background
- `recommendations-section.tsx` - Testimonials
- `contact-section.tsx` - Contact information

### Updating Profile Image

Replace `public/profile.jpeg` with your own image.

### Updating Resume

Replace `public/Nabeel_Sabzwari_Resume.pdf` with your own resume PDF.

## License

MIT

## Contact

Nabeel Sabzwari
- Email: nsabzwari@ucdavis.edu
- LinkedIn: [linkedin.com/in/nabeel-sabzwari](https://linkedin.com/in/nabeel-sabzwari)
- GitHub: [github.com/Nabs2000](https://github.com/Nabs2000)
