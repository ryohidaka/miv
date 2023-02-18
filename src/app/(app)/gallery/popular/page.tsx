"use client";

import { Heading } from "@/components/Common/Heading";
import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { useLocale } from "@/hooks/locale";
import { usePosts } from "@/hooks/post";

/**
 * 人気の投稿一覧
 * @returns
 */
export default function GalleryPopular() {
  const { t } = useLocale();
  const url = "/api/gallery/popular";
  const { data, error, isLoading } = usePosts(url);

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <Heading text={t.POPULAR_POSTS} />

      {/* @ts-ignore */}
      <Viewer posts={data} hasMore={true} isGallery />
    </ViewerLayout>
  );
}
