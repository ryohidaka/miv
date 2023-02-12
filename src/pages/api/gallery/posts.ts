import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";
import { GalleryParams } from "@/types/gallery";

const getGalleryPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = "/api/gallery/posts";
    let params: GalleryParams = {
      limit: 20,
    };

    const untilId = req.query["until_id"] as string;

    if (untilId) {
      params = {
        ...params,
        untilId: untilId,
      };
    }

    const posts = await apiRequest(url, req, res, params);

    res.status(200).json(posts);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getGalleryPosts;
