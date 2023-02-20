import { Heading } from "@/components/Common/Heading";
import { TileList } from "@/components/TileList";
import { TrendTags } from "@/components/Top/TrendTags";
import { getGallery } from "@/modules/ssr/gallery";
import { getTimelines } from "@/modules/ssr/notes";
import { Post } from "@/types/post";
import Link from "next/link";

type Item = {
  section: string;
  contents: {
    subSection: string;
    url: string;
    posts: Post[];
    isGallery?: boolean;
  }[];
};

/**
 * ホーム画面
 * @returns
 */
export default async function Home() {
  const timelines = await getTimelines();
  const gallery = await getGallery();
  const items: Item[] = [
    {
      section: "Gallery",
      contents: [
        {
          subSection: "Posts",
          url: "/gallery/posts",
          posts: gallery.recent,
          isGallery: true,
        },
        {
          subSection: "Featured Gallery",
          url: "/gallery/featured",
          posts: gallery.featured,
          isGallery: true,
        },
        {
          subSection: "Popular Gallery",
          url: "/gallery/popular",
          posts: gallery.popular,
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
          posts: timelines.local,
        },
        {
          subSection: "Hybrid Timeline",
          url: "/notes/hybrid",
          posts: timelines.hybrid,
        },
        {
          subSection: "Global Timeline",
          url: "/notes/global",
          posts: timelines.global,
        },
      ],
    },
  ];

  return (
    <>
      <Heading text="Dashboard" />

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
                    more...
                  </Link>
                </header>
                <TileList posts={content.posts} isGallery={content.isGallery} />
              </section>
            ))}
          </section>
        ))}
      </div>
    </>
  );
}
