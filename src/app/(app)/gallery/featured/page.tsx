"use client";

import { Heading } from "@/components/Common/Heading";
import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { useLocale } from "@/hooks/locale";
import { usePosts } from "@/hooks/post";

/**
 * ハイライトされた投稿一覧
 * @returns
 */
export default function GalleryFeatured() {
  const { t } = useLocale();
  const url = "/api/gallery/featured";
  const { data, error, isLoading } = usePosts(url);

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <Heading text={t.FEATURED_POSTS} />

      {/* @ts-ignore */}
      <Viewer posts={data} hasMore={true} isGallery />
    </ViewerLayout>
  );
}
