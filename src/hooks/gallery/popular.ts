"use client";

import useSWR from "swr";

import { galleryFetcher, getFlatGalleryPosts } from "@/modules/client";
import { GalleryPost } from "@/types/gallery";

/**
 * 人気の投稿取得
 * @returns
 */
export const useGalleryPopular = () => {
  const url = `/api/gallery/popular`;

  const { data, error, isLoading } = useSWR<GalleryPost[], Error>(
    url,
    galleryFetcher
  );

  const posts = getFlatGalleryPosts([data] as GalleryPost[][]);

  return { data: posts, error, isLoading };
};
