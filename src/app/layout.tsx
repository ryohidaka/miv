"use client";

import { GoogleAnalytics } from "nextjs-google-analytics";
import { RecoilRoot } from "recoil";
import Header from "@/components/Header";
import "./globals.css";
import { LoginModal } from "@/components/Auth/LoginModal";
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
        <RecoilRoot>
          {/* 共通ヘッダー */}
          <Header />

          {/* メインコンテンツ */}
          <main className="container mx-auto max-w-screen-xl flex-grow md:px-6 lg:px-12 xl:px-24">
            {children}
          </main>

          {/* 共通フッター */}
          <Footer />

          {/* ログインモーダル */}
          <LoginModal />
          <GoogleAnalytics strategy="lazyOnload" />
        </RecoilRoot>
      </body>
    </html>
  );
}
