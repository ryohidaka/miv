"use client";

import {
  swrInfiniteConfig,
  getFlatGalleryPosts,
  galleryFetcher,
} from "@/modules/client";
import { GalleryPost } from "@/types/gallery";
import { Post } from "@/types/post";
import useSWRInfinite from "swr/infinite";

/**
 * ギャラリー一覧取得
 * @returns
 */
export const useGalleryPosts = () => {
  const getKey = (pageIndex: number, previousPageData: Post[]) => {
    const url = "/api/gallery/posts";

    if (pageIndex === 0) {
      return url;
    } else {
      // ページネーションを指定
      const untilId = previousPageData[previousPageData.length - 1].id;
      return `${url}?until_id=${untilId}`;
    }
  };

  const { data, error, isLoading, size, setSize } = useSWRInfinite<
    GalleryPost[],
    Error
  >(getKey, galleryFetcher, swrInfiniteConfig);

  const posts = getFlatGalleryPosts(data as GalleryPost[][]);

  return { data: posts, error, isLoading, size, setSize };
};
