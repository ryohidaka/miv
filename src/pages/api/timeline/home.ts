import { NextApiRequest, NextApiResponse } from "next";
import { returnErrorResponse } from "@/modules/api";
import { POSTS } from "@/modules/dummy/post";

/**
 * ホームタイムライン取得
 */
const getHomeTimeline = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(POSTS);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getHomeTimeline;
