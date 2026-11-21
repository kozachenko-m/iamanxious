This is a [Next.js](https://nextjs.org) + [Convex](https://convex.dev) project.

## Package manager: Bun only

This project uses [Bun](https://bun.com) for everything: install, scripts and builds.
Do not use npm, yarn or pnpm, and do not commit `package-lock.json`, `yarn.lock`
or `pnpm-lock.yaml`. The only lockfile is `bun.lock`.

- Bun version: `1.4.5` (pinned in `package.json` → `packageManager`).
- `bunfig.toml` sets `[install] minimumReleaseAge = 129600` (36 hours, in seconds).
  `bun install` / `bun add` only resolve package versions that were published at
  least 36 hours ago.

## Getting Started

Install the dependencies:

```bash
bun install
```

Run the development server (Convex dev + Next.js dev):

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The app reads the Convex deployment URL from `NEXT_PUBLIC_CONVEX_URL`
(`bunx convex dev` writes it to `.env.local`).

## Checks

```bash
bun run typecheck   # tsc --noEmit
bun run lint        # eslint
bun run build       # next build
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Convex Documentation](https://docs.convex.dev)
- [Bun Documentation](https://bun.com/docs)

## Deploy on Vercel

The site deploys on [Vercel](https://vercel.com). Vercel detects Bun from `bun.lock`.

#redeploy
