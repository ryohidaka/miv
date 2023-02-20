import { Post } from "@/types/post";
import { fetchData } from ".";

/**
 * ノート投稿を取得
 * @returns
 */
export const getNotePost = async (id: string) => {
  const path = `notes/${id}`;
  const res = await fetchData(path);
  const post: Post = await res.json();
  return post;
};
