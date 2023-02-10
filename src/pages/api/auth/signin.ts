import { NextApiRequest, NextApiResponse } from "next";
import { returnErrorResponse } from "@/modules/api";
import { v4 as uuidv4 } from "uuid";
import { APP_NAME } from "@/modules/const";

export const baseUrl = "https://misskey.io";

/**
 * サインイン
 */
const signin = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const host = req.query["host"] as string;
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
