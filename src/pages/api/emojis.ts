import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";
import { Emoji } from "@/types/emoji";

/**
 * カスタム絵文字一覧取得
 * @param req
 * @param res
 */
const getEmojis = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = "/emojis";
    const datas = await apiRequest(url, req, res);
    const emojis: Emoji[] = datas.emojis;

    res.status(200).json(emojis);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getEmojis;
