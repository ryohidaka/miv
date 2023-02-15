import { useRecoilState } from "recoil";
import { scrollState } from "@/atoms/Scroll";
import { Post } from "@/types/post";
import { SquareThumbnail } from "../Common/SquareThumbnail";
import { Author } from "@/components/Common/Author";

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
      <div className="hidden py-1 md:block">
        {/* 本文 */}
        <p className="mb-1 h-5 max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {post.text}
        </p>

        {/* 投稿者情報 */}
        <Author user={post.user} imageSize={24} />
      </div>
    </article>
  );
};
