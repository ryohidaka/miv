import { NotePost } from "@/types/note";
import { Post } from "@/types/post";
import { convertImages } from "./image";
import { convertUser } from "./user";

export const NOTE_LIMIT = 40;


/**
 * ノートの配列をPost配列に変換し返却する
 * @param post
 * @returns
 */
export const convertNotePosts = (datas: NotePost[]): Post[] => {
  return datas
    .filter((data: NotePost) => data.files.length > 0)
    .map((data: NotePost) => {
      return convertNotePost(data);
    });
};


/**
 * ノートの投稿データをPost形式に変換し返却する
 * @param post
 * @returns
 */
export const convertNotePost = (post: NotePost): Post => {
  return {
    id: post.id,
    images: convertImages(post.files),
    user: convertUser(post.user),
    text: post.text || "",
    description: post.text || "",
    tags: post.tags || [],
  };
};
