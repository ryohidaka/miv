import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";

/**
 * いいね解除
 */
const unlike = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const url = "/api/notes/favorites/delete";

    const params = {
      noteId: id,
    };

    await apiRequest(url, req, res, params);

    res.status(200);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default unlike;
