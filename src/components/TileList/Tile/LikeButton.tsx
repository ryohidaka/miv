import { like, unlike } from "@/modules/like";
import { Post } from "@/types/post";
import classNames from "classnames";
import { useEffect, useState } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

type Props = {
  post: Post;
  isGallery?: boolean;
};

/**
 * いいねボタン
 * @returns
 */
export const LikeButton = ({ post, isGallery }: Props) => {
  const [isLiked, setLiked] = useState<boolean>(false);

  const toggleLike = () => {
    try {
      if (!isLiked) {
        like(post.id, isGallery);
      } else {
        unlike(post.id, isGallery);
      }
    } finally {
      setLiked(!isLiked);
    }
  };

  useEffect(() => {
    setLiked(post.isLiked as boolean);
  }, [post]);

  return (
    <span
      className={classNames(
        "absolute right-0 bottom-0 z-40 cursor-pointer p-1 text-3xl text-white",
        isLiked && "red.400"
      )}
      onClick={toggleLike}
    >
      {isLiked ? (
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
