# Race Car Graphics CRM – UI Prototype

Standalone static Next.js design prototype for approval before integration into the production CRM.

## Routes
- `/dashboard/` — Home / overview
- `/leads/` — Lead inbox + lead detail
- `/customers/` — Customer record
- `/suppliers/` — Supplier record

## Local development
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build
```bash
npm run build
```

The site exports to `out/` and is suitable for static hosting.

This is design-only: no Supabase, Dropbox, SendGrid, address lookup, channel integration or production CRM logic is connected.
