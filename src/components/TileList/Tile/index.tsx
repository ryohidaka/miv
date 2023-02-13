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

  // 投稿表示画面へのリンクを作成
  const id = post.id;
  const url = `/posts/${id}`;

  const [_scrollPosition, setScrollPosition] = useRecoilState(scrollState);

  const handleClick = () => {
    setScrollPosition(window.pageYOffset);
  };

  // 別タブ遷移設定を取得
  const [newTab] = useRecoilState(newTabState);

  return (
    <article className="block" id={post.id} onClick={handleClick}>
      <div className="relative aspect-square w-full overflow-hidden">
        {/* 画像数表示バッジ */}
        <NumberBadge count={length} />

        <Link
          className="block aspect-square"
          href={url}
          target={newTab ? "_blank" : ""}
          rel={newTab ? "noopener noreferrer" : ""}
        >
          <CommonImage
            image={image}
            className="rounded-none object-cover md:rounded-xl"
          />
        </Link>

        {/* いいねボタン */}
        <LikeButton postId={post.id} />
      </div>

      {/* 詳細表示 */}
      <div className="hidden md:block">
        {/* 本文 */}
        <PostText text={post.text} />

        {/* 投稿者情報 */}
        <Author user={post.user} />
      </div>
    </article>
  );
};
