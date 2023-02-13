"use client";

import { useUserName, useUserTimeline } from "@/hooks/timeline/user";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { Viewer } from "@/components/Viewer";

/**
 * ユーザタイムライン画面
 * @returns
 */
export default function User() {
  // パラメータからユーザ名を取得
  const userName = useUserName();

  // タイムラインを取得
  const { data, error, isLoading, size, setSize } = useUserTimeline(userName);

  const next = () => {
    setSize(size + 1);
  };

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
}
