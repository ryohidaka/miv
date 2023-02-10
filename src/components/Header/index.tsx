import { usePathname } from "next/navigation";
import { capitalize } from "@/modules/client";

import Sidebar from "./Sidebar";

/**
 * 共通ヘッダー
 * @returns
 */
export default function Header() {
  // ページのパスを取得
  const path = usePathname();

  // ページ名を取得
  const pagePath = path?.replace("/", "") as string;
  const pageName = capitalize(pagePath);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-3 py-2 dark:bg-gray-800">
      {/* アプリ名 */}
      <h1 className="text-xl">{pageName}</h1>

      {/* サイドバー */}
      <Sidebar />
    </header>
  );
}
