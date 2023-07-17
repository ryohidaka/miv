"use client";

import { usePostsWithPagination } from "@/hooks/post";
import { Viewer } from "../Viewer";
import { ViewerLayout } from "../Viewer/Layout";

type Props = {
  query: string;
};

/**
 * 検索タイムライン
 * @returns
 */
export const SearchTimeline = ({ query }: Props) => {
  const url = `/api/notes/search?q=${query}`;

  const mutate = query.length == 0;

  const { data, error, isLoading, size, setSize } = usePostsWithPagination(
    url,
    mutate
  );

  const next = () => {
    setSize(size + 1);
  };

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
};
