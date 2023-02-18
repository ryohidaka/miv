"use client";

import { Heading } from "@/components/Common/Heading";
import { TopPosts } from "@/components/Top/TopPosts";
import { TrendTags } from "@/components/Top/TrendTags";
import { useLocale } from "@/hooks/locale";
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
  const { t } = useLocale();

  const items: Item[] = [
    {
      section: t.GALLERY,
      contents: [
        {
          subSection: t.RECENT_POSTS,
          url: "/gallery/posts",
          endpoint: "/api/gallery/posts?limit=12",
          isGallery: true,
        },
        {
          subSection: t.FEATURED_POSTS,
          url: "/gallery/featured",
          endpoint: "/api/gallery/featured",
          isGallery: true,
        },
        {
          subSection: t.POPULAR_POSTS,
          url: "/gallery/popular",
          endpoint: "/api/gallery/popular",
          isGallery: true,
        },
      ],
    },
    {
      section: t.TIMELINE,
      contents: [
        {
          subSection: t.LOCAL_TIMELINE,
          url: "/notes/local",
          endpoint: "/api/notes/local-timeline?limit=12",
        },
        {
          subSection: t.SOCIAL_TIMELINE,
          url: "/notes/hybrid",
          endpoint: "/api/notes/hybrid-timeline?limit=12",
        },
        {
          subSection: t.GLOBAL_TIMELINE,
          url: "/notes/global",
          endpoint: "/api/notes/global-timeline?limit=12",
        },
      ],
    },
  ];

  return (
    <>
      <Heading text={t.DASHBOARD} />

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
                    {t.MORE}...
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
