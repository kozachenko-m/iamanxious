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

### TypeScript 7 + TypeScript 6 API

`package.json` installs TypeScript side by side, as recommended in the
[TypeScript 7.0 announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0):

- `"@typescript/native": "npm:typescript@^7.0.2"`: the `tsc` binary is TypeScript 7.
- `"typescript": "npm:@typescript/typescript6@^6.0.2"`: the TypeScript 6 JS API
  (and a `tsc6` binary) for tools that import `typescript`, such as typescript-eslint.

TypeScript 7.0 has no JS compiler API. Remove the alias when typescript-eslint supports TypeScript 7.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Convex Documentation](https://docs.convex.dev)
- [Bun Documentation](https://bun.com/docs)

## Deploy on Vercel

The site deploys on [Vercel](https://vercel.com). Vercel detects Bun from `bun.lock`.

#redeploy
