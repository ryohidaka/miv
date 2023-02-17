import { apiRequest, returnErrorResponse } from "@/modules/api";
import { SearchTagsParams } from "@/types/tag";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * ハッシュタグを検索する
 *
 * @see https://misskey-hub.net/docs/api/endpoints/hashtags/search.html
 * @param req
 * @param res
 */
const searchTags = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const query = req.query["q"] as string;
    const url = "/hashtags/search";

    let params: SearchTagsParams = {
      query: query,
    };

    const tags = await apiRequest(url, req, res, params);

    res.status(200).json(tags);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default searchTags;
