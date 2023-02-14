import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";
import { Post } from "@/types/post";
import { convertNotePost } from "@/modules/api/note";

const getGalleryPost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    const url = "/gallery/posts/show";

    const params = {
      postId: id,
    };

    const data = await apiRequest(url, req, res, params);

    const post: Post = convertNotePost(data);

    res.status(200).json(post);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getGalleryPost;
