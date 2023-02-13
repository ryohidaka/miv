"use client";

import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { useGalleryFeatured } from "@/hooks/gallery/featured";

/**
 * ハイライトされた投稿一覧
 * @returns
 */
export default function GalleryFeatured() {
  const { data, error, isLoading } = useGalleryFeatured();

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      {/* @ts-ignore */}
      <Viewer posts={data} hasMore={true} isGallery />
    </ViewerLayout>
  );
}
