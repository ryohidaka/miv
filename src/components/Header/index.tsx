"use client";

import Sidebar from "./Sidebar";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { APP_NAME } from "@/modules/const";
import Instance from "./Instance";
import SearchInput from "./SearchInput";
import Link from "next/link";
import SearchDrawer from "./SearchDrawer";
import { useRecoilState } from "recoil";
import { searchDrawerState } from "@/atoms/SearchDrawer";

/**
 * 共通ヘッダー
 * @returns
 */
export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useRecoilState(searchDrawerState);
  const onClose = () => {
    setOpen(false);
    setSearchOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center bg-white px-3 py-2 dark:bg-neutral-900">
        {/* ハンバーガーボタン */}
        <AiOutlineMenu
          className="absolute fill-white text-2xl mix-blend-difference"
          onClick={() => setOpen(true)}
        />

        {/* アプリ名 */}
        <Link href="/" className="mx-auto md:mx-10 md:w-1/4">
          <h1 className="flex items-center gap-1 text-xl">
            {APP_NAME}

            {/* インスタンス名 */}
            <Instance />
          </h1>
        </Link>

        {/* 検索フォーム */}
        <SearchInput />

        {/* 検索モーダル表示ボタン (モバイルのみ) */}
        <AiOutlineSearch
          className="fill-white text-2xl mix-blend-difference md:hidden"
          onClick={() => setSearchOpen(true)}
        />
      </header>

      {/* サイドバー */}
      <Sidebar isOpen={isOpen} onClose={onClose} />

      {/* 検索ドロワー */}
      <SearchDrawer isOpen={isSearchOpen} onClose={onClose} />
    </>
  );
}
