import { Heading } from "@/components/Common/Heading";
import { TileList } from "@/components/TileList";
import { getGalleryPosts } from "@/modules/ssr/gallery";
import useTranslation from "next-translate/useTranslation";

/**
 * ハイライトされた投稿一覧
 * @returns
 */
export default async function GalleryFeatured() {
  const { t } = useTranslation();

  const featuredPosts = await getGalleryPosts("featured");

  return (
    <>
      <Heading text={t("特集投稿")} />
      <TileList posts={featuredPosts} isGallery />
    </>
  );
}
