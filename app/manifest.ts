import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#090807",
    theme_color: "#090807",
    icons: [
      {
        src: siteConfig.images.logo,
        sizes: "2827x2827",
        type: "image/png",
      },
    ],
  };
}
