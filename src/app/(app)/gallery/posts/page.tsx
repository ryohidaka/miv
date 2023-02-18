"use client";

import { Heading } from "@/components/Common/Heading";
import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { useLocale } from "@/hooks/locale";
import { usePostsWithPagination } from "@/hooks/post";

/**
 * ギャラリー画面
 * @returns
 */
export default function GalleryPosts() {
  const { t } = useLocale();
  const url = "/api/gallery/posts";
  const { data, error, isLoading, size, setSize } = usePostsWithPagination(url);

  const next = () => {
    setSize(size + 1);
  };

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <Heading text={t.RECENT_POSTS} />
      <Viewer posts={data} hasMore={true} next={next} isGallery />
    </ViewerLayout>
  );
}
