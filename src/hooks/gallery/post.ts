"use client";

import useSWR from "swr";

import { convertGalleryPost, postFetcher } from "@/modules/client";
import { GalleryPost } from "@/types/gallery";

/**
 * ギャラリー投稿取得
 * @returns
 */
export const useGalleryPost = (postId: string) => {
  const url = `/api/gallery/${postId}`;

  const { data, error, isLoading } = useSWR<GalleryPost, Error>(
    url,
    postFetcher
  );

  const post = convertGalleryPost(data);

  return { data: post, error, isLoading };
};
