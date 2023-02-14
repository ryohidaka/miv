"use client";

import { StickyTop } from "@/components/Common/StickyTop";
import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { useNotes } from "@/hooks/notes";
import { useTag } from "@/hooks/tags";
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
  const tag = useTag(params);

  const url = `/api/tags/${tag}`;

  const { data, error, isLoading, size, setSize } = useNotes(url);

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

      {/* @ts-ignore */}
      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
}
