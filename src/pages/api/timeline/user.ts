import { NextApiRequest, NextApiResponse } from "next";
import { returnErrorResponse } from "@/modules/api";
import { POSTS } from "@/modules/dummy/post";

/**
 * ユーザタイムライン取得
 */
const getUserTimeline = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(POSTS);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getUserTimeline;
