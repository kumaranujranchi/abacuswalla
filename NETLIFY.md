Netlify Deployment Guide

Overview
- The client is built with Vite and published from `dist/public`.
- API routes are served via a Netlify Function at `netlify/functions/api.ts` wrapping the existing Express app.
- Redirects route `/api/*` to the function and provide SPA fallback to `index.html`.

Prerequisites
- Netlify account and site created.
- Netlify CLI installed: `npm i -g netlify-cli`.
- Node 18+ recommended.

Environment Variables
- `DATABASE_URL`: Postgres connection string (Neon or similar).
- `SESSION_SECRET`: Random string for Express session signing.
- Optional: other service keys your storage layer may require.

Config Files
- `netlify.toml`:
  - `[build]` uses `npm run build` and publishes `dist/public`.
  - `[functions]` points to `netlify/functions` with `esbuild` bundling.
  - Redirects:
    - `/api/*` → `/.netlify/functions/api/api/:splat`
    - `/*` → `/index.html`

Function Wrapper
- Implemented in `netlify/functions/api.ts` with `serverless-http`:
  - Initializes Express once and registers routes via `registerRoutes(app)`.
  - The redirect includes `/api` in the target path so Express route paths like `/api/programs` match correctly.

Install Dependencies
- Ensure the function runtime deps are installed:
  - `serverless-http` in `dependencies`.
  - `@netlify/functions` in `devDependencies` (for local type-checking).

Local Build
- `npm run build` produces the client assets under `dist/public`.

Deploy Steps (CLI)
1) Link or create a site:
   - `netlify init` (choose existing or create a new site).
2) Set environment variables:
   - `netlify env:set DATABASE_URL "<your-connection-string>"`
   - `netlify env:set SESSION_SECRET "<random-string>"`
3) Deploy preview:
   - `netlify deploy --build`
4) Deploy production:
   - `netlify deploy --prod --build`

Notes
- Session storage: `connect-pg-simple` can persist sessions to Postgres; ensure `DATABASE_URL` is valid. In purely serverless contexts, consider stateless auth if session persistence isn’t desired.
- Logs: use Netlify deploy logs and function logs for API troubleshooting.
- CORS: If you expose the API cross-origin, add appropriate CORS headers in Express.