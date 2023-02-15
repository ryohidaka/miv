"use client";

import { TrendTags } from "@/components/Top/TrendTags";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { TopPosts } from "@/components/Top/TopPosts";

type Item = {
  section: string;
  contents: {
    subSection: string;
    url: string;
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
          url: "/api/gallery/posts?limit=12",
          isGallery: true,
        },
        {
          subSection: "Featured Gallery",
          url: "/api/gallery/featured",
          isGallery: true,
        },
        {
          subSection: "Popular Gallery",
          url: "/api/gallery/popular",
          isGallery: true,
        },
      ],
    },
    {
      section: "Timeline",
      contents: [
        {
          subSection: "Local Timeline",
          url: "/api/notes/local-timeline?limit=12",
        },
        {
          subSection: "Hybrid Timeline",
          url: "/api/notes/hybrid-timeline?limit=12",
        },
        {
          subSection: "Global Timeline",
          url: "/api/notes/global-timeline?limit=12",
        },
      ],
    },
  ];

  return (
    <ViewerLayout>
      {/* トレンドにあるハッシュタグ一覧 */}
      <TrendTags />

      <div className="grid grid-cols-1 gap-10">
        {items.map((item) => (
          <section key={item.section} className="grid grid-cols-1 gap-6">
            <h2 className="text-3xl tracking-tighter">{item.section}</h2>
            {item.contents.map((content) => (
              <>
                <h3 className="text-2xl tracking-tighter">
                  {content.subSection}
                </h3>
                <TopPosts url={content.url} isGallery={content.isGallery} />
              </>
            ))}
          </section>
        ))}
      </div>
    </ViewerLayout>
  );
}
