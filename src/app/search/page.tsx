"use client";

import { useRouter } from "next/navigation";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { useKeyword, useSearchTimeline } from "@/hooks/timeline/search";
import { SearchForm } from "@/components/Viewer/Layout/SearchForm";
import { NoResults } from "@/components/Viewer/NoResults";
import { useSearchHistory } from "@/hooks/history";
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

  const { updateHistory } = useSearchHistory();

  const router = useRouter();

  // 検索
  const search = (keyword: string) => {
    updateHistory(keyword);
    router.push(`/search?keyword=${keyword}`);
  };

  const noResult = keyword && data.length === 0;

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      {/* 検索フォーム */}
      <SearchForm value={keyword} search={search} />

      {noResult && <NoResults keyword={keyword} />}

      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
}
