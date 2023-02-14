import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";
import { NoteParams, NotePost } from "@/types/note";
import { convertNotePost, NOTE_LIMIT } from "@/modules/api/note";
import { Post } from "@/types/post";

/**
 * ソーシャルタイムライン取得
 *
 * @see https://misskey-hub.net/docs/api/endpoints/notes/hybrid-timeline.html
 * @param req
 * @param res
 */
const getSocialTimeline = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = "/notes/hybrid-timeline";
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

    const datas = await apiRequest(url, req, res, params);

    const posts: Post[] = datas.map((data: NotePost) => {
      return convertNotePost(data);
    });

    res.status(200).json(posts);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getSocialTimeline;
