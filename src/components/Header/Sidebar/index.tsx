"use client";

import { newTabState } from "@/atoms/NewTab";
import CommonDrawer from "@/components/Common/Drawer";
import { deleteCookie } from "cookies-next";
import { useRecoilState } from "recoil";
import SideMenu from "./SideMenu";

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
    </CommonDrawer>
  );
}
