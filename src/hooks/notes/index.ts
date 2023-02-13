"use client";

import { getFlatNotePosts } from "@/modules/client/note";
import { noteFetcher, swrInfiniteConfig } from "@/modules/swr";
import { NotePost } from "@/types/note";
import { Post } from "@/types/post";
import useSWRInfinite from "swr/infinite";

/**
 * ノート一覧取得
 * @returns
 */
export const useNotes = (url: string) => {
  const getKey = (pageIndex: number, previousPageData: Post[]) => {
    if (pageIndex === 0) {
      return url;
    } else {
      // ページネーションを指定
      const untilId = previousPageData[previousPageData.length - 1].id;
      return `${url}?until_id=${untilId}`;
    }
  };

  const { data, error, isLoading, size, setSize } = useSWRInfinite<
    NotePost[],
    Error
  >(getKey, noteFetcher, swrInfiniteConfig);

  const posts = getFlatNotePosts(data as NotePost[][]);

  return { data: posts, error, isLoading, size, setSize };
};
