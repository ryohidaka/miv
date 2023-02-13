import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";

/**
 * いいね登録
 */
const like = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const url = "/api/gallery/posts/like";

    const params = {
      postId: id,
    };

    await apiRequest(url, req, res, params);

    res.status(200);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default like;
