import { apiRequest, returnErrorResponse } from "@/modules/api";
import { convertNotePosts } from "@/modules/api/note";
import { SearchNoteParams } from "@/types/note";
import { Post } from "@/types/post";
import { NextApiRequest, NextApiResponse } from "next";

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
    const posts: Post[] = await convertNotePosts(datas);

    res.status(200).json(posts);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default searchNotes;
