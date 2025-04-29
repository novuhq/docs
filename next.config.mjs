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

  webpack(config) {
    config.module.rules.push({
      test: /\.inline\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /(?<!inline)\.svg$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 512,
            publicPath: '/_next/static/svgs',
            outputPath: 'static/svgs',
            fallback: 'file-loader',
          },
        },
        {
          loader: 'svgo-loader',
        },
      ],
    });

    return config;
  },
};

export default withMDX(config);
