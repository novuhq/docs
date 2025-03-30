import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { attachFile, createOpenAPI } from 'fumadocs-openapi/server';
import { icons } from 'lucide-react';
import { createElement } from 'react';

export const source = loader({
  baseUrl: '/',
  source: docs.toFumadocsSource(),
  pageTree: {
    attachFile,
  },
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});

export const openapi = createOpenAPI({
  shikiOptions: {
    themes: {
      dark: 'vesper',
      light: 'vitesse-light',
    },
  },
});
