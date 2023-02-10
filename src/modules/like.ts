const baseUrl = "/api/like";
const errorMessage = "Something went wrong with the request";

/**
 * いいね登録
 * @param postId
 */
export const like = (postId: string) => {
  const url = `${baseUrl}/like?id=${postId}`;

  fetch(url).then((res) => {
    // エラー発生時
    if (!res.ok) {
      throw new Error(errorMessage);
    }
  });
};

/**
 * いいね解除
 * @param postId
 */
export const unlike = (postId: string) => {
  const url = `${baseUrl}/unlike?id=${postId}`;

  fetch(url).then((res) => {
    // エラー発生時
    if (!res.ok) {
      throw new Error(errorMessage);
    }
  });
};
