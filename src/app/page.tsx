"use client";

import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { useGalleryPosts } from "@/hooks/gallery";

/**
 * ギャラリー画面
 * @returns
 */
export default function GalleryPosts() {
  const { data, error, isLoading, size, setSize } = useGalleryPosts();

  const next = () => {
    setSize(size + 1);
  };

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
}
