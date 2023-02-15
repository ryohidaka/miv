"use client";

import { usePosts } from "@/hooks/post";
import { TileList } from "../TileList";
import { ViewerLayout } from "../Viewer/Layout";

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
    <ViewerLayout isLoading={isLoading} error={error}>
      <TileList posts={data} isGallery={isGallery} hideUser={hideUser} />
    </ViewerLayout>
  );
};
