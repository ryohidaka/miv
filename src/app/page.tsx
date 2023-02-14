"use client";

import { TrendTags } from "@/components/Top/TrendTags";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { TopPosts } from "@/components/Top/TopPosts";

type Item = {
  section: string;
  url: string;
  isGallery?: boolean;
};

/**
 * ホーム画面
 * @returns
 */
export default function Home() {
  const items: Item[] = [
    {
      section: "Gallery",
      url: "/api/gallery/posts?limit=12",
      isGallery: true,
    },
    {
      section: "Featured Gallery",
      url: "/api/gallery/featured",
      isGallery: true,
    },
    {
      section: "Popular Gallery",
      url: "/api/gallery/popular",
      isGallery: true,
    },
    {
      section: "Local Timeline",
      url: "/api/notes/local-timeline?limit=12",
    },
    {
      section: "Hybrid Timeline",
      url: "/api/notes/hybrid-timeline?limit=12",
    },
    {
      section: "Global Timeline",
      url: "/api/notes/global-timeline?limit=12",
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
            <TopPosts url={item.url} isGallery={item.isGallery} />
          </section>
        ))}
      </div>
    </ViewerLayout>
  );
}
