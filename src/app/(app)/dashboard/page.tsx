import { Heading } from "@/components/Common/Heading";
import { TopPosts } from "@/components/Top/TopPosts";
import { TrendTags } from "@/components/Top/TrendTags";
import Link from "next/link";

type Item = {
  section: string;
  contents: {
    subSection: string;
    url: string;
    endpoint: string;
    isGallery?: boolean;
  }[];
};

const title = "ダッシュボード";

export const metadata = {
  title,
};

/**
 * ホーム画面
 * @returns
 */
export default function Home() {
  const items: Item[] = [
    {
      section: "ギャラリー",
      contents: [
        {
          subSection: "最近の投稿",
          url: "/gallery/posts",
          endpoint: "/api/gallery/posts?limit=12",
          isGallery: true,
        },
        {
          subSection: "ハイライトされた投稿",
          url: "/gallery/featured",
          endpoint: "/api/gallery/featured",
          isGallery: true,
        },
        {
          subSection: "人気の投稿",
          url: "/gallery/popular",
          endpoint: "/api/gallery/popular",
          isGallery: true,
        },
      ],
    },
    {
      section: "タイムライン",
      contents: [
        {
          subSection: "ローカルタイムライン",
          url: "/notes/local",
          endpoint: "/api/notes/local-timeline?limit=12",
        },
        {
          subSection: "ソーシャルタイムライン",
          url: "/notes/hybrid",
          endpoint: "/api/notes/hybrid-timeline?limit=12",
        },
        {
          subSection: "グローバルタイムライン",
          url: "/notes/global",
          endpoint: "/api/notes/global-timeline?limit=12",
        },
      ],
    },
  ];

  return (
    <>
      <Heading text={title} />

      {/* トレンドにあるハッシュタグ一覧 */}
      {/* @ts-ignore */}
      <TrendTags />

      <div className="grid grid-cols-1 gap-10">
        {items.map((item) => (
          <section key={item.section} className="grid grid-cols-1 gap-6">
            <h2 className="px-3 text-3xl tracking-tighter md:p-0">
              {item.section}
            </h2>
            {item.contents.map((content) => (
              <section
                key={content.subSection}
                className="grid grid-cols-1 gap-3"
              >
                <header className="flex items-center justify-between px-3 md:px-0">
                  <h3 className="text-2xl tracking-tighter">
                    {content.subSection}
                  </h3>
                  <Link href={content.url} className="hyperlink">
                    もっと見る
                  </Link>
                </header>
                <TopPosts
                  url={content.endpoint}
                  isGallery={content.isGallery}
                />
              </section>
            ))}
          </section>
        ))}
      </div>
    </>
  );
}
