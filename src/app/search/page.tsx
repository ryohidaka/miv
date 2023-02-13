"use client";

import { ViewerLayout } from "@/components/Viewer/Layout";
import { useKeyword, useSearchTimeline } from "@/hooks/timeline/search";
import { NoResults } from "@/components/Viewer/NoResults";
import { Viewer } from "@/components/Viewer";

/**
 * 検索タイムライン画面
 * @returns
 */
export default function Search() {
  // パラメータからユーザ名を取得
  const keyword = useKeyword();

  // ツイートを取得
  const { data, error, isLoading, size, setSize } = useSearchTimeline(keyword);

  const next = () => {
    setSize(size + 1);
  };

  const noResult = keyword && data.length === 0;

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      {noResult && <NoResults keyword={keyword} />}

      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
}
