import { LPHeader } from "@/components/LP/Header";
import { LPContent } from "@/components/LP/Content";
import { LPFeatures } from "@/components/LP/Features";
import Footer from "@/components/Footer";

/**
 * ホーム画面
 * @returns
 */
export default function Home() {
  return (
    <div className="h-full flex-grow">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* ヘッダー */}
        <LPHeader />

        {/* メインコンテンツ */}
        <LPContent />

        {/* 機能説明 */}
        <LPFeatures />

        {/* フッター */}
        <Footer />
      </div>
    </div>
  );
}
