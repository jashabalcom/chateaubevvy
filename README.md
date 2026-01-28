# Chateau Bevvy Winery

A modern, elegant website for Chateau Bevvy Winery — Jefferson County's first urban winery located in historic downtown Bessemer, Alabama.

## Features

- **Coming Soon Landing Page** - Elegant waitlist signup with form integration
- **Wine Collection Showcase** - Beautiful wine bottle displays with detailed modals
- **Event Booking** - Private event inquiry forms
- **Wine Club Membership** - Tiered membership signup system
- **Visit Information** - Location, hours, and tasting room details
- **Our Story** - Company history and timeline
- **Contact Forms** - Multiple contact touchpoints with backend integration
- **Responsive Design** - Fully mobile-optimized experience
- **Animated Transitions** - Smooth page transitions and scroll animations

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **Backend**: Supabase (PostgreSQL, Edge Functions, Authentication)
- **State Management**: TanStack React Query

## Local Development

### Prerequisites

- Node.js 18+ 
- npm or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd chateau-bevvy-winery

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`.

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
VITE_SUPABASE_PROJECT_ID=your_project_id
```

## Project Structure

```
src/
├── assets/          # Images, logos, and static assets
├── components/      # Reusable UI components
│   └── ui/          # shadcn/ui base components
├── hooks/           # Custom React hooks
├── integrations/    # Third-party integrations (Supabase)
├── lib/             # Utility functions and animations
├── pages/           # Route page components
└── services/        # API service functions
```

## Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## License

Private - All rights reserved.
