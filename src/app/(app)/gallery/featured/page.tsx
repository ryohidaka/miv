"use client";

import { Heading } from "@/components/Common/Heading";
import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { usePosts } from "@/hooks/post";

/**
 * ハイライトされた投稿一覧
 * @returns
 */
export default function GalleryFeatured() {
  const url = "/api/gallery/featured";
  const { data, error, isLoading } = usePosts(url);

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <Heading text="Featured Gallery" />

      {/* @ts-ignore */}
      <Viewer posts={data} hasMore={true} isGallery />
    </ViewerLayout>
  );
}
