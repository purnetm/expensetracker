# Expense Tracker Setup Guide

This repository contains a responsive wallet and transaction dashboard built with React, Tailwind CSS v4, and Framer Motion.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server (Figma Make environment)
# The app runs in Figma Make - see the Figma file for preview

# Build for production
pnpm build
```

## Project Architecture

### Main Components

**`src/app/App.tsx`** (1900+ lines)
- Main application component with routing and state management
- Includes all views: Home, Wallet, Profile, Expenses, Top-up, etc.
- Mock authentication for demo (bypasses login)
- Mock data for cards, transactions, and expense analytics
- Features:
  - Animated counter for balance updates
  - Card management UI
  - Transaction tracking
  - Celebration effects on top-up
  - Dark mode toggle
  - Profile with avatar upload (uses local file URLs)

**`src/app/components/finance/ExpensesView.tsx`** (535 lines)
- Deep analytics view with filtering and charts
- Category-based expense breakdown (Pie chart)
- Spending trend visualization (Area chart)
- Advanced filtering: search, date range, amount range, category, merchant
- Transaction editing with dialog
- Uses Recharts for visualizations

### UI Components (shadcn/ui)

Located in `src/app/components/ui/`:
- Core: `button`, `input`, `label`, `badge`, `textarea`
- Forms: `select`, `calendar`, `slider`, `dialog`
- Layout: `popover`, `tooltip`, `separator`
- And 40+ more components

### Authentication

- **SignInView**: Email/password + Google OAuth (currently bypassed)
- **OnboardingView**: 3-slide carousel intro
- **Demo Mode**: App auto-logs in as `demo-user-123`

## Key Features

### 1. Mock Data System
All API calls have been replaced with mock implementations:
- `fetchData()`: Returns mock cards, transactions, expense data
- `handleTopUpSuccess()`: Updates card balance in state
- `uploadAvatar()`: Uses local file URLs with Object URLs
- No backend required for demo

### 2. Indian Rupee Formatting
```typescript
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount).replace('₹', '₹ ');
};
```

### 3. Animated Counter
Real-time balance updates with smooth animation:
- 1.5 second duration
- 60 steps interpolation
- Scale animation on change

### 4. Dark Mode
- Theme toggle in profile
- CSS variables for all colors
- Smooth transitions

## File Structure

```
src/
├── app/
│   ├── App.tsx                  # Main app (1900+ lines)
│   └── components/
│       ├── auth/
│       │   ├── SignInView.tsx
│       │   └── OnboardingView.tsx
│       ├── finance/
│       │   └── ExpensesView.tsx # Analytics view
│       ├── figma/              # Figma imports
│       └── ui/                 # shadcn components (46 files)
├── imports/                    # Figma-imported assets
├── styles/
│   ├── theme.css              # Tailwind v4 theme
│   └── fonts.css              # Font imports
└── utils/
    └── supabase/
        ├── client.ts          # Supabase client
        └── info.tsx           # Project config
```

## Dependencies

### Core
- React 18.3.1
- Tailwind CSS 4.1.12
- Vite 6.3.5

### UI & Animation
- Framer Motion (`motion` package 12.23.24)
- Radix UI primitives
- Lucide React (icons)
- Recharts (charts)

### Data & Auth
- Supabase 2.94.1 (configured but mocked)
- date-fns (date utilities)
- Sonner (toast notifications)

### Utilities
- clsx + tailwind-merge
- class-variance-authority
- react-hook-form

## Configuration Files

- `vite.config.ts`: Vite + React + Tailwind v4
- `postcss.config.mjs`: Empty (Tailwind v4 handles it)
- `package.json`: All dependencies
- `.gitignore`: Excludes node_modules, build artifacts

## Theme Configuration

Deep Purple (#6D28D9) primary color with:
- Light mode: Purple gradient backgrounds
- Dark mode: True black (#09090B) with purple accents
- Smooth color transitions
- Cohesive spacing and typography

## Important Notes

1. **Figma Make Environment**: This app is designed to run in Figma Make, not as a standalone web app
2. **No Backend Required**: All data is mocked for demo purposes
3. **Image Assets**: Uses `figma:asset` import scheme for Figma-imported images
4. **Mock Session**: App bypasses authentication with a demo user
5. **Local Development**: Source files are complete locally but large files (App.tsx, ExpensesView.tsx) are documented here rather than committed due to GitHub API size limits

## Next Steps

To deploy the full application:
1. Clone this repository
2. The complete source files exist in your local Figma Make project
3. Copy `src/app/App.tsx` and `src/app/components/finance/ExpensesView.tsx` from your local project
4. Run `pnpm install` and `pnpm dev`

## Additional UI Components Needed

The following shadcn/ui components are imported but not yet in the repo:
- select, calendar, slider, dialog, popover (used by ExpensesView)
- Others as needed for full functionality

These can be added from shadcn/ui or copied from your local project.

---

Built with Claude Code 🤖
