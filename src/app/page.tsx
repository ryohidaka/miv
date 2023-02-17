import { TrendTags } from "@/components/Top/TrendTags";
import { TopPosts } from "@/components/Top/TopPosts";
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

/**
 * ホーム画面
 * @returns
 */
export default function Home() {
  const items: Item[] = [
    {
      section: "Gallery",
      contents: [
        {
          subSection: "Posts",
          url: "/gallery/posts",
          endpoint: "/api/gallery/posts?limit=12",
          isGallery: true,
        },
        {
          subSection: "Featured Gallery",
          url: "/gallery/featured",
          endpoint: "/api/gallery/featured",
          isGallery: true,
        },
        {
          subSection: "Popular Gallery",
          url: "/gallery/popular",
          endpoint: "/api/gallery/popular",
          isGallery: true,
        },
      ],
    },
    {
      section: "Timeline",
      contents: [
        {
          subSection: "Local Timeline",
          url: "/notes/local",
          endpoint: "/api/notes/local-timeline?limit=12",
        },
        {
          subSection: "Hybrid Timeline",
          url: "/notes/hybrid",
          endpoint: "/api/notes/hybrid-timeline?limit=12",
        },
        {
          subSection: "Global Timeline",
          url: "/notes/global",
          endpoint: "/api/notes/global-timeline?limit=12",
        },
      ],
    },
  ];

  return (
    <>
      {/* トレンドにあるハッシュタグ一覧 */}
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
                    more...
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
