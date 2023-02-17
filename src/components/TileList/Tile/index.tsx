import { scrollState } from "@/atoms/Scroll";
import { SquareThumbnail } from "@/components/Common/SquareThumbnail";
import { Post } from "@/types/post";
import { useRecoilState } from "recoil";
import { PostDetail } from "./PostDetail";

type Props = {
  post: Post;
  isGallery?: boolean;
  hideUser?: boolean;
};

/**
 * タイル表示
 * @returns
 */
export const Tile = ({ post, isGallery, hideUser }: Props) => {
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
      <PostDetail text={post.text} user={post.user} hideUser={hideUser} />
    </article>
  );
};
