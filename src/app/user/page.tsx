"use client";

import { useUserName, useUserTimeline } from "@/hooks/timeline/user";
import { useRouter } from "next/navigation";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { SearchForm } from "@/components/Viewer/Layout/SearchForm";
import { useUserSearchHistory } from "@/hooks/history";
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

  const { updateHistory } = useUserSearchHistory();

  const router = useRouter();

  // 検索
  const search = (userName: string) => {
    updateHistory(userName);
    router.push(`/user?name=${userName}`);
  };

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      {/* 検索フォーム */}
      <SearchForm value={userName} search={search} isUserSearch />

      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
}
