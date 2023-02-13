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
  const links = [
    {
      label: "Gallery",
      pages: [
        {
          url: "/",
          label: "Posts",
        },
        {
          url: "gallery/featured",
          label: "Featured",
        },
        {
          url: "gallery/popular",
          label: "Popular",
        },
      ],
    },
    {
      label: "Timeline",
      pages: [
        {
          url: "/home",
          label: "Home",
        },
        {
          url: "/user",
          label: "User",
        },
        {
          url: "/search",
          label: "Search",
        },
      ],
    },
  ];

  // ページのパスを取得
  const path = usePathname();

  return (
    <nav className="mb-5 grid grid-cols-1 items-stretch justify-center gap-3">
      {links.map((link) => (
        <>
          <h3 className="text-base font-semibold">{link.label}</h3>

          {link.pages.map((page) => (
            <MenuLink
              key={page.label}
              url={page.url}
              label={page.label}
              isActive={path === page.url}
              onClick={onClose}
            />
          ))}
        </>
      ))}
    </nav>
  );
}
