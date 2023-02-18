"use client";

import { Heading } from "@/components/Common/Heading";
import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { useLocale } from "@/hooks/locale";
import { usePostsWithPagination } from "@/hooks/post";

/**
 * ローカルタイムライン画面
 * @returns
 */
export default function LocalTimeline() {
  const { t } = useLocale();
  const url = "/api/notes/local-timeline";
  const { data, error, isLoading, size, setSize } = usePostsWithPagination(url);

  const next = () => {
    setSize(size + 1);
  };

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <Heading text={t.LOCAL_TIMELINE} />
      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
}
