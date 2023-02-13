"use client";

import { usePathname } from "next/navigation";
import { Fragment } from "react";
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
          url: "gallery/posts",
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
          url: "notes/local",
          label: "Local Timeline",
        },
        {
          url: "notes/hybrid",
          label: "Hybrid Timeline",
        },
        {
          url: "notes/global",
          label: "Global Timeline",
        },
      ],
    },
  ];

  // ページのパスを取得
  const path = usePathname();

  return (
    <nav className="mb-5 grid grid-cols-1 items-stretch justify-center gap-3">
      {links.map((link) => (
        <Fragment key={link.label}>
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
        </Fragment>
      ))}
    </nav>
  );
}
