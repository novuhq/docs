import { createMDX } from 'fumadocs-mdx/next';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  serverExternalPackages: ['ts-morph', 'typescript', 'oxc-transform', '@shikijs/twoslash'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'novu.co',
      },
    ],
  },
};

export default withMDX(config);
