import { Post } from "@/types/post";
import { fetchData } from ".";
import { getUser } from "./user";

/**
 * ノート投稿を取得
 * @returns
 */
export const getNotePost = async (id: string) => {
  const path = `notes/${id}`;
  const res = await fetchData(path);
  const post: Post = await res.json();

  // ユーザのフォローフラグを取得
  const user = await getUser(post.user.id);
  post.user.isFollowing = user.isFollowing;

  return post;
};
