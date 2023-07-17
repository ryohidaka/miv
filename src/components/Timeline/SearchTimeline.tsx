"use client";

import { usePostsWithPagination } from "@/hooks/post";
import { Viewer } from "../Viewer";
import { ViewerLayout } from "../Viewer/Layout";
import { useQuery } from "@/hooks/search";
import { Heading } from "../Common/Heading";

/**
 * 検索タイムライン
 * @returns
 */
export const SearchTimeline = () => {
  const query = useQuery();

  const url = `/api/notes/search?q=${query}`;

  const mutate = query.length == 0;

  const { data, error, isLoading, size, setSize } = usePostsWithPagination(
    url,
    mutate
  );

  const next = () => {
    setSize(size + 1);
  };

  const title = `検索: ${query}`;

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <Heading text={title} />
      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
};
