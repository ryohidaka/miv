"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { RecoilRoot } from "recoil";
import Header from "@/components/Header";
import "./globals.css";
import { LoginModal } from "@/components/Auth/LoginModal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <RecoilRoot>
          <ChakraProvider>
            {/* 共通ヘッダー */}
            <Header />
            {children}

            {/* ログインモーダル */}
            <LoginModal />
          </ChakraProvider>
          <GoogleAnalytics strategy="lazyOnload" />
        </RecoilRoot>
      </body>
    </html>
  );
}
