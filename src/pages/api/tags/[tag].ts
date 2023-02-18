import { apiRequest, NOTE_LIMIT, returnErrorResponse } from "@/modules/api";
import { convertNotePosts } from "@/modules/api/note";
import { NoteParams } from "@/types/note";
import { Post } from "@/types/post";
import { NextApiRequest, NextApiResponse } from "next";

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
    const posts: Post[] = await convertNotePosts(datas);

    res.status(200).json(posts);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getNotesByTag;
