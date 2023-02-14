import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";
import { convertNotePost } from "@/modules/api/note";
import { Post } from "@/types/post";

const getNotePost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    const url = "/notes/show";

    const params = {
      noteId: id,
    };

    const data = await apiRequest(url, req, res, params);

    const post: Post = convertNotePost(data);

    res.status(200).json(post);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getNotePost;
