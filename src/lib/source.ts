import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { APIPlayground } from "fumadocs-openapi/scalar";
import { attachFile, createOpenAPI } from "fumadocs-openapi/server";
import { icons } from "lucide-react";
import { createElement } from "react";

export const source = loader({
  baseUrl: "/docs",
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
  renderer: {
    APIPlayground,
  },
  shikiOptions: {
    themes: {
      dark: "vesper",
      light: "vitesse-light",
    },
  },
});
