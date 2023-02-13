"use client";

import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { useGalleryPopular } from "@/hooks/gallery/popular";

/**
 * 人気の投稿一覧
 * @returns
 */
export default function GalleryPopular() {
  const { data, error, isLoading } = useGalleryPopular();

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      {/* @ts-ignore */}
      <Viewer posts={data} hasMore={true} isGallery />
    </ViewerLayout>
  );
}
