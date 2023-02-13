"use client";

import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { useNotes } from "@/hooks/notes";

/**
 * ローカルタイムライン画面
 * @returns
 */
export default function LocalTimeline() {
  const url = "/api/notes/local-timeline";
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
