import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";
import { GalleryParams } from "@/types/gallery";
import { Post } from "@/types/post";
import { convertGalleryPosts } from "@/modules/api/gallery";
import { NOTE_LIMIT } from "@/modules/api/note";

const getGalleryPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = "/gallery/posts";

    const limit = req.query["limit"] as string;

    let params: GalleryParams = {
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

export default getGalleryPosts;
