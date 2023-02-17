import { apiRequest, NOTE_LIMIT, returnErrorResponse } from "@/modules/api";
import { convertNotePosts } from "@/modules/api/note";
import { NoteFavorite, NoteParams } from "@/types/note";
import { Post } from "@/types/post";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * お気に入りのノート一覧取得
 *
 * @see https://misskey-hub.net/docs/api/endpoints/i/favorites.html
 * @param req
 * @param res
 */
const getFavoriteNotes = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = "/i/favorites";
    const limit = req.query["limit"] as string;

    let params: NoteParams = {
      limit: limit ? parseInt(limit, 10) : NOTE_LIMIT,
    };

    const untilId = req.query["until_id"] as string;

    if (untilId) {
      params = {
        ...params,
        untilId: untilId,
      };
    }

    const datas = await apiRequest(url, req, res, params);
    const favoritePosts = datas.map((data: NoteFavorite) => data.note);
    const posts: Post[] = await convertNotePosts(favoritePosts, req, res);

    res.status(200).json(posts);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getFavoriteNotes;
