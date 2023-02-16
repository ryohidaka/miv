import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";
import { SearchNoteParams } from "@/types/note";
import { convertNotePosts } from "@/modules/api/note";
import { Post } from "@/types/post";

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

    const url = "/notes/search";
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

    const datas = await apiRequest(url, req, res, params);
    const posts: Post[] = await convertNotePosts(datas, req, res);

    res.status(200).json(posts);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default searchNotes;
