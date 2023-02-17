import { returnErrorResponse } from "@/modules/api";
import { POST } from "@/modules/dummy/post";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * タイムライン取得
 */
const getUserTimeline = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(POST);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getUserTimeline;
