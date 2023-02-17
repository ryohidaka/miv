const errorMessage = "Something went wrong with the request";

/**
 * フォロー登録
 * @param userId
 */
export const follow = (userId: string) => {
  const url = `/api/follow/${userId}`;

  fetch(url).then((res) => {
    // エラー発生時
    if (!res.ok) {
      throw new Error(errorMessage);
    }
  });
};

/**
 * フォロー解除
 * @param userId
 */
export const unfollow = (userId: string) => {
  const url = `/api/unfollow/${userId}`;

  fetch(url).then((res) => {
    // エラー発生時
    if (!res.ok) {
      throw new Error(errorMessage);
    }
  });
};
