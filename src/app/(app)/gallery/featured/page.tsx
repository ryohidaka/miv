import { Heading } from "@/components/Common/Heading";
import { TileList } from "@/components/TileList";
import { getGalleryPosts } from "@/modules/ssr/gallery";

/**
 * ハイライトされた投稿一覧
 * @returns
 */
export default async function GalleryFeatured() {
  const featuredPosts = await getGalleryPosts("featured");

  return (
    <>
      <Heading text="ハイライトされた投稿" />
      <TileList posts={featuredPosts} isGallery />
    </>
  );
}
