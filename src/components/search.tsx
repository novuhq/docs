'use client';

import { OramaSearchBox } from '@orama/react-components';
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';

export default function CustomSearchDialog(props: SharedProps) {
  return (
    <OramaSearchBox
      open={props.open}
      onModalClosed={() => props.onOpenChange(false)}
      resultMap={{
        path: 'url',
        title: 'title',
        description: 'content',
      }}
      index={{
        endpoint: 'https://cloud.orama.run/v1/indexes/novu-docs-z1d208',
        api_key: process.env.NEXT_PUBLIC_ORAMA_API_KEY!,
      }}
    />
  );
}
