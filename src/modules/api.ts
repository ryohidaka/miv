import { getCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";

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

/**
 * Misskey API 共通リクエスト
 * @param path
 * @param req
 * @param res
 * @returns
 */
export const apiRequest = async (
  path: string,
  req: NextApiRequest,
  res: NextApiResponse,
  params?: object
) => {
  const host = getCookie("host", { req, res });
  const token = getCookie("token", { req, res });

  const url = `https://${host}${path}`;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const baseRaw = { i: token };
  const raw = JSON.stringify({ ...baseRaw, ...params });

  const response = await fetch(url, {
    method: "POST",
    body: raw,
    headers: headers,
    redirect: "follow",
  });

  const data = await response.json();

  return data;
};
