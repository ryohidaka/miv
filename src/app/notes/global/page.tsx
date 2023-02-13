"use client";

import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { useNotes } from "@/hooks/notes";

/**
 * グローバルタイムライン画面
 * @returns
 */
export default function GlobalTimeline() {
  const url = "/api/notes/global-timeline";
  const { data, error, isLoading, size, setSize } = useNotes(url);

  const next = () => {
    setSize(size + 1);
  };

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      {/* @ts-ignore */}
      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
}
