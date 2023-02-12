import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";

const getGalleryFeatured = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const url = "/api/gallery/featured";

    const posts = await apiRequest(url, req, res);

    res.status(200).json(posts);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getGalleryFeatured;
