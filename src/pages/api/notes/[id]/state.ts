import { apiRequest, returnErrorResponse } from "@/modules/api";
import { PostState } from "@/types/post";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * ノートの詳細を取得
 * @see https://misskey-hub.net/docs/api/endpoints/notes/state.html
 * @param req
 * @param res
 */
const getNoteState = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    const params = {
      noteId: id,
    };

    const url = "/notes/state";
    const state: PostState = await apiRequest(url, req, res, params);

    res.status(200).json(state);
  } catch (error) {
    returnErrorResponse(res, error);
  }
};

export default getNoteState;
