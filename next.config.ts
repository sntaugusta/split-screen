import type { NextConfig } from 'next';

const repository = 'docs';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: `/${repository}`,
  assetPrefix: `./`,
  distDir: repository,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
