const errorMessage = "Something went wrong with the request";

/**
 * いいね登録
 * @param postId
 * @param isGallery
 */
export const like = (postId: string, isGallery?: boolean) => {
  const url = `/api/${isGallery ? "gallery" : "notes"}/like/${postId}`;

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
export const unlike = async (postId: string, isGallery?: boolean) => {
  const url = `/api/${isGallery ? "gallery" : "notes"}/unlike/${postId}`;

  const res = await fetch(url);

  // エラー発生時
  if (!res.ok) {
    throw new Error(errorMessage);
  }
};
