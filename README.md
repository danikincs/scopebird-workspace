# Scopebird

Scopebird is a fictional customer-feedback prioritization SaaS built as a frontend test project. It is intended for UI demonstrations and usability testing only; it is not a production service and does not connect to a real backend.

The project includes a responsive landing page, product overview, pricing page, reusable component system, and simulated login flow.

## Run locally

```bash
npm install
npm run dev
```

## Structure

- `src/components/ui`: reusable design-system primitives
- `src/components`: shared product components
- `src/pages`: landing, how-it-works, and pricing pages
- `src/styles/tokens.css`: colors, fonts, spacing, radii, shadows, and transitions
- `src/styles/components.css`: shared component styles
- `src/styles/pages.css`: page composition and responsive layouts

The login dialog starts with demo credentials and accepts any non-empty email and password.

## Test-project notes

- All company names, testimonials, metrics, and pricing are fictional.
- Login is simulated entirely in the browser.
- No user information is stored or transmitted.
- The interface is provided for demonstration and testing purposes.
