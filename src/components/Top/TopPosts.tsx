"use client";

import { usePosts } from "@/hooks/post";
import { TileList } from "../TileList";

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
  const { data } = usePosts(url);

  return <TileList posts={data} isGallery={isGallery} hideUser={hideUser} />;
};
