# LaPed Zone ID - Sports Venue Booking Platform

## Overview

LaPed Zone ID (Lapangan Pedia) is an Indonesian sports venue booking platform focused on the Cikarang and Bekasi regions. The application allows users to discover, explore, and book sports facilities including futsal courts, badminton courts, basketball courts, and tennis venues. The platform includes features for community building, partner venue management, user profiles with loyalty points, and a comprehensive booking system with multiple payment options.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom plugins for Replit integration and meta image handling
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state, local React state for UI
- **Styling**: Tailwind CSS v4 with custom theme variables, shadcn/ui component library
- **Animations**: Framer Motion for page transitions and micro-interactions
- **UI Components**: Radix UI primitives wrapped with shadcn/ui styling conventions

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript compiled with tsx for development, esbuild for production
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Static Serving**: Express static middleware for production builds, Vite dev server for development

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL via Neon serverless driver (@neondatabase/serverless)
- **Schema Location**: `shared/schema.ts` - shared between frontend and backend
- **Validation**: Zod schemas with drizzle-zod integration for type-safe validation
- **Current Storage**: In-memory storage implementation (MemStorage class) as placeholder

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route-based page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and mock data
├── server/           # Backend Express application
│   ├── index.ts      # Entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between frontend/backend
│   └── schema.ts     # Drizzle schema definitions
└── migrations/       # Database migrations (Drizzle Kit)
```

### Development Workflow
- `npm run dev` - Starts Express server with Vite middleware for hot reloading
- `npm run build` - Builds frontend with Vite, bundles server with esbuild
- `npm run db:push` - Pushes schema changes to database via Drizzle Kit

### Key Design Decisions
1. **Monorepo Structure**: Single repository with shared types between frontend and backend via `@shared` alias
2. **Path Aliases**: `@/` for client src, `@shared` for shared code, `@assets` for attached assets
3. **Component Library**: shadcn/ui components provide consistent, accessible UI primitives
4. **Mock Data First**: Application uses mock data in `lib/mockData.ts` for rapid prototyping before backend implementation
5. **Indonesian Localization**: UI text, date formatting (date-fns with `id` locale), and content targeted for Indonesian users

## External Dependencies

### Database
- **PostgreSQL**: Primary database accessed via `DATABASE_URL` environment variable
- **Neon Serverless**: PostgreSQL driver optimized for serverless environments
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI/UX Libraries
- **Radix UI**: Full suite of accessible UI primitives (dialog, dropdown, tabs, etc.)
- **Embla Carousel**: Touch-friendly carousel component
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant styling
- **cmdk**: Command palette component

### Development Tools
- **Drizzle Kit**: Database schema management and migrations
- **Vite Plugins**: Replit-specific plugins for error overlay, cartographer, and dev banner
- **PostCSS/Autoprefixer**: CSS processing pipeline

### Form Handling
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Zod integration for form validation

### Fonts
- **Google Fonts**: Inter (body text) and Montserrat (headings) loaded via CDN