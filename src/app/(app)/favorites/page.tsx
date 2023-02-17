import { StickyTop } from "@/components/Common/StickyTop";
import { TopPosts } from "@/components/Top/TopPosts";

/**
 * お気に入り
 * @returns
 */
export default function Favorites() {
  const userItems = [
    {
      id: "my-notes",
      section: "Notes",
      url: `/api/i/favorites/notes?limit=12`,
      isGallery: false,
    },
    {
      id: "my-gallery",
      section: "Gallery",
      url: `/api/i/favorites/gallery?limit=12`,
      isGallery: true,
    },
  ];

  return (
    <>
      <StickyTop>
        <h1 className="mb-4 px-3 text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white ">
          Favorites
        </h1>
      </StickyTop>

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
