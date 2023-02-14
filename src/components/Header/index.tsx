import Sidebar from "./Sidebar";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { APP_NAME } from "@/modules/const";

/**
 * 共通ヘッダー
 * @returns
 */
export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-3 py-2 dark:bg-neutral-900">
        {/* ハンバーガーボタン */}
        <AiOutlineMenu
          className="absolute fill-white text-2xl mix-blend-difference"
          onClick={() => setOpen(true)}
        />

        {/* アプリ名 */}
        <h1 className="mx-auto text-xl">{APP_NAME}</h1>
      </header>

      {/* サイドバー */}
      <Sidebar isOpen={isOpen} onClose={onClose} />
    </>
  );
}
