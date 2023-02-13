"use client";

import useSWR from "swr";

import { convertGalleryPost } from "@/modules/client";
import { GalleryPost } from "@/types/gallery";
import { postFetcher } from "@/modules/swr";

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
