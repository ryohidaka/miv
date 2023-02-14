import { GalleryPost } from "@/types/gallery";
import { Meta } from "@/types/meta";
import { Post, Posts } from "@/types/post";
import { Hashtag } from "@/types/tag";
import { SWRInfiniteConfiguration } from "swr/infinite";

export const swrInfiniteConfig: SWRInfiniteConfiguration = {
  revalidateFirstPage: false,
  revalidateAll: false,
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  keepPreviousData: true,
  shouldRetryOnError: false,
};

const fetchError = "Something went wrong with the request";

// タイムライン取得処理
export const fetcher = (url: string): Promise<Posts> => {
  return fetch(url).then((res) => {
    // エラー発生時
    if (!res.ok) {
      throw new Error(fetchError);
    }
    return res.json();
  });
};

// 投稿取得処理
export const postFetcher = (url: string): Promise<Post> => {
  return fetch(url).then((res) => {
    // エラー発生時
    if (!res.ok) {
      throw new Error(fetchError);
    }
    return res.json();
  });
};

/**
 * ギャラリー一覧取得処理
 * @param url
 * @returns
 */
export const galleryFetcher = (url: string): Promise<GalleryPost[]> => {
  return fetch(url).then((res) => {
    // エラー発生時
    if (!res.ok) {
      throw new Error(fetchError);
    }
    return res.json();
  });
};

// ハッシュタグ取得処理
export const tagFetcher = (url: string): Promise<Hashtag[]> => {
  return fetch(url).then((res) => {
    // エラー発生時
    if (!res.ok) {
      throw new Error(fetchError);
    }
    return res.json();
  });
};

/**
 * meta情報取得処理
 * @param url
 * @returns
 */
export const metaFetcher = (url: string): Promise<Meta> => {
  return fetch(url).then((res) => {
    // エラー発生時
    if (!res.ok) {
      throw new Error(fetchError);
    }
    return res.json();
  });
};
