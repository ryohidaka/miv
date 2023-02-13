"use client";

import useSWR from "swr";

import { postFetcher } from "@/modules/swr";
import { GalleryPost } from "@/types/gallery";
import { convertGalleryPost } from "@/modules/client";

/**
 * 投稿取得
 * @returns
 */
export const usePost = (postId: string) => {
  const url = `/api/posts/${postId}`;

  const { data, error, isLoading } = useSWR<GalleryPost, Error>(
    url,
    postFetcher
  );

  const post = convertGalleryPost(data);

  return { data: post, error, isLoading };
};
