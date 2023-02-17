"use client";

import { GoogleAnalytics } from "nextjs-google-analytics";
import "@/app/globals.css";
import Footer from "@/components/Footer";

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
        <GoogleAnalytics strategy="lazyOnload" />
      </body>
    </html>
  );
}
