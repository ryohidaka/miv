"use client";

import { StickyTop } from "@/components/Common/StickyTop";
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
  const tag = params.tag;

  const url = `/api/tags/${tag}`;

  const { data, error, isLoading, size, setSize } = usePostsWithPagination(url);

  const next = () => {
    setSize(size + 1);
  };

  const title = `# ${tag}`;

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <StickyTop>
        <h1 className="mb-4 px-3 text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white ">
          {title}
        </h1>
      </StickyTop>
      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
}
