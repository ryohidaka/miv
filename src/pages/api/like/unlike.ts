import { NextApiRequest, NextApiResponse } from "next";
import { returnErrorResponse } from "@/modules/api";

/**
 * いいね解除
 */
const unlike = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // 投稿IDを取得
    const postId = req.query["id"] as string;
    console.log(`Unlike post: ${postId}`);

    res.status(200);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default unlike;
