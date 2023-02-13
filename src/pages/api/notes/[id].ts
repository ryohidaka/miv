import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";

const getNotePost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    const url = "/api/notes/show";

    const params = {
      noteId: id,
    };

    console.log(params);

    const post = await apiRequest(url, req, res, params);

    res.status(200).json(post);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getNotePost;
