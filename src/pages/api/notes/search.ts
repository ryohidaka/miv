import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";
import { SearchNoteParams } from "@/types/note";

/**
 * ノートを検索する
 *
 * @see https://misskey-hub.net/docs/api/endpoints/notes/search.html
 * @param req
 * @param res
 */
const searchNotes = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const query = req.query["q"] as string;

    const url = "/api/notes/search";
    let params: SearchNoteParams = {
      query: query,
      limit: 100,
      withFiles: true,
    };

    const untilId = req.query["until_id"] as string;

    if (untilId) {
      params = {
        ...params,
        untilId: untilId,
      };
    }

    const posts = await apiRequest(url, req, res, params);

    res.status(200).json(posts);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default searchNotes;
