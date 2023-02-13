import { usePathname } from "next/navigation";
import { capitalize } from "@/modules/client";

import Sidebar from "./Sidebar";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

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

  const [isOpen, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-3 py-2 dark:bg-gray-800">
        {/* アプリ名 */}
        <h1 className="text-xl">{pageName}</h1>

        {!isOpen && (
          <AiOutlineMenu
            className="fill-white text-2xl mix-blend-difference"
            onClick={() => setOpen(true)}
          />
        )}
      </header>

      {/* サイドバー */}
      <Sidebar isOpen={isOpen} onClose={onClose} />
    </>
  );
}
