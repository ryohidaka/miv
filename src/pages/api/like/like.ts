import { NextApiRequest, NextApiResponse } from "next";
import { returnErrorResponse } from "@/modules/api";

/**
 * いいね登録
 */
const like = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // ツイートIDを取得
    const postId = req.query["id"] as string;
    console.log(`Like post: ${postId}`);

    res.status(200);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default like;
