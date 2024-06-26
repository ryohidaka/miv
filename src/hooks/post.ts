"use client";

import { fetcher, swrInfiniteConfig } from "@/modules/swr";
import { Post } from "@/types/post";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

/**
 * 投稿一覧取得
 * @returns
 */
export const usePosts = (url: string) => {
  const { data, error, isLoading } = useSWR<Post[], Error>(url, fetcher);
  const posts = data?.flat();

  return { data: posts, error, isLoading };
};

/**
 * 投稿一覧取得 (ページネーションあり)
 * @returns
 */
export const usePostsWithPagination = (url: string, mutate?: boolean) => {
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
 * お気に入りノート一覧取得
 * @returns
 */
export const useFavoritedNotes = (): string[] => {
  const url = "/api/i/favorites/notes?limit=100";
  const { data } = useSWR<Post[], Error>(url, fetcher);

  return data ? data.map((post) => post.id) : [];
};
