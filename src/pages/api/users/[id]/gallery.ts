import { apiRequest, NOTE_LIMIT, returnErrorResponse } from "@/modules/api";
import { convertGalleryPosts } from "@/modules/api/gallery";
import { UserGalleryParams } from "@/types/gallery";
import { Post } from "@/types/post";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * ユーザのギャラリー一覧を取得
 *
 * @see https://misskey-hub.net/docs/api/endpoints/users/gallery/posts.html
 * @param req
 * @param res
 */
const getUserGalleryPosts = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const { id } = req.query;

    const url = "/users/gallery/posts";
    const limit = req.query["limit"] as string;

    let params: UserGalleryParams = {
      userId: id as string,
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
    const posts: Post[] = convertGalleryPosts(datas);

    res.status(200).json(posts);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getUserGalleryPosts;
