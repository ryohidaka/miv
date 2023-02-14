import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";
import { Post } from "@/types/post";
import { convertGalleryPosts } from "@/modules/api/gallery";

const getGalleryFeatured = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const url = "/gallery/popular";
    const datas = await apiRequest(url, req, res);
    const posts: Post[] = convertGalleryPosts(datas);

    res.status(200).json(posts);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getGalleryFeatured;
