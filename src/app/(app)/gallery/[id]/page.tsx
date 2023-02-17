"use client";

import { PostLayout } from "@/components/Layout/PostLayout";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { usePost } from "@/hooks/post";
import { Post, PostParams } from "@/types/post";

type Props = {
  params: PostParams;
};

/**
 * ギャラリー個別表示
 * @returns
 */
export default function ShowPostImages({ params }: Props) {
  // 投稿を取得
  const url = `/api/gallery/${params.id}`;
  const { data, error, isLoading } = usePost(url);

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <PostLayout post={data as Post} />
    </ViewerLayout>
  );
}
