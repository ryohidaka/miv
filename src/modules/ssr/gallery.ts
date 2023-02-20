import { Post } from "@/types/post";
import { fetchData } from ".";

/**
 * ギャラリ投稿を取得
 * @returns
 */
export const getGalleryPost = async (id: string) => {
  const path = `gallery/${id}`;
  const res = await fetchData(path);
  const post: Post = await res.json();
  return post;
};
