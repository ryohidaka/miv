import { like, unlike } from "@/modules/like";
import { Icon, Text } from "@chakra-ui/react";
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
    <Text
      cursor="pointer"
      onClick={toggleLike}
      zIndex="docked"
      position="absolute"
      bottom={0}
      right={0}
      key={postId}
    >
      <Icon
        as={isLiked ? AiFillHeart : AiOutlineHeart}
        mr="2.5"
        fontSize="30px"
        color={isLiked ? "red.400" : "white"}
      />
    </Text>
  );
};
