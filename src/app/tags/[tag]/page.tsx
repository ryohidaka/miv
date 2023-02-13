"use client";

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

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      {/* @ts-ignore */}
      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
}
