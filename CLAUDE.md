# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based Stripe UI application that provides a browser interface for viewing Stripe products and prices. The application uses the Stripe Node.js SDK to interact with the Stripe API directly from the browser.

## Build Commands

- **Development server**: `npm run dev` - Starts Vite dev server with HMR
- **Build**: `npm run build` - Type checks with `tsc -b` then builds with Vite
- **Lint**: `npm run lint` - Runs ESLint on the codebase
- **Preview**: `npm run preview` - Preview production build locally

## Architecture

### Stripe API Integration

The application uses a unique architecture where the Stripe Node.js SDK runs directly in the browser:

- **StripeContext** (src/context/StripeContext.ts): React Context that provides the Stripe instance throughout the app
- **useStripeKey** (src/hooks/useStripeKey.ts): Manages the Stripe API key in localStorage under the key "STRIPE_KEY"
- **useStripeApi** (src/hooks/useStripeApi.ts): Core hook that wraps Stripe API calls with promise handling

The Stripe API key is stored in localStorage and can be configured via the StripeSettings component (floating settings panel).

### Data Flow Pattern

The codebase follows a consistent Container/Presentation pattern:

1. **Container components** (e.g., `ProductsListContainer`) handle data fetching using specialized hooks
2. **Custom hooks** (e.g., `useProductsList`, `useProductDetails`, `usePricesList`, `usePriceDetails`) fetch data via `useStripeApi`
3. **useStripeApi** combines the StripeContext with `usePromise` to handle async state
4. **usePromise** (src/hooks/usePromise.ts): Simple hook that converts a Promise to React state
5. **Presentation components** receive data as props and render UI

All data-fetching hooks follow this pattern:
```typescript
const request = useCallback((stripe: Stripe) => stripe.products.list(), []);
return useStripeApi(request);
```

### Routing

React Router v7 is used with three main routes:
- `/` - Products list
- `/products/:productId` - Product details with associated prices
- `/products/:productId/prices/:priceId` - Price details

### Component Structure

- **Form components**: Located in src/components/Form/, src/components/Button/
- **Input components**: Various specialized inputs (TextInput, NumberInput, CurrencyInput, PriceInput, LookupKeyInput)
- **Field components**: Wrapper components that combine inputs with FormFieldLayout (TextField, CurrencyField, PriceField, LookupKeyField)
- **Display components**: Components for rendering Stripe data (PriceSpan, RecurrencySpan, DateSpan, ProductLink, PriceLink)
- **Container components**: Named with "Container" suffix, handle data fetching and loading states

### Styling

- Uses SASS for component styling (sass-embedded package)
- Component-scoped SCSS files (e.g., Button.scss, FieldSet.scss)
- Global styles in src/index.css

### Technology Stack

- **Build tool**: Vite (using rolldown-vite variant for faster builds)
- **Framework**: React 19 with TypeScript
- **Routing**: React Router v7
- **Stripe**: stripe Node.js SDK (v19) running in browser
- **Styling**: SASS with embedded compiler

### Local Storage

The application uses localStorage for:
- **STRIPE_KEY**: Stores the Stripe API secret key
- useLocalStorage hook (src/hooks/useLocalStorage.ts) provides reactive localStorage access with cross-tab synchronization via storage events

## Important Notes

- The Stripe secret key is stored client-side in localStorage, so this application is intended for development/testing purposes only
- Container components show LoadingPanel while data is being fetched
- All Stripe API calls go through the useStripeApi hook pattern
