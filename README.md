# Expense Tracker Dashboard

A responsive wallet and transaction dashboard built with React, Tailwind CSS v4, and Framer Motion, featuring Indian Rupee (₹) formatting and a modern deep purple theme.

## Features

- **💰 Live Balance Updates** - Animated counter shows real-time balance changes
- **💳 Card Management** - Add and manage multiple payment cards
- **📊 Transaction Tracking** - View and filter transaction history
- **📈 Expense Analytics** - Visual charts powered by Recharts
- **👤 Profile Management** - Upload and manage user avatar
- **⚡ Top-up Functionality** - Add funds to your wallet
- **🌙 Dark Mode** - Toggle between light and dark themes
- **📱 Responsive Design** - Optimized for mobile and desktop

## Tech Stack

- **React 18.3.1** - UI library
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Recharts** - Chart visualization
- **Supabase** - Backend (currently mocked for demo)
- **Lucide React** - Icon library
- **Radix UI** - Headless component primitives
- **date-fns** - Date utilities
- **Sonner** - Toast notifications

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build

```bash
# Build for production
pnpm build
```

## Project Structure

```
src/
├── app/
│   ├── App.tsx              # Main application component
│   ├── components/
│   │   ├── auth/           # Authentication components
│   │   ├── finance/        # Financial components (ExpensesView)
│   │   ├── figma/          # Figma-imported components
│   │   └── ui/             # Reusable UI components (shadcn)
│   └── styles/
│       ├── fonts.css       # Font imports
│       └── theme.css       # Tailwind theme variables
├── imports/                # Figma-imported assets
└── utils/
    └── supabase/          # Supabase configuration
```

## Features in Detail

### Wallet Management
- View total balance across all cards
- Add new payment cards
- Card details with secure display

### Transactions
- Recent transaction history
- Transaction receipts
- Filter by type (debit/credit)

### Analytics
- Weekly, monthly, and yearly expense charts
- Spending trends visualization
- Category-based expense breakdown

### Demo Mode
The app currently runs with mock data for demonstration purposes. No actual backend connection is required.

## Theme

The app features a high-fashion deep purple (#6D28D9) theme with:
- Cohesive color palette
- Smooth transitions
- Dark mode support
- Modern UI components

## Currency

All amounts are formatted in Indian Rupee (₹) using `Intl.NumberFormat`.

## License

Private project

## Author

Built with Claude Code
