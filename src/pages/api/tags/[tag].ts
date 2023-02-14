import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";
import { NoteParams } from "@/types/note";
import { convertNotePosts, NOTE_LIMIT } from "@/modules/api/note";
import { Post } from "@/types/post";

/**
 * ハッシュタグで検索する
 * @param req
 * @param res
 */
const getNotesByTag = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { tag } = req.query;

    const url = "/notes/search-by-tag";

    let params: NoteParams = {
      tag: tag as string,
      reply: false,
      renote: false,
      withFiles: true,
      poll: false,
      limit: NOTE_LIMIT,
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

export default getNotesByTag;
