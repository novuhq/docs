import { source } from '@/lib/source';
import { metadataImage } from '@/lib/metadata-image';
import type { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { generateOGImage } from './og';

const fontPath = path.join(process.cwd(), 'public/fonts/JetBrainsMono-Regular.ttf');
const fontBoldPath = path.join(process.cwd(), 'public/fonts/JetBrainsMono-Bold.ttf');

const font = readFileSync(fontPath);
const fontBold = readFileSync(fontBoldPath);

export async function GET(
  _req: Request,
  props: { params: Promise<{ slug: string[] }> }
): Promise<ImageResponse> {
  const { slug } = await props.params;
  const page = source.getPage(slug);

  if (!page) notFound();

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
}

export function generateStaticParams(): { slug: string[] }[] {
  if (process.env.NETLIFY) {
    return [];
  }

  return metadataImage.generateParams();
}

export const dynamic = 'force-dynamic';
export const revalidate = 3600;
