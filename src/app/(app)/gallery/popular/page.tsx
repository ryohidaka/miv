import { Heading } from "@/components/Common/Heading";
import { TileList } from "@/components/TileList";
import { getGalleryPosts } from "@/modules/ssr/gallery";

const title = "人気の投稿";

export const metadata = {
  title,
};

/**
 * 人気の投稿一覧
 * @returns
 */
export default async function GalleryPopular() {
  const popularPosts = await getGalleryPosts("popular");

  return (
    <>
      <Heading text={title} />
      <TileList posts={popularPosts} isGallery />
    </>
  );
}
