import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  serverExternalPackages: [
    'ts-morph',
    'typescript',
    'oxc-transform',
    '@shikijs/twoslash',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'novu.co'
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('typescript');
    }
    return config;
  },
};

export default withMDX(config);
