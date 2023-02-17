import { LPHeader } from "@/components/LP/Header";
import { LPContent } from "@/components/LP/Content";
import { LPFeatures } from "@/components/LP/Features";

/**
 * ホーム画面
 * @returns
 */
export default function Home() {
  return (
    <div className="h-full flex-grow pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* ヘッダー */}
        <LPHeader />

        {/* メインコンテンツ */}
        <LPContent />

        {/* 機能説明 */}
        <LPFeatures />
      </div>
    </div>
  );
}
