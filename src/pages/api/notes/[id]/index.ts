import { apiRequest, returnErrorResponse } from "@/modules/api";
import { convertNotePost } from "@/modules/api/note";
import { Post, PostState } from "@/types/post";
import { NextApiRequest, NextApiResponse } from "next";

const getNotePost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    const params = {
      noteId: id,
    };

    const url = "/notes/show";
    const postRes = await apiRequest(url, req, res, params);
    const post: Post = await convertNotePost(postRes);

    const stateUrl = "/notes/state";
    const stateRes: PostState = await apiRequest(stateUrl, req, res, params);

    post.isLiked = stateRes.isFavorited;

    res.status(200).json(post);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getNotePost;
