"use client";

import { Heading } from "@/components/Common/Heading";
import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { usePostsWithPagination } from "@/hooks/post";

/**
 * ホームタイムライン画面
 * @returns
 */
export default function HomeTimeline() {
  const url = "/api/notes/timeline";
  const { data, error, isLoading, size, setSize } = usePostsWithPagination(url);

  const next = () => {
    setSize(size + 1);
  };

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <Heading text="Home Timeline" />
      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
}
