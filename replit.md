# Abacuswalla - Educational Math Platform

## Overview

Abacuswalla is an educational web application designed to teach children mathematics through abacus-based learning. The platform targets children ages 5-12 and their parents, offering structured learning programs, interactive puzzles, and resources for mental math development. The application combines playful, child-friendly design elements with professional credibility signals to appeal to both students and parents.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**
- React with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management and data fetching
- Tailwind CSS for utility-first styling with custom design system

**Design System**
- Shadcn/ui component library (New York variant) for consistent UI components
- Custom color palette supporting light/dark themes with educational focus (trustworthy blue primary, playful yellow secondary, success green accent)
- Typography hierarchy using Google Fonts: Fredoka (headings), Inter (body), Poppins (accents)
- Theme switching capability with localStorage persistence

**Component Architecture**
- Reusable presentational components (BenefitCard, ProgramCard, TestimonialCard, QuizCard)
- Shared layout components (Header, Footer, Hero)
- Form components with React Hook Form and Zod validation
- Page-based routing structure with dedicated pages for Home, Programs, Puzzles, About, Testimonials, Resources, and Contact

### Backend Architecture

**Technology Stack**
- Express.js server with TypeScript
- Drizzle ORM for database operations
- PostgreSQL database (configured via Neon serverless driver)
- Session-based architecture (connect-pg-simple for session storage)

**API Design**
- RESTful API endpoints under `/api` namespace
- CRUD operations for core entities: programs, inquiries, worksheets, quiz progress, email captures
- Request validation using Zod schemas
- Error handling middleware with standardized JSON responses

**Data Layer**
- In-memory storage implementation (MemStorage) for development/testing
- Database schema defined with Drizzle ORM supporting PostgreSQL
- Migration management via Drizzle Kit

### Database Schema

**Core Entities**

1. **Programs Table**
   - Educational program offerings with metadata (title, age range, duration, description)
   - Benefits and curriculum stored as text arrays
   - Color theming for UI consistency
   - Optional image URLs for visual representation

2. **Inquiries Table**
   - Parent contact information and inquiry details
   - Child information (name, age)
   - Program interest tracking via programId foreign key
   - Timestamp for inquiry tracking

3. **Worksheets Table**
   - Downloadable educational resources
   - Grade level and topic categorization
   - Description and file URL storage

4. **Quiz Progress Table**
   - Student performance tracking by email
   - Quiz identification and scoring
   - Timestamp for progress monitoring

5. **Email Captures Table**
   - Lead generation and email list management
   - Source tracking for marketing attribution
   - Timestamp for signup tracking

### External Dependencies

**UI Component Libraries**
- Radix UI primitives for accessible, unstyled components (accordion, dialog, dropdown, select, etc.)
- Embla Carousel for interactive content carousels
- Lucide React for consistent iconography
- CMDK for command menu functionality

**Development Tools**
- Replit-specific plugins for development environment integration
- ESBuild for server-side bundling
- PostCSS with Autoprefixer for CSS processing

**Database & ORM**
- Neon serverless PostgreSQL driver for serverless database connectivity
- Drizzle ORM for type-safe database queries
- Drizzle Kit for schema migrations

**Form Handling**
- React Hook Form for performant form management
- Hookform Resolvers for Zod schema integration
- Zod for runtime type validation and schema definition

**Utilities**
- date-fns for date manipulation
- clsx and tailwind-merge for conditional className composition
- class-variance-authority for variant-based component styling

**Session Management**
- Express session with connect-pg-simple for PostgreSQL-backed sessions
- Cookie-based authentication ready infrastructure