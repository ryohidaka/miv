"use client";

import { Heading } from "@/components/Common/Heading";
import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { usePostsWithPagination } from "@/hooks/post";
import useTranslation from "next-translate/useTranslation";

/**
 * グローバルタイムライン画面
 * @returns
 */
export default function GlobalTimeline() {
  const { t } = useTranslation();

  const url = "/api/notes/global-timeline";
  const { data, error, isLoading, size, setSize } = usePostsWithPagination(url);

  const next = () => {
    setSize(size + 1);
  };

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <Heading text={t("グローバルタイムライン")} />
      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
}
