"use client";

import View from "./View";
import SideMenu from "./SideMenu";
import { AiOutlineClose } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { newTabState } from "@/atoms/NewTab";
import Drawer from "react-modern-drawer";
import { deleteCookie } from "cookies-next";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

/**
 * サイドバー
 * @returns
 */
export default function Sidebar({ isOpen, onClose }: Props) {
  // 別タブ遷移設定を取得
  const [newTab, setNewTab] = useRecoilState(newTabState);

  // ログアウト
  const logout = () => {
    deleteCookie("host");
    deleteCookie("token");
    location.reload();
  };

  return (
    <Drawer
      customIdSuffix="drawer"
      open={isOpen}
      onClose={onClose}
      direction="right"
      className="h-screen w-80 overflow-y-scroll bg-white p-4 dark:!bg-gray-800"
      lockBackgroundScroll={true}
    >
      <h5
        id="drawer-navigation-label"
        className="text-base font-semibold uppercase text-gray-500 dark:text-gray-400"
      >
        Menu
      </h5>
      <button
        type="button"
        className="absolute top-2.5 right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <AiOutlineClose onClick={onClose} />
        <span className="sr-only">Close menu</span>
      </button>
      <div className="overflow-y-auto py-4">
        <div className="grid grid-cols-1 gap-3">
          {/* ページリンク */}
          <SideMenu onClose={onClose} />

          {/* 別タブ遷移設定 */}
          <div className="mb-4 flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              checked={newTab}
              onChange={(e) => setNewTab(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Open in new tab
            </label>
          </div>
          {/* 表示モード切替 */}
          <View />

          {/* ログアウト */}
          <button className="btn-outline" onClick={logout}>
            ログアウト
          </button>

          {/* Copyrights */}
          <div className="flex items-center gap-1">
            &copy;
            <Link href="https://ryohidaka.jp">ryohidaka</Link>
            <BiLinkExternal />
          </div>
        </div>
      </div>
    </Drawer>
  );
}
