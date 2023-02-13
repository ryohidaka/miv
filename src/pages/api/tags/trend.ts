import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";

/**
 * トレンドにあるハッシュタグを取得
 * @param req
 * @param res
 */
const getNotesByTag = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = "/api/hashtags/trend";

    const tags = await apiRequest(url, req, res);

    res.status(200).json(tags);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getNotesByTag;
