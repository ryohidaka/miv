import { NotePost } from "@/types/note";
import { Post, PostStatus } from "@/types/post";
import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest } from ".";
import { convertImages } from "./image";
import { convertUser } from "./user";

/**
 * ノートの配列をPost配列に変換し返却する
 * @param post
 * @returns
 */
export const convertNotePosts = async (
  datas: NotePost[],
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Post[]> => {
  const posts = await Promise.all(
    datas
      .filter((data: NotePost) => data.files.length > 0)
      .map(async (data: NotePost) => convertNotePost(data, req, res))
  );

  return posts;
};

/**
 * ノートの投稿データをPost形式に変換し返却する
 * @param post
 * @returns
 */
export const convertNotePost = async (
  post: NotePost,
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Post> => {
  const params = {
    noteId: post.id,
  };

  const statusUrl = "/notes/state";
  const status: PostStatus = await apiRequest(statusUrl, req, res, params);

  return {
    id: post.id,
    images: convertImages(post.files),
    user: convertUser(post.user),
    text: post.text || "",
    description: post.text || "",
    tags: post.tags || [],
    isLiked: status.isFavorited,
  };
};
