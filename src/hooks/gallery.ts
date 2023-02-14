import { fetcher, postFetcher, swrInfiniteConfig } from "@/modules/swr";
import { Post } from "@/types/post";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

/**
 * 人気の投稿取得
 * @returns
 */
export const useGallery = (url: string) => {
  const { data, error, isLoading } = useSWR<Post[], Error>(url, fetcher);

  const posts = data?.flat();

  return { data: posts, error, isLoading };
};

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
    Post[],
    Error
  >(getKey, fetcher, swrInfiniteConfig);

  const posts = data?.flat();

  return { data: posts, error, isLoading, size, setSize };
};

/**
 * ギャラリー投稿取得
 * @returns
 */
export const useGalleryPost = (postId: string) => {
  const url = `/api/gallery/${postId}`;

  const { data, error, isLoading } = useSWR<Post, Error>(url, postFetcher);

  return { data, error, isLoading };
};
