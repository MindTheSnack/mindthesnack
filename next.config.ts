import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  distDir: '.next',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
