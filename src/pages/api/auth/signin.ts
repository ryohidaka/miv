import { NextApiRequest, NextApiResponse } from "next";
import { returnErrorResponse } from "@/modules/api";
import { v4 as uuidv4 } from "uuid";
import { APP_NAME } from "@/modules/const";
import { deleteCookie, setCookie } from "cookies-next";

/**
 * サインイン
 */
const signin = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // 既存のクッキーを削除
    deleteCookie("host", { req, res });
    deleteCookie("token", { req, res });

    // MisskeyのホストURLをクッキーに格納
    const host = req.query["host"] as string;
    setCookie("host", host, { req, res });

    const uuid = uuidv4();
    const appUrl = process.env.NEXT_PUBLIC_APP_URL as string;

    const callbackUrl = `${appUrl}/api/auth/callback`;
    const permission = process.env.PKCE as string;

    const signinUrl = `${host}/miauth/${uuid}?name=${APP_NAME}&callback=${callbackUrl}&permission=${permission}`;

    res.redirect(307, signinUrl);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default signin;
