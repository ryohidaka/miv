import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";

/**
 * フォロー解除
 */
const unfollow = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const url = "/following/delete";

    const params = {
      userId: id,
    };

    await apiRequest(url, req, res, params);

    res.status(200);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default unfollow;
