"use client";

import { Heading } from "@/components/Common/Heading";
import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { usePostsWithPagination } from "@/hooks/post";
import { TagParams } from "@/types/tag";

type Props = {
  params: TagParams;
};

/**
 * タグ画面
 * @returns
 */
export default function Tag({ params }: Props) {
  // タグを取得
  const tag = decodeURI(params.tag);

  const url = `/api/tags/${tag}`;

  const { data, error, isLoading, size, setSize } = usePostsWithPagination(url);

  const next = () => {
    setSize(size + 1);
  };

  const title = `# ${tag}`;

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <Heading text={title} />
      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
}
