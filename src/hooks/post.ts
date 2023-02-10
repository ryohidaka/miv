"use client";

import useSWR from "swr";

import { Post } from "@/types/post";
import { postFetcher } from "@/modules/client";

/**
 * 投稿取得
 * @returns
 */
export const usePost = (postId: string) => {
  const url = `/api/posts/${postId}`;

  const { data, error, isLoading } = useSWR<Post, Error>(url, postFetcher);

  return { data, error, isLoading };
};
