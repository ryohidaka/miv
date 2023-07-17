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
          label: "ダッシュボード",
        },
        {
          url: "/favorites",
          label: "お気に入り",
        },
      ],
    },
    {
      label: "ギャラリー",
      pages: [
        {
          url: "/gallery/posts",
          label: "最近の投稿",
        },
        {
          url: "/gallery/featured",
          label: "ハイライトされた投稿",
        },
        {
          url: "/gallery/popular",
          label: "人気の投稿",
        },
      ],
    },
    {
      label: "タイムライン",
      pages: [
        {
          url: "/notes/home",
          label: "ホームタイムライン",
        },
        {
          url: "/notes/local",
          label: "ローカルタイムライン",
        },
        {
          url: "/notes/hybrid",
          label: "ソーシャルタイムライン",
        },
        {
          url: "/notes/global",
          label: "グローバルタイムライン",
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
