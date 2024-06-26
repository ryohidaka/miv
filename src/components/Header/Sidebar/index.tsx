"use client";

import CommonDrawer from "@/components/Common/Drawer";
import Logout from "./Logout";
import OpenInNewTab from "./OpenInNewTab";
import ShowSensitive from "./ShowSensitive";
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
      <OpenInNewTab />

      {/* 画像非表示設定 */}
      <ShowSensitive />

      {/* ログアウト */}
      <Logout />
    </CommonDrawer>
  );
}
