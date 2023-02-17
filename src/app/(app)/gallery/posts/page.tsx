"use client";

import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { usePostsWithPagination } from "@/hooks/post";

/**
 * ギャラリー画面
 * @returns
 */
export default function GalleryPosts() {
  const url = "/api/gallery/posts";
  const { data, error, isLoading, size, setSize } = usePostsWithPagination(url);

  const next = () => {
    setSize(size + 1);
  };

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <Viewer posts={data} hasMore={true} next={next} isGallery />
    </ViewerLayout>
  );
}
