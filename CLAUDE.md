# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React-based UI for managing Stripe products, prices, customers, and subscriptions. The application uses the Stripe Node.js SDK client-side to interact directly with Stripe's API (requires a Stripe API key stored in localStorage).

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

## Publishing to GitHub Pages

To publish the app to GitHub Pages (gh-pages branch):

```bash
git worktree add ../stripe-ui-docs github-pages
rm -rf ../stripe-ui-docs/assets
rm -rf ../stripe-ui-docs/*.svg
rm -rf ../stripe-ui-docs/*.html
npm run build -- --base=/stripe-ui --outDir ../stripe-ui-docs
git -C ../stripe-ui-docs add -A
git -C ../stripe-ui-docs commit -m "Update"
git -C ../stripe-ui-docs push
git worktree remove ../stripe-ui-docs
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
- `useCustomersList`: Fetch all customers
- `useCustomerDetails`: Fetch single customer by ID
- `useSubscriptionsList`: Fetch all subscriptions (with expanded customer data)
- `useSubscriptionDetails`: Fetch single subscription by ID (with expanded customer data)

Mutation hooks (return callback functions):
- `useProductCreate`: Create products
- `useProductDelete`: Delete products (navigates to /products)
- `usePriceCreate`: Create prices
- `usePriceUpdate`: Update prices
- `useCustomerCreate`: Create customers
- `useCustomerDelete`: Delete customers (navigates to /customers)
- `useSubscriptionCreate`: Create subscriptions
- `useSubscriptionUpdate`: Update subscriptions
- `useSubscriptionCancel`: Cancel subscriptions (navigates to /subscriptions)

### Routing Structure

All routes defined in src/App.tsx (default route: `/subscriptions`):

**Subscription Routes:**
- `/subscriptions` - Subscriptions list page
- `/subscriptions/new` - Create new subscription
- `/subscriptions/:subscriptionId` - Subscription details page

**Customer Routes:**
- `/customers` - Customers list page
- `/customers/new` - Create new customer
- `/customers/:customerId` - Customer details page

**Product Routes:**
- `/products` - Products list page
- `/products/new` - Create new product
- `/products/:productId` - Product details page
- `/products/:productId/prices/new` - Create new price for a product
- `/products/:productId/prices/:priceId` - Price details page

### Component Organization

- **Container Pattern**: Components ending in `Container` handle data fetching and state, then pass data to presentation components
  - Example: `ProductDetailsContainer` fetches data, `ProductDetails` renders it
  - Pattern used for: Products, Prices, Customers, Subscriptions
- **Form Components**: Controlled components that receive value/onChange/onSubmit props
  - `ProductForm`: Simple form with name field
  - `PriceForm`: Complex form with create/update modes
  - `CustomerForm`: Form with name, email, phone, description
  - `SubscriptionForm`: Multi-step form with customer/product/price selection
- **Field Components**: Reusable form fields following a consistent pattern
  - Basic: TextField, NumberField, CheckboxField
  - Stripe-specific: PriceAmountField, CurrencyField, LookupKeyField, IntervalField, RecurrencyField
  - Selectors: CustomerSelectField, ProductSelector, PriceSelectField
- **Display Components**: Specialized components for rendering Stripe data
  - Links: ProductLink, PriceLink, CustomerLink, SubscriptionLink
  - Spans: PriceSpan, RecurrencySpan, DateSpan, SubscriptionStatusSpan
  - Lists: ProductsList, PricesList, CustomersList, SubscriptionsList
  - Details: ProductDetails, PriceDetails, CustomerDetails, SubscriptionDetails
- Each component has its own directory with .tsx and .scss files

### Key Implementation Details

- **Price Form Modes**: PriceForm has "create" vs "update" mode - certain fields are read-only after creation (unit_amount, currency, active)
- **ID Extraction Utilities**:
  - `getProductId` (src/utils/getProductId.ts): Extract product ID from Stripe Price objects
  - `getCustomerId` (src/utils/getCustomerId.ts): Extract customer ID from Stripe objects
- **Subscription Management**:
  - `calculateMRR` (src/utils/calculateMRR.ts): Calculate monthly recurring revenue from subscription
  - `formatSubscriptionStatus` (src/utils/formatSubscriptionStatus.ts): Human-readable status formatting
  - SubscriptionStatusSpan has color-coded badges for different statuses (active, canceled, past_due, etc.)
- **HTML IDs**: Use `useHtmlId` hook for generating unique form element IDs
- **Type Safety**: Never use `any` keyword - use proper TypeScript types or `unknown` with type assertions when necessary
- **Deleted Resources**: When checking Stripe responses that may return deleted resources, use `!("deleted" in resource)` to filter them out

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
- **NEVER use the `any` keyword** - use proper types or `unknown` with type assertions

## Tech Stack

- **Build Tool**: Vite (using rolldown-vite variant)
- **Framework**: React 19 with TypeScript
- **Routing**: react-router-dom v7
- **Stripe SDK**: stripe Node.js SDK (used client-side)
- **Styling**: SASS/SCSS with sass-embedded
