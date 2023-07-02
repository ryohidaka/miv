import { Heading } from "@/components/Common/Heading";
import { TopPosts } from "@/components/Top/TopPosts";
import useTranslation from "next-translate/useTranslation";

/**
 * お気に入り
 * @returns
 */
export default function Favorites() {
  const { t } = useTranslation();

  const userItems = [
    {
      id: "my-notes",
      section: t("タイムライン"),
      url: `/api/i/favorites/notes?limit=12`,
      isGallery: false,
    },
    {
      id: "my-gallery",
      section: t("ギャラリー"),
      url: `/api/i/favorites/gallery?limit=12`,
      isGallery: true,
    },
  ];

  return (
    <>
      <Heading text={t("お気に入り")} />

      {userItems.map((item) => (
        <section key={item.id} id={item.id} className="grid grid-cols-1 gap-6">
          <h2 className="px-3 text-3xl tracking-tighter md:p-0">
            {item.section}
          </h2>
          <TopPosts url={item.url} isGallery={item.isGallery} />
        </section>
      ))}
    </>
  );
}
