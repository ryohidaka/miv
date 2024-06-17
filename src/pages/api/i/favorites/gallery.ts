import { apiRequest, NOTE_LIMIT, returnErrorResponse } from "@/modules/api";
import { convertGalleryPosts } from "@/modules/api/gallery";
import { GalleryFavorite } from "@/types/gallery";
import { NoteParams } from "@/types/note";
import { Post } from "@/types/post";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * いいねしたギャラリー一覧取得
 *
 * @see https://misskey-hub.net/docs/api/endpoints/i/gallery/likes.html
 * @param req
 * @param res
 */
const getFavoriteGallery = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const url = "/i/gallery/likes";
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
    const favoritePosts = datas.map((data: GalleryFavorite) => data.post);
    const posts: Post[] = convertGalleryPosts(favoritePosts);

    res.status(200).json(posts);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getFavoriteGallery;
