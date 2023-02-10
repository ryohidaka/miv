"use client";

import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { useHomeTimeline } from "@/hooks/timeline/home";

/**
 * ホームタイムライン画面
 * @returns
 */
export default function Home() {
  // ツイートを取得
  const { data, error, isLoading, size, setSize } = useHomeTimeline();

  const next = () => {
    setSize(size + 1);
  };

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
}
