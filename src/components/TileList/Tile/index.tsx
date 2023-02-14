import { useRecoilState } from "recoil";
import { scrollState } from "@/atoms/Scroll";
import { Author } from "./Author";
import { PostText } from "./PostText";
import { Post } from "@/types/post";
import { SquareThumbnail } from "../../Common/SquareThumbnail";

type Props = {
  post: Post;
  isGallery?: boolean;
};

/**
 * タイル表示
 * @returns
 */
export const Tile = ({ post, isGallery }: Props) => {
  const image = post.images[0];
  const length = post.images.length;

  // 投稿表示画面へのリンクを作成
  const id = post.id;
  const url = `/${isGallery ? "gallery" : "notes"}/${id}`;

  const [_scrollPosition, setScrollPosition] = useRecoilState(scrollState);

  const handleClick = () => {
    setScrollPosition(window.pageYOffset);
  };

  return (
    <article id={post.id} onClick={handleClick}>
      <SquareThumbnail
        url={url}
        image={image}
        postId={post.id}
        isLiked={post.isLiked as boolean}
        isGallery={isGallery as boolean}
        length={length}
      />

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
