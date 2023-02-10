import { Box, useBreakpointValue, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { newTabState } from "@/atoms/NewTab";
import { scrollState } from "@/atoms/Scroll";
import { CommonImage } from "@/components/Common/Image";
import { Author } from "./Author";
import { LikeButton } from "./LikeButton";
import { NumberBadge } from "./NumberBadge";
import { PostText } from "./PostText";
import { Post } from "@/types/post";

type Props = {
  post: Post;
};

/**
 * タイル表示
 * @returns
 */
export const Tile = ({ post }: Props) => {
  const image = post.images[0];
  const length = post.images.length;

  // ツイート表示画面へのリンクを作成
  const id = post.id;
  const url = `/posts/${id}`;

  // 枚数表示バッジフラグ
  const hasBadge = length > 1;

  const [_scrollPosition, setScrollPosition] = useRecoilState(scrollState);

  const handleClick = () => {
    setScrollPosition(window.pageYOffset);
  };

  // 別タブ遷移設定を取得
  const [newTab] = useRecoilState(newTabState);

  // 表示条件
  const shoDetail = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <VStack
      key={post.id}
      id={post.id}
      onClick={handleClick}
      overflow="hidden"
      as="article"
    >
      <Box
        position="relative"
        as="main"
        width="100%"
        sx={{ aspectRatio: "1/1" }}
      >
        {/* 画像数表示バッジ */}
        {hasBadge && <NumberBadge count={length} />}

        <Link
          href={url}
          target={newTab ? "_blank" : ""}
          rel={newTab ? "noopener noreferrer" : ""}
        >
          <CommonImage image={image} className="tileImage" />
        </Link>

        {/* いいねボタン */}
        <LikeButton postId={post.id} />
      </Box>

      {/* 詳細表示 */}
      {shoDetail && (
        <>
          {/* 本文 */}
          <PostText text={post.text} />

          {/* 投稿者情報 */}
          <Author user={post.user} />
        </>
      )}
    </VStack>
  );
};
