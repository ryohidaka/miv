"use client";

import { Heading } from "@/components/Common/Heading";
import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { usePostsWithPagination } from "@/hooks/post";

/**
 * グローバルタイムライン画面
 * @returns
 */
export default function GlobalTimeline() {
  const url = "/api/notes/global-timeline";
  const { data, error, isLoading, size, setSize } = usePostsWithPagination(url);

  const next = () => {
    setSize(size + 1);
  };

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <Heading text="Global Timeline" />
      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
}
