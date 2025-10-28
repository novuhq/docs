import { metadataImage } from '@/lib/metadata-image';
import type { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import path from 'path';
import { generateOGImage } from './og';

// Use path.join with process.cwd() for reliable path resolution
const fontPath = path.join(process.cwd(), 'public/fonts/JetBrainsMono-Regular.ttf');
const fontBoldPath = path.join(process.cwd(), 'public/fonts/JetBrainsMono-Bold.ttf');

const font = readFileSync(fontPath);
const fontBold = readFileSync(fontBoldPath);

export const GET = metadataImage.createAPI((page): ImageResponse => {
  return generateOGImage({
    primaryTextColor: 'rgb(240,240,240)',
    title: page.data.title,
    description: page.data.description,
    fonts: [
      {
        name: 'Mono',
        data: font,
        weight: 400,
      },
      {
        name: 'Mono',
        data: fontBold,
        weight: 600,
      },
    ],
  });
});

export function generateStaticParams(): {
  slug: string[];
}[] {
  // Disable OG image static generation on Netlify to prevent build hangs
  // OG images will be generated on-demand instead
  if (process.env.NETLIFY) {
    return [];
  }
  return metadataImage.generateParams();
}

// Add runtime config to ensure proper behavior
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Cache for 1 hour
