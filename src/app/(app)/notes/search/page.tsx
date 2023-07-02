"use client";

import { Heading } from "@/components/Common/Heading";
import { Viewer } from "@/components/Viewer";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { usePostsWithPagination } from "@/hooks/post";
import { useQuery } from "@/hooks/search";

/**
 * ノート検索画面
 * @returns
 */
export default function SearchNotes() {
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

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <Heading text="Search" />
      <Viewer posts={data} hasMore={true} next={next} />
    </ViewerLayout>
  );
}
