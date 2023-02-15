import InfiniteScroll from "react-infinite-scroll-component";
import { useScroll } from "@/hooks/scroll";
import { TileList } from "../TileList";
import { Post } from "@/types/post";

type Props = {
  posts?: Post[];
  hasMore: boolean;
  next: () => void;
  isGallery?: boolean;
};

/**
 * 画像一覧表示
 * @returns
 */
export const Viewer = ({ posts, hasMore, next, isGallery }: Props) => {
  const length = posts ? posts.length : 0;

  useScroll(length > 0);

  return (
    <InfiniteScroll
      dataLength={length}
      next={next}
      loader={<></>}
      hasMore={hasMore}
      className="overflow-y-hidden md:py-6"
    >
      <TileList posts={posts} isGallery={isGallery} />
    </InfiniteScroll>
  );
};
