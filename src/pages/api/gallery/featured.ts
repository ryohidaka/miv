import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";
import { convertGalleryPost } from "@/modules/api/gallery";
import { GalleryPost } from "@/types/gallery";
import { Post } from "@/types/post";

const getGalleryFeatured = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const url = "/api/gallery/featured";
    const datas = await apiRequest(url, req, res);

    const posts: Post[] = datas.map((data: GalleryPost) => {
      return convertGalleryPost(data);
    });

    res.status(200).json(posts);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getGalleryFeatured;
