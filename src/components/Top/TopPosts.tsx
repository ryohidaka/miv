"use client";

import { usePosts } from "@/hooks/post";
import { TileList } from "../TileList";
import { ErrorAlert } from "../Viewer/Layout/ErrorAlert";
import { Loading } from "../Viewer/Layout/Loading";

type Props = {
  url: string;
  isGallery?: boolean;
  hideUser?: boolean;
};

/**
 * トップ画面に表示する投稿リスト
 * @returns
 */
export const TopPosts = ({ url, isGallery, hideUser }: Props) => {
  const { data, isLoading, error } = usePosts(url);

  return (
    <>
      {/* エラー */}
      {error && <ErrorAlert />}

      {/* メインコンテンツ */}
      {!isLoading && !error && (
        <TileList posts={data} isGallery={isGallery} hideUser={hideUser} />
      )}

      {/* ローディング */}
      {isLoading && (
        <div className="h-96 w-full">
          <Loading />
        </div>
      )}
    </>
  );
};
