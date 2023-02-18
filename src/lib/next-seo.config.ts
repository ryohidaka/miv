import { APP_NAME, APP_URL, DESCRIPTION } from "@/modules/const";
import type { NextSeoProps } from "next-seo";

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: APP_NAME,
  titleTemplate: `%s | ${APP_NAME}`,
  description: DESCRIPTION,
  canonical: APP_URL,
  openGraph: {
    type: "website",
    url: APP_URL,
    images: [
      {
        url: `${APP_URL}/api/og`,
        width: 1200,
        height: 627,
        alt: "OGP画像",
      },
    ],
    site_name: APP_NAME,
  },
};
