import { Heading } from "@/components/Common/Heading";
import { TileList } from "@/components/TileList";
import { getGalleryPosts } from "@/modules/ssr/gallery";
import useTranslation from "next-translate/useTranslation";

/**
 * 人気の投稿一覧
 * @returns
 */
export default async function GalleryPopular() {
  const { t } = useTranslation();

  const popularPosts = await getGalleryPosts("popular");

  return (
    <>
      <Heading text={t("人気の投稿")} />
      <TileList posts={popularPosts} isGallery />
    </>
  );
}
