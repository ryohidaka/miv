import { Heading } from "@/components/Common/Heading";
import { TileList } from "@/components/TileList";
import { getGalleryPosts } from "@/modules/ssr/gallery";

const title = "ハイライトされた投稿";

export const metadata = {
  title,
};

/**
 * ハイライトされた投稿一覧
 * @returns
 */
export default async function GalleryFeatured() {
  const featuredPosts = await getGalleryPosts("featured");

  return (
    <>
      <Heading text={title} />
      <TileList posts={featuredPosts} isGallery />
    </>
  );
}
