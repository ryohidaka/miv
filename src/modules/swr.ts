import { GalleryPost } from "@/types/gallery";
import { NotePost } from "@/types/note";
import { Posts } from "@/types/post";
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

/**
 * ノート一覧取得処理
 * @param url
 * @returns
 */
export const noteFetcher = (url: string): Promise<NotePost[]> => {
  return fetch(url).then((res) => {
    // エラー発生時
    if (!res.ok) {
      throw new Error(fetchError);
    }
    return res.json();
  });
};

// 投稿取得処理
export const postFetcher = (url: string): Promise<GalleryPost> => {
  return fetch(url).then((res) => {
    // エラー発生時
    if (!res.ok) {
      throw new Error(fetchError);
    }
    return res.json();
  });
};
