import { useScroll } from "@/hooks/scroll";
import { Post } from "@/types/post";
import InfiniteScroll from "react-infinite-scroll-component";
import { TileList } from "../TileList";

type Props = {
  posts?: Post[];
  hasMore: boolean;
  next: () => void;
  isGallery?: boolean;
  hideUser?: boolean;
};

/**
 * 画像一覧表示
 * @returns
 */
export const Viewer = ({
  posts,
  hasMore,
  next,
  isGallery,
  hideUser,
}: Props) => {
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
      <TileList posts={posts} isGallery={isGallery} hideUser={hideUser} />
    </InfiniteScroll>
  );
};
