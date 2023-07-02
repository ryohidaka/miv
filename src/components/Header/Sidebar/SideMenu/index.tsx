import MenuLink from "./MenuLink";
import useTranslation from "next-translate/useTranslation";

type Props = {
  onClose: () => void;
};

/**
 * サイドメニュー
 * @returns
 */
export default function SideMenu({ onClose }: Props) {
  const { t } = useTranslation();

  // ページ一覧
  const links = [
    {
      label: "",
      pages: [
        {
          url: "/dashboard",
          label: t("ホーム"),
        },
        {
          url: "/favorites",
          label: t("お気に入り"),
        },
      ],
    },
    {
      label: t("ギャラリー"),
      pages: [
        {
          url: "/gallery/posts",
          label: t("最近の投稿"),
        },
        {
          url: "/gallery/featured",
          label: t("特集投稿"),
        },
        {
          url: "/gallery/popular",
          label: t("人気の投稿"),
        },
      ],
    },
    {
      label: t("タイムライン"),
      pages: [
        {
          url: "/notes/home",
          label: t("ホームタイムライン"),
        },
        {
          url: "/notes/local",
          label: t("ローカルタイムライン"),
        },
        {
          url: "/notes/hybrid",
          label: t("ソーシャルタイムライン"),
        },
        {
          url: "/notes/global",
          label: t("グローバルタイムライン"),
        },
      ],
    },
  ];

  return (
    <nav className="mb-5 grid grid-cols-1 items-stretch justify-center gap-1">
      {links.map((link) => (
        <section key={link.label} className="grid grid-cols-1 gap-1">
          <h3 className="text-base font-semibold">{link.label}</h3>

          {link.pages.map((page) => (
            <MenuLink
              key={page.label}
              url={page.url}
              label={page.label}
              onClick={onClose}
            />
          ))}
        </section>
      ))}
    </nav>
  );
}
