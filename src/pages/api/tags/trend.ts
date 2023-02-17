import { apiRequest, returnErrorResponse } from "@/modules/api";
import { Hashtag } from "@/types/tag";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * トレンドにあるハッシュタグを取得
 * @param req
 * @param res
 */
const getNotesByTag = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = "/hashtags/trend";

    const data = await apiRequest(url, req, res);

    const tags: string[] = data?.map((trend: Hashtag) => trend.tag);

    res.status(200).json(tags);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getNotesByTag;
