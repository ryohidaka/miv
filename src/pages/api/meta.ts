import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";

/**
 * meta情報取得処理
 * @param req
 * @param res
 */
const getMeta = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = "/meta";
    const meta = await apiRequest(url, req, res);

    res.status(200).json(meta);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getMeta;
