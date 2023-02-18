import { NotePost } from "@/types/note";
import { Post } from "@/types/post";
import { convertImages } from "./image";
import { convertUser } from "./user";

/**
 * ノートの配列をPost配列に変換し返却する
 * @param post
 * @returns
 */
export const convertNotePosts = async (datas: NotePost[]): Promise<Post[]> => {
  const posts = await Promise.all(
    datas
      .filter((data: NotePost) => data.files.length > 0)
      .map(async (data: NotePost) => convertNotePost(data))
  );

  return posts;
};

/**
 * ノートの投稿データをPost形式に変換し返却する
 * @param post
 * @returns
 */
export const convertNotePost = async (post: NotePost): Promise<Post> => {
  return {
    id: post.id,
    images: convertImages(post.files),
    user: convertUser(post.user),
    text: post.text || "",
    description: post.text || "",
    tags: post.tags || [],
  };
};
