import { Post } from "@/types/post";
import { fetchData } from ".";
import { getUser } from "./user";

/**
 * ギャラリ投稿を取得
 * @returns
 */
export const getGalleryPost = async (id: string) => {
  const path = `gallery/${id}`;
  const res = await fetchData(path);
  const post: Post = await res.json();

  // ユーザのフォローフラグを取得
  const user = await getUser(post.user.id);
  post.user.isFollowing = user.isFollowing;

  return post;
};

/**
 * ギャラリ一覧を取得
 * @param name
 */
export const getGalleryPosts = async (name: string, params?: string) => {
  const path = `gallery/${name}${params || ""}`;
  const res = await fetchData(path);
  const posts: Post[] = await res.json();
  return posts;
};
