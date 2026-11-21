import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  typescript: {
    // `bun run build` type checks with `bun check` before `next build`.
    // Next.js still needs the `typescript` package for its config check.
    ignoreBuildErrors: true,
  },
}

export default nextConfig
