"use client";

import { usePostsWithPagination } from "@/hooks/post";
import { Viewer } from "../Viewer";
import { ViewerLayout } from "../Viewer/Layout";

/**
 * ホームタイムライン
 * @returns
 */
export const HomeTimeline = () => {
  const url = "/api/notes/timeline";
  const { data, error, isLoading, size, setSize } = usePostsWithPagination(url);

  const next = () => {
    setSize(size + 1);
  };

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
};
