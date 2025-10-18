# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React-based UI for managing Stripe products and prices. The application uses the Stripe Node.js SDK client-side to interact directly with Stripe's API (requires a Stripe API key stored in localStorage).

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Stripe API Integration

- **StripeContext**: Provides the Stripe API instance throughout the app (src/context/StripeContext.ts)
- **API Key Storage**: Stripe API key is stored in localStorage under key `STRIPE_KEY`
- **useStripeKey hook**: Reactive hook that syncs with localStorage changes (src/hooks/useStripeKey.ts)
- **useStripeApi hook**: Generic hook for calling Stripe API methods with promise-based state management (src/hooks/useStripeApi.ts)
- The Stripe instance is initialized in App.tsx:1-40 and provided via React Context

### State Management Patterns

- **usePromise hook**: Centralized promise state management returning `{ loading, data, error }` (src/hooks/usePromise.ts)
- **useLocalStorage hook**: Reactive localStorage hook with storage event listener (src/hooks/useLocalStorage.ts)
- All Stripe API calls follow the pattern: `useStripeApi(callback)` where callback receives the Stripe instance

### Custom Hooks for Stripe Operations

Data fetching hooks (all use useStripeApi):
- `useProductsList`: Fetch all products
- `useProductDetails`: Fetch single product by ID
- `usePricesList`: Fetch prices for a product
- `usePriceDetails`: Fetch single price by ID

Mutation hooks (return callback functions):
- `useProductCreate`: Create products
- `usePriceCreate`: Create prices
- `usePriceUpdate`: Update prices

### Routing Structure

All routes defined in src/App.tsx:26-31:
- `/products` - Products list page
- `/products/new` - Create new product
- `/products/:productId` - Product details page
- `/products/:productId/prices/new` - Create new price for a product
- `/products/:productId/prices/:priceId` - Price details page

### Component Organization

- **Container Pattern**: Components ending in `Container` handle data fetching and state, then pass data to presentation components
  - Example: `ProductDetailsContainer` fetches data, `ProductDetails` renders it
- **Form Components**: `ProductForm` and `PriceForm` are controlled components that receive value/onChange/onSubmit props
- **Field Components**: Reusable form fields following a consistent pattern (TextField, PriceField, CurrencyField, LookupKeyField, CheckboxField)
- Each component has its own directory with .tsx and .scss files

### Key Implementation Details

- **Price Form Modes**: PriceForm has "create" vs "update" mode - certain fields are read-only after creation (unit_amount, currency, active)
- **Product ID Extraction**: Use `getProductId` utility (src/utils/getProductId.ts) to extract product ID from Stripe Price objects
- **HTML IDs**: Use `useHtmlId` hook for generating unique form element IDs

### Styling

- SASS/SCSS for styling with embedded Sass compiler
- Each component has co-located .scss file
- Global styles in src/index.css and src/App.scss

### Code Style (ESLint Rules)

- 2-space indentation
- Double quotes for strings
- Semicolons required
- Unix line endings
- No trailing spaces
- No multiple empty lines

## Tech Stack

- **Build Tool**: Vite (using rolldown-vite variant)
- **Framework**: React 19 with TypeScript
- **Routing**: react-router-dom v7
- **Stripe SDK**: stripe Node.js SDK (used client-side)
- **Styling**: SASS/SCSS with sass-embedded
