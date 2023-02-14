import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";
import { NoteParams } from "@/types/note";
import { convertNotePosts, NOTE_LIMIT } from "@/modules/api/note";
import { Post } from "@/types/post";

/**
 * ローカルタイムライン取得
 *
 * @see https://misskey-hub.net/docs/api/endpoints/notes/local-timeline.html
 * @param req
 * @param res
 */
const getLocalTimeline = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = "/notes/local-timeline";
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
    const posts: Post[] = convertNotePosts(datas);

    res.status(200).json(posts);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getLocalTimeline;
