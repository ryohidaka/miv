"use client";

import { getFlatPosts } from "@/modules/client";
import { fetcher, swrInfiniteConfig } from "@/modules/swr";
import { Posts } from "@/types/post";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWRInfinite from "swr/infinite";

const BASE_URL = "/api/timeline/user";

/**
 * ユーザタイムライン取得
 * @returns
 */
export const useUserTimeline = (userName: string) => {
  const url = `${BASE_URL}?user_name=${userName}`;

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
  >(getKey, userName ? fetcher : null, swrInfiniteConfig);

  const flatPosts = getFlatPosts(data as Posts[]);

  return { data: flatPosts, error, isLoading, size, setSize, mutate };
};

/**
 * クエリパラメータからユーザ名を取得する
 * @returns
 */
export const useUserName = () => {
  const [userName, setUserName] = useState<string>("");

  // パラメータを取得
  const params = useSearchParams();

  useEffect(() => {
    const userName = params.get("name") as string;
    setUserName(userName);
  }, [params]);

  return userName;
};
