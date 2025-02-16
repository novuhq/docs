"use client";

import { OramaSearchBox } from "@orama/react-components";
import { OramaClient } from "@oramacloud/client";
import type { SharedProps } from "fumadocs-ui/components/dialog/search";

const client = new OramaClient({
  api_key: process.env.NEXT_PUBLIC_ORAMA_API_KEY!,
  endpoint: "https://cloud.orama.run/v1/indexes/novu-docs-z1d208",
});

const searchBoxConfig = {
  resultsMap: {
    path: "url",
    title: "title",
    description: "description",
  },
  colorScheme: "system",
  themeConfig: {},
};

export default function CustomSearchDialog(props: SharedProps) {
  return (
    <OramaSearchBox
      open={props.open}
      index={{
        endpoint: "https://cloud.orama.run/v1/indexes/novu-docs-z1d208",
        api_key: process.env.NEXT_PUBLIC_ORAMA_API_KEY!,
      }}
      {...searchBoxConfig}
    />
  );
}
