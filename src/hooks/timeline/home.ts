"use client";

import { getFlatPosts } from "@/modules/client";
import { fetcher, swrInfiniteConfig } from "@/modules/swr";
import { Posts } from "@/types/post";
import useSWRInfinite from "swr/infinite";

/**
 * ホームタイムライン取得
 * @returns
 */
export const useHomeTimeline = () => {
  const getKey = (pageIndex: number, _previousPageData: Posts) => {
    const url = "/api/timeline/home";

    if (pageIndex === 0) {
      return url;
    } else {
      // ページネーションを指定
      return url;
    }
  };

  const { data, error, isLoading, size, setSize } = useSWRInfinite<
    Posts,
    Error
  >(getKey, fetcher, swrInfiniteConfig);

  const flatPosts = getFlatPosts(data as Posts[]);

  return { data: flatPosts, error, isLoading, size, setSize };
};
