import { GalleryPost } from "@/types/gallery";
import { Post, Posts } from "@/types/post";
import { SWRInfiniteConfiguration } from "swr/infinite";

// タイムライン取得処理
export const fetcher = (url: string): Promise<Posts> => {
  return fetch(url).then((res) => {
    // エラー発生時
    if (!res.ok) {
      throw new Error("Something went wrong with the request");
    }
    return res.json();
  });
};

/**
 * ギャラリー投稿取得処理
 * @param url
 * @returns
 */
export const galleryFetcher = (url: string): Promise<GalleryPost[]> => {
  return fetch(url).then((res) => {
    // エラー発生時
    if (!res.ok) {
      throw new Error("Something went wrong with the request");
    }
    return res.json();
  });
};

// 投稿取得処理
export const postFetcher = (url: string): Promise<Post> => {
  return fetch(url).then((res) => {
    // エラー発生時
    if (!res.ok) {
      throw new Error("Something went wrong with the request");
    }
    return res.json();
  });
};

/**
 * 投稿の配列を平坦化して返却する
 * @param data
 * @returns
 */
export const getFlatPosts = (data: Posts[]): Posts => {
  const flatPosts = data
    ? data.filter((data) => typeof data !== "undefined").flat()
    : [];

  return flatPosts;
};

/**
 * ギャラリーの投稿の配列を平坦化して返却する
 * @param data
 * @returns
 */
export const getFlatGalleryPosts = (data: GalleryPost[][]): Post[] => {
  const flatDatas = data
    ? data.filter((data) => typeof data !== "undefined").flat()
    : [];

  const posts: Post[] = flatDatas
    .filter((data) => data.files.length > 0)
    .map((post) => {
      return {
        id: post.id,
        images: post.files.map((file) => {
          return { id: file.id, url: file.url };
        }),
        user: {
          id: post.user.id,
          name: post.user.name,
          image_url: post.user.avatarUrl,
        },
        text: `${post.title} ${post.description}`,
      };
    });

  return posts;
};

/**
 * 先頭のみ大文字にして返却する
 * @param str
 * @returns
 */
export const capitalize = (str: string) => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
};

export const swrInfiniteConfig: SWRInfiniteConfiguration = {
  revalidateFirstPage: false,
  revalidateAll: false,
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  keepPreviousData: true,
  shouldRetryOnError: false,
};
