"use client";

import { fetcher, postFetcher, swrInfiniteConfig } from "@/modules/swr";
import { Post } from "@/types/post";
import useSWRInfinite from "swr/infinite";
import useSWR from "swr";

/**
 * ノート一覧取得
 * @returns
 */
export const useNotes = (url: string, mutate?: boolean) => {
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
    Post[],
    Error
  >(getKey, !mutate ? fetcher : null, swrInfiniteConfig);

  const posts = data?.flat();

  return { data: posts, error, isLoading, size, setSize };
};

/**
 * ノート取得
 * @returns
 */
export const useNote = (postId: string) => {
  const url = `/api/notes/${postId}`;

  const { data, error, isLoading } = useSWR<Post, Error>(url, postFetcher);

  return { data, error, isLoading };
};
