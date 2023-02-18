import { apiRequest, NOTE_LIMIT, returnErrorResponse } from "@/modules/api";
import { convertNotePosts } from "@/modules/api/note";
import { UserNoteParams } from "@/types/note";
import { Post } from "@/types/post";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * ユーザのノート一覧を取得
 *
 * @see https://misskey-hub.net/docs/api/endpoints/users/notes.html
 * @param req
 * @param res
 */
const getUserNotes = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    const url = "/users/notes";
    const limit = req.query["limit"] as string;

    let params: UserNoteParams = {
      userId: id as string,
      includeReplies: false,
      limit: limit ? parseInt(limit, 10) : NOTE_LIMIT,
      includeMyRenotes: false,
      withFiles: true,
      excludeNsfw: true,
    };

    const untilId = req.query["until_id"] as string;

    if (untilId) {
      params = {
        ...params,
        untilId: untilId,
      };
    }

    const datas = await apiRequest(url, req, res, params);
    const posts: Post[] = await convertNotePosts(datas);

    res.status(200).json(posts);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getUserNotes;
