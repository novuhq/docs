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
};

export default withMDX(config);
