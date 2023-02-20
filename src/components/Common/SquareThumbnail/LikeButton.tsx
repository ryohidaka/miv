"use client";

import { like, unlike } from "@/modules/like";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

type Props = {
  postId: string;
  isGallery?: boolean;
  isLiked: boolean;
  className?: string;
  isOutline?: boolean;
};

/**
 * いいねボタン
 * @returns
 */
export const LikeButton = ({
  postId,
  isGallery,
  isLiked,
  className,
  isOutline,
}: Props) => {
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
        "right-0 bottom-0 z-40 cursor-pointer p-1 text-3xl text-white",
        isActive && "red.400",
        className
      )}
      onClick={toggleLike}
    >
      {isActive ? (
        <AiFillHeart className="fill-rose-500" />
      ) : (
        <>
          {isOutline ? (
            <AiOutlineHeart className="fill-black dark:fill-white" />
          ) : (
            <>
              <AiOutlineHeart className="absolute fill-black" />
              <AiFillHeart />
            </>
          )}
        </>
      )}
    </span>
  );
};
