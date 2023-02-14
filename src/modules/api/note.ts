import { NotePost } from "@/types/note";
import { Post } from "@/types/post";
import { convertImages, convertUser } from "../client";

export const NOTE_LIMIT = 40;

/**
 * ギャラリーの投稿データをPost形式に変換し返却する
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
