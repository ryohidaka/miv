import { like, unlike } from "@/modules/like";
import classNames from "classnames";
import { useEffect, useState } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

type Props = {
  postId: string;
  isGallery?: boolean;
  isLiked: boolean;
};

/**
 * 正方形のサムネイル表示
 * @param param0 
 * @returns 
 */
export const LikeButton = ({ postId, isGallery, isLiked }: Props) => {
  const [isActive, setActive] = useState<boolean>(false);

  const toggleLike = () => {
    try {
      if (!isActive) {
        like(postId, isGallery);
      } else {
        unlike(postId, isGallery);
      }
    } finally {
      setActive(!isActive);
    }
  };

  useEffect(() => {
    setActive(isLiked);
  }, [isLiked]);

  return (
    <span
      className={classNames(
        "absolute right-0 bottom-0 z-40 cursor-pointer p-1 text-3xl text-white",
        isActive && "red.400"
      )}
      onClick={toggleLike}
    >
      {isActive ? (
        <AiFillHeart className="fill-rose-500" />
      ) : (
        <>
          <AiOutlineHeart className="absolute fill-black" />
          <AiFillHeart />
        </>
      )}
    </span>
  );
};
