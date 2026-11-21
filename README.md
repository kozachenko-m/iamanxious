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

All checks use Bun's built-in tools. There is no ESLint, Prettier or `tsc` step.

```bash
bun run typecheck    # next typegen && bun check (type checker, TypeScript 7)
bun fmt              # format the files (Prettier-compatible)
bun fmt --check      # exit 1 if a file needs formatting
bun lint             # lint (needs Bun >= 1.4.6, see below)
bun run build        # next typegen && bun check && next build
```

- Formatter and linter options are in `bunfig.toml` (`[fmt]`, `[lint.rules]`).
  `bun fmt` skips `convex/_generated/`, because Convex writes those files.
- `bun run typecheck` first runs `next typegen`. It writes `next-env.d.ts` and the
  route types in `.next/types`, so `bun check` also checks the pages and layouts.
- `bun run build` runs the same type check before `next build`. A type error stops
  the build, also on Vercel. `next.config.ts` sets `typescript.ignoreBuildErrors`,
  so Next.js does not type check a second time.
- The build script calls `$npm_execpath check`, not `bun check`. `$npm_execpath` is
  the Bun that runs the script (Bun 1.4.5 on Vercel). A plain `bun` in a script is
  the first `bun` on `PATH`, which can be an older Bun without `bun check`.
- Do not add a script named `check`, `fmt` or `lint`. `bun check`, `bun fmt` and
  `bun lint` run a script with that name instead of the built-in tool.

### Lint: Bun >= 1.4.6 only

`bun lint` is not in Bun 1.4.5. It is in Bun 1.4.6, which is a canary release at the
moment. With Bun 1.4.5, `bun lint` prints `Script not found "lint"`.

The rules in `bunfig.toml` are the rules of `eslint-config-next` (core-web-vitals and
typescript), on top of Bun's default rules. One Next.js rule is not built into Bun:
`@next/next/no-location-assign-relative-destination`.

### Why the `typescript` package is still installed

`bun check` does not need the `typescript` package. Next.js does: `next build` stops
with "Please install typescript" when the project has a `tsconfig.json` and the
`typescript` package is missing, also with `typescript.ignoreBuildErrors`
(`node_modules/next/dist/lib/verify-typescript-setup.js`). `package.json` pins
`typescript` to `7.0.2`, the version that `bun check` matches
(`bun -p process.versions.typescript`). Your editor uses it too. Update it when a
new Bun matches a newer TypeScript.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Convex Documentation](https://docs.convex.dev)
- [Bun Documentation](https://bun.com/docs)

## Deploy on Vercel

The site deploys on [Vercel](https://vercel.com). Vercel detects Bun from `bun.lock`.

#redeploy
