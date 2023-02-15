"use client";

import SideMenu from "./SideMenu";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { newTabState } from "@/atoms/NewTab";
import { deleteCookie } from "cookies-next";
import CommonDrawer from "@/components/Common/Drawer";

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
    <CommonDrawer
      isOpen={isOpen}
      onClose={onClose}
      direction="left"
      className="overflow-y-scroll"
      title="Menu"
    >
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

      {/* ログアウト */}
      <button className="btn-outline w-full" onClick={logout}>
        ログアウト
      </button>

      {/* Copyrights */}
      <div className="flex items-center gap-1">
        &copy;
        <Link href="https://ryohidaka.jp">ryohidaka</Link>
        <BiLinkExternal />
      </div>
    </CommonDrawer>
  );
}
