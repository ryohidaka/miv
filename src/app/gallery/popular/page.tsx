"use client";

import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { usePosts } from "@/hooks/post";

/**
 * 人気の投稿一覧
 * @returns
 */
export default function GalleryPopular() {
  const url = "/api/gallery/popular";
  const { data, error, isLoading } = usePosts(url);

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      {/* @ts-ignore */}
      <Viewer posts={data} hasMore={true} isGallery />
    </ViewerLayout>
  );
}
