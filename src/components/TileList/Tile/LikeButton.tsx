import { like, unlike } from "@/modules/like";
import classNames from "classnames";
import { useState } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

type Props = {
  postId: string;
};

/**
 * いいねボタン
 * @returns
 */
export const LikeButton = ({ postId }: Props) => {
  const [isLiked, setLiked] = useState<boolean>(false);

  const toggleLike = () => {
    try {
      if (!isLiked) {
        like(postId);
      } else {
        unlike(postId);
      }
    } finally {
      setLiked(!isLiked);
    }
  };

  return (
    <span
      className={classNames(
        "absolute right-0 bottom-0 z-40 cursor-pointer p-1 text-2xl text-white",
        isLiked && "red.400"
      )}
      onClick={toggleLike}
    >
      {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
    </span>
  );
};
