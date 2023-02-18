import { useLocale } from "@/hooks/locale";
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
  const { t } = useLocale();

  // ページ一覧
  const links = [
    {
      label: "",
      pages: [
        {
          url: "/dashboard",
          label: t.DASHBOARD,
        },
        {
          url: "/favorites",
          label: t.FAVORITES,
        },
      ],
    },
    {
      label: t.GALLERY,
      pages: [
        {
          url: "/gallery/posts",
          label: t.RECENT_POSTS,
        },
        {
          url: "/gallery/featured",
          label: t.FEATURED_POSTS,
        },
        {
          url: "/gallery/popular",
          label: t.POPULAR_POSTS,
        },
      ],
    },
    {
      label: t.TIMELINE,
      pages: [
        {
          url: "/notes/local",
          label: t.LOCAL_TIMELINE,
        },
        {
          url: "/notes/hybrid",
          label: t.SOCIAL_TIMELINE,
        },
        {
          url: "/notes/global",
          label: t.GLOBAL_TIMELINE,
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
