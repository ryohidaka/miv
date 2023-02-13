"use client";

import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { useGallery } from "@/hooks/gallery";

/**
 * ハイライトされた投稿一覧
 * @returns
 */
export default function GalleryFeatured() {
  const url = "/api/gallery/featured";
  const { data, error, isLoading } = useGallery(url);

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      {/* @ts-ignore */}
      <Viewer posts={data} hasMore={true} isGallery />
    </ViewerLayout>
  );
}
