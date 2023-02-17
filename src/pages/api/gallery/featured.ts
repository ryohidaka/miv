import { apiRequest, returnErrorResponse } from "@/modules/api";
import { convertGalleryPosts } from "@/modules/api/gallery";
import { Post } from "@/types/post";
import { NextApiRequest, NextApiResponse } from "next";

const getGalleryFeatured = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const url = "/gallery/featured";
    const datas = await apiRequest(url, req, res);
    const posts: Post[] = convertGalleryPosts(datas);

    res.status(200).json(posts);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getGalleryFeatured;
