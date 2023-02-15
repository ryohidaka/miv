"use client";

import { PostLayout } from "@/components/Layout/PostLayout";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { usePost, usePostId } from "@/hooks/post";
import { Post, PostParams } from "@/types/post";

type Props = {
  params: PostParams;
};

/**
 * ノート個別表示
 * @returns
 */
export default function ShowNoteImage({ params }: Props) {
  // 投稿IDを取得
  const postId = usePostId(params);

  // 投稿を取得
  const url = `/api/notes/${postId}`;
  const { data, error, isLoading } = usePost(url);

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <PostLayout post={data as Post} />
    </ViewerLayout>
  );
}
