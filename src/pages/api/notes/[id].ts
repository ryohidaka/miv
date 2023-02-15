import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";
import { convertNotePost } from "@/modules/api/note";
import { Post, PostStatus } from "@/types/post";

const getNotePost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    const params = {
      noteId: id,
    };

    const url = "/notes/show";
    const data = await apiRequest(url, req, res, params);

    const statusUrl = "/notes/state";
    const status: PostStatus = await apiRequest(statusUrl, req, res, params);
    console.log(status);

    const post: Post = convertNotePost(data);
    post.isLiked = status.isFavorited;

    res.status(200).json(post);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getNotePost;
