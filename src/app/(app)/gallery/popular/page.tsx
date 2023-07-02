import { Heading } from "@/components/Common/Heading";
import { TileList } from "@/components/TileList";
import { getGalleryPosts } from "@/modules/ssr/gallery";

/**
 * 人気の投稿一覧
 * @returns
 */
export default async function GalleryPopular() {
  const popularPosts = await getGalleryPosts("popular");

  return (
    <>
      <Heading text="Popular Posts" />
      <TileList posts={popularPosts} isGallery />
    </>
  );
}
