# Ankit Kumar - ML Engineer Portfolio

## Overview

This is a modern full-stack portfolio application showcasing the work and expertise of Ankit Kumar, a Machine Learning Engineer. The application features an interactive 3D website with a professional portfolio layout, built using React on the frontend and Express.js on the backend with PostgreSQL database integration.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **3D Graphics**: Three.js with React Three Fiber for interactive 3D elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session store
- **Development**: Hot module replacement with Vite integration

### Key Technologies
- **Language**: TypeScript throughout the stack
- **Module System**: ES Modules
- **Package Manager**: npm
- **Build Target**: Node.js 20

## Key Components

### Frontend Components
1. **ThreeScene**: Interactive 3D background with floating geometric elements
2. **Navigation**: Smooth scroll navigation with mobile responsiveness
3. **HeroSection**: Landing area with gradient backgrounds and call-to-action
4. **AboutSection**: Professional background and expertise showcase
5. **ProjectsSection**: Portfolio of ML projects with images and tags
6. **JourneySection**: Career timeline with professional experience
7. **ContactSection**: Contact form with toast notifications

### Backend Components
1. **Express Server**: Main application server with middleware setup
2. **Route Registration**: Modular route organization
3. **Storage Interface**: Abstracted data layer with in-memory implementation
4. **Vite Integration**: Development server integration for hot reloading

### Database Schema
- **Users Table**: Basic user authentication schema with username/password
- **Extensible Design**: Schema ready for additional portfolio-related entities

## Data Flow

1. **Client Requests**: Frontend makes API calls to Express backend
2. **Route Handling**: Express routes process requests and interact with storage layer
3. **Data Storage**: Storage interface abstracts database operations
4. **Response**: JSON responses sent back to client
5. **UI Updates**: TanStack Query manages cache and UI updates

## External Dependencies

### UI & Styling
- Radix UI components for accessibility
- Tailwind CSS for utility-first styling
- Lucide React for icons
- Font Awesome for additional icons
- Google Fonts (Inter) for typography

### 3D Graphics
- Three.js for 3D rendering
- React Three Fiber for React integration
- React Three Drei for additional utilities

### Development
- Replit integration for cloud development
- ESBuild for production bundling
- PostCSS with Autoprefixer

### Database & Backend
- Drizzle ORM for type-safe database operations
- Neon Database for serverless PostgreSQL
- Zod for runtime type validation

## Deployment Strategy

### Development
- **Environment**: Replit cloud IDE
- **Hot Reloading**: Vite dev server with Express integration
- **Port Configuration**: Frontend on port 5000, proxied through Express
- **Database**: Neon serverless PostgreSQL instance

### Production
- **Build Process**: Vite builds frontend to `dist/public`, ESBuild bundles backend
- **Deployment Target**: Autoscale deployment on Replit
- **Static Assets**: Served directly by Express in production
- **Database Migrations**: Drizzle Kit for schema management

### Configuration
- **Environment Variables**: DATABASE_URL for PostgreSQL connection
- **Build Commands**: Separate build steps for frontend and backend
- **Start Command**: Single entry point running the Express server

## Changelog

Changelog:
- June 19, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.