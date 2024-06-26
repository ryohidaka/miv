"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { EmojiProvider } from "@/components/Provider/EmojiProvider";
import { RecoilRoot } from "recoil";
import "@/app/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
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
          <EmojiProvider>
            {/* メインコンテンツ */}
            <main className="container mx-auto max-w-screen-xl flex-grow md:px-6 lg:px-12 xl:px-24">
              {children}
            </main>
          </EmojiProvider>

          {/* 共通フッター */}
          <Footer />
        </RecoilRoot>
      </body>
    </html>
  );
}
