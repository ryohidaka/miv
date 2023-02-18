"use client";

import { Heading } from "@/components/Common/Heading";
import { TopPosts } from "@/components/Top/TopPosts";
import { useLocale } from "@/hooks/locale";

/**
 * お気に入り
 * @returns
 */
export default function Favorites() {
  const { t } = useLocale();
  const userItems = [
    {
      id: "my-notes",
      section: t.NOTES,
      url: `/api/i/favorites/notes?limit=12`,
      isGallery: false,
    },
    {
      id: "my-gallery",
      section: t.GALLERY,
      url: `/api/i/favorites/gallery?limit=12`,
      isGallery: true,
    },
  ];

  return (
    <>
      <Heading text={t.FAVORITES} />

      {userItems.map((item) => (
        <section key={item.id} id={item.id} className="grid grid-cols-1 gap-6">
          <h2 className="px-3 text-3xl tracking-tighter md:p-0">
            {item.section}
          </h2>
          <TopPosts url={item.url} isGallery={item.isGallery} hideUser />
        </section>
      ))}
    </>
  );
}
