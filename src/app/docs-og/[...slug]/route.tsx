import { metadataImage } from '@/lib/metadata-image';
import type { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { generateOGImage } from './og';

const font = readFileSync('./src/app/docs-og/[...slug]/JetBrainsMono-Regular.ttf');
const fontBold = readFileSync('./src/app/docs-og/[...slug]/JetBrainsMono-Bold.ttf');

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
  return metadataImage.generateParams();
}
