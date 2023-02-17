import { apiRequest, NOTE_LIMIT, returnErrorResponse } from "@/modules/api";
import { convertNotePosts } from "@/modules/api/note";
import { NoteParams } from "@/types/note";
import { Post } from "@/types/post";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * グローバルタイムライン取得
 *
 * @see https://misskey-hub.net/docs/api/endpoints/notes/global-timeline.html
 * @param req
 * @param res
 */
const getGlobalTimeline = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = "/notes/global-timeline";
    const limit = req.query["limit"] as string;

    let params: NoteParams = {
      withFiles: true,
      limit: limit ? parseInt(limit, 10) : NOTE_LIMIT,
      poll: false,
    };

    const untilId = req.query["until_id"] as string;

    if (untilId) {
      params = {
        ...params,
        untilId: untilId,
      };
    }

    const datas = await apiRequest(url, req, res, params);
    const posts: Post[] = await convertNotePosts(datas, req, res);

    res.status(200).json(posts);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getGlobalTimeline;
