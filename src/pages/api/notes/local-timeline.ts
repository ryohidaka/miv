import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";
import { NoteParams } from "@/types/note";
import { NOTE_LIMIT } from "@/modules/client/note";

/**
 * ローカルタイムライン取得
 *
 * @see https://misskey-hub.net/docs/api/endpoints/notes/local-timeline.html
 * @param req
 * @param res
 */
const getLocalTimeline = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = "/api/notes/local-timeline";
    let params: NoteParams = {
      withFiles: true,
      limit: NOTE_LIMIT,
      poll: false,
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

export default getLocalTimeline;
