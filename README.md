# Nabeel Sabzwari Portfolio

## Overview

This is a professional portfolio website for Nabeel Sabzwari, a Computer Science M.S. graduate specializing in Machine Learning, Bioinformatics, and Software Engineering. The application is built as a single-page React application with a Node.js/Express backend, showcasing his professional experience, projects, education, and skills through a modern, responsive interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Module System**: ES modules (type: "module" in package.json)
- **Development Setup**: tsx for TypeScript execution in development
- **Build Process**: esbuild for server bundling, Vite for client bundling
- **File Serving**: Static file serving with development hot reloading via Vite middleware

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon serverless PostgreSQL (via @neondatabase/serverless)
- **Migration System**: Drizzle Kit for database migrations
- **Temporary Storage**: In-memory storage implementation for user data (MemStorage class)
- **Session Management**: PostgreSQL session store with connect-pg-simple

### Authentication and Authorization
- **Current Implementation**: Basic user schema with username/password fields
- **Session Storage**: PostgreSQL-backed sessions
- **Validation**: Zod schemas for input validation
- **Security**: Prepared for authentication implementation with user storage interface

### Application Structure
- **Client Directory**: Contains all React frontend code and components
- **Server Directory**: Express server implementation and API routes  
- **Shared Directory**: Common schemas and types used by both client and server
- **Component Organization**: Modular section-based components (Hero, About, Experience, Projects, etc.)

### Key Features
- **Resume Download**: API endpoint for serving PDF resume files
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimization**: Meta tags and semantic HTML structure
- **Development Tools**: Error overlay and hot reloading in development
- **Accessibility**: ARIA labels and semantic markup throughout

### Build and Deployment
- **Development**: Concurrent client and server development with Vite HMR
- **Production Build**: Separate client and server builds with static file serving
- **Asset Management**: Attached assets directory for static files like resume PDFs
- **Environment Configuration**: Environment-based configuration for database and development tools