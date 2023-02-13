"use client";

import { getFlatPosts } from "@/modules/client";
import { fetcher, swrInfiniteConfig } from "@/modules/swr";
import { Posts } from "@/types/post";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWRInfinite from "swr/infinite";

const BASE_URL = "/api/timeline/search";

/**
 * 検索タイムライン取得
 * @returns
 */
export const useSearchTimeline = (keyword: string) => {
  const validKeyword = keyword ? keyword.replaceAll(/　/g, " ") : "";

  // 検索用クエリを作成
  const query = `has:images ${validKeyword}`;

  const url = `${BASE_URL}?query=${query}`;

  const getKey = (pageIndex: number, _previousPageData: Posts) => {
    if (pageIndex === 0) {
      return url;
    } else {
      return url;
    }
  };

  const { data, error, isLoading, size, setSize, mutate } = useSWRInfinite<
    Posts,
    Error
  >(getKey, keyword ? fetcher : null, swrInfiniteConfig);

  const flatPosts = getFlatPosts(data as Posts[]);

  return { data: flatPosts, error, isLoading, size, setSize, mutate };
};

/**
 * クエリパラメータからキーワードを取得する
 * @returns
 */
export const useKeyword = () => {
  const [keyword, setKeyword] = useState<string>("");

  // パラメータを取得
  const params = useSearchParams();

  useEffect(() => {
    const keyword = params.get("keyword") as string;
    setKeyword(keyword);
  }, [params]);

  return keyword;
};
