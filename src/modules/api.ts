import { NextApiResponse } from "next";

/**
 * 共通のエラーを返却する
 * @param res
 * @param error
 */
export const returnErrorResponse = (
  res: NextApiResponse,
  error: Error | unknown
) => {
  res.status(500).json(
    JSON.stringify({
      status: "Error",
      error: error,
    })
  );
};
