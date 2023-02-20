import { apiRequest, returnErrorResponse } from "@/modules/api";
import { Hashtag } from "@/types/tag";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * 使用率の高いハッシュタグを取得
 * @param req
 * @param res
 */
const getTagsByLists = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = "/hashtags/list";

    const params = {
      sort: "+attachedLocalUsers",
    };

    const data = await apiRequest(url, req, res, params);

    const tags: string[] = data?.map((trend: Hashtag) => trend.tag);

    res.status(200).json(tags);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getTagsByLists;
