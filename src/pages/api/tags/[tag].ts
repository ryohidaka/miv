import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";
import { NOTE_LIMIT } from "@/modules/client/note";

/**
 * ハッシュタグで検索する
 * @param req
 * @param res
 */
const getNotesByTag = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { tag } = req.query;

    const url = "/api/notes/search-by-tag";

    const params = {
      tag: tag,
      reply: false,
      renote: false,
      withFiles: true,
      poll: false,
      limit: NOTE_LIMIT,
    };

    const post = await apiRequest(url, req, res, params);

    res.status(200).json(post);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getNotesByTag;
