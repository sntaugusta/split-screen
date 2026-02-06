import type { NextConfig } from 'next';

const repository = 'split-screen';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: `/${repository}`,
  assetPrefix: `/${repository}`,
  distDir: repository,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
