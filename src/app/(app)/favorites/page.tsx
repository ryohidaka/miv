import { Heading } from "@/components/Common/Heading";
import { TopPosts } from "@/components/Top/TopPosts";

const title = "お気に入り・いいねした投稿";

export const metadata = {
  title,
};

/**
 * お気に入り
 * @returns
 */
export default function Favorites() {
  const userItems = [
    {
      id: "my-notes",
      section: "ノート",
      url: `/api/i/favorites/notes?limit=12`,
      isGallery: false,
    },
    {
      id: "my-gallery",
      section: "ギャラリー",
      url: `/api/i/favorites/gallery?limit=12`,
      isGallery: true,
    },
  ];

  return (
    <>
      <Heading text={title} />

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
