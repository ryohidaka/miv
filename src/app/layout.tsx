import "@/app/globals.css";
import { GAWrapper } from "@/components/Layout/GAwrapper";
import {
  APP_NAME,
  APP_URL,
  DESCRIPTION,
  DESCRIPTION_SHORT,
} from "@/modules/const";

export const metadata = {
  title: {
    absolute: `${APP_NAME}: ${DESCRIPTION_SHORT}`,
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: DESCRIPTION,
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
    siteName: APP_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
  viewport: "initial-scale=1.0, width=device-width",
  other: {
    ["google-site-verification"]: "ATEFILtNKSZV2E7hTujMC2rTNFyQpLKhJ0_PeBvjU-Q",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex min-h-full max-w-full flex-col overscroll-y-none">
        {children}
        <GAWrapper />
      </body>
    </html>
  );
}
