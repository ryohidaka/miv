import { NextApiRequest, NextApiResponse } from "next";
import { returnErrorResponse } from "@/modules/api";
import { getCookie, setCookie } from "cookies-next";

type Result = {
  ok: boolean;
  token?: string;
};

/**
 * コールバック
 */
const callback = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = req.query["session"] as string;
    const host = getCookie("host", { req, res });
    const url = `https://${host}/api/miauth/${session}/check`;

    const response = await fetch(url, {
      method: "POST",
      redirect: "follow",
    });

    const data: Result = await response.json();

    if (!data.ok) {
      throw new Error("false");
    }

    setCookie("token", data.token, { req, res });

    res.redirect("/");
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default callback;
