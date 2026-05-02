import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mindthesnack',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
