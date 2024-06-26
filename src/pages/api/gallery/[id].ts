import { apiRequest, returnErrorResponse } from "@/modules/api";
import { convertGalleryPost } from "@/modules/api/gallery";
import { Post } from "@/types/post";
import { getCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";

const getGalleryPost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    const url = "/gallery/posts/show";

    const params = {
      postId: id,
    };

    const data = await apiRequest(url, req, res, params);
    const host = getCookie("host", { req, res }) as string;

    const post: Post = convertGalleryPost(data, host);

    res.status(200).json(post);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getGalleryPost;
