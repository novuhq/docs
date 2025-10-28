import { createMDX } from 'fumadocs-mdx/next';

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

  // Optimize build performance
  experimental: {
    // Reduce memory usage during build
    workerThreads: false,
    // Limit concurrent page generation to prevent overwhelming the build environment
    cpus: 1,
  },

  // Increase static generation timeout for Netlify
  staticPageGenerationTimeout: 180,
};

export default withMDX(config);
