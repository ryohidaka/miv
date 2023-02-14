import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";
import { GalleryParams } from "@/types/gallery";
import { convertGalleryPosts } from "@/modules/api/gallery";
import { Post } from "@/types/post";

const getGalleryPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = "/gallery/posts";
    let params: GalleryParams = {
      limit: 40,
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
