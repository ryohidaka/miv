"use client";

import { usePathname } from "next/navigation";
import MenuLink from "./MenuLink";

type Props = {
  onClose: () => void;
};

/**
 * サイドメニュー
 * @returns
 */
export default function SideMenu({ onClose }: Props) {
  // ページ一覧
  const pages = [
    {
      url: "/",
      label: "Gallery",
    },
    {
      url: "/featured",
      label: "Gallery (Featured)",
    },
    {
      url: "/popular",
      label: "Gallery (Popular)",
    },
    {
      url: "/home",
      label: "Home Timeline",
    },
    {
      url: "/user",
      label: "User Timeline",
    },
    {
      url: "/search",
      label: "Search Timeline",
    },
  ];

  // ページのパスを取得
  const path = usePathname();

  return (
    <nav className="mb-5 grid grid-cols-1 items-stretch justify-center gap-3">
      <h3 className="text-base font-semibold">Links</h3>

      {pages.map((page) => (
        <MenuLink
          key={page.label}
          url={page.url}
          label={page.label}
          isActive={path === page.url}
          onClick={onClose}
        />
      ))}
    </nav>
  );
}
