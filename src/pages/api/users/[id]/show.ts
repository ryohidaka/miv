import { NextApiRequest, NextApiResponse } from "next";
import { apiRequest, returnErrorResponse } from "@/modules/api";
import { User, UserParams } from "@/types/user";
import { convertUserDetailed } from "@/modules/api/user";

/**
 * ユーザ情報を取得
 *
 * @see https://misskey-hub.net/docs/api/endpoints/users/show.html
 * @param req
 * @param res
 */
const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    const url = "/users/show";

    let params: UserParams = {
      userId: id as string,
    };

    const data = await apiRequest(url, req, res, params);

    const user: User = convertUserDetailed(data);

    res.status(200).json(user);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getUser;
