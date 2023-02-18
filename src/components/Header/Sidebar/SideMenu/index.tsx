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
      label: "",
      pages: [
        {
          url: "/dashboard",
          label: "Dashboard",
        },
        {
          url: "/favorites",
          label: "Favorites",
        },
      ],
    },
    {
      label: "Gallery",
      pages: [
        {
          url: "/gallery/posts",
          label: "Recent Posts",
        },
        {
          url: "/gallery/featured",
          label: "Featured Posts",
        },
        {
          url: "/gallery/popular",
          label: "Popular Posts",
        },
      ],
    },
    {
      label: "Timeline",
      pages: [
        {
          url: "/notes/local",
          label: "Local Timeline",
        },
        {
          url: "/notes/hybrid",
          label: "Social Timeline",
        },
        {
          url: "/notes/global",
          label: "Global Timeline",
        },
      ],
    },
  ];

  return (
    <nav className="mb-5 grid grid-cols-1 items-stretch justify-center gap-1">
      {links.map((link) => (
        <Fragment key={link.label}>
          <h3 className="text-base font-semibold">{link.label}</h3>

          {link.pages.map((page) => (
            <MenuLink
              key={page.label}
              url={page.url}
              label={page.label}
              onClick={onClose}
            />
          ))}
        </Fragment>
      ))}
    </nav>
  );
}
