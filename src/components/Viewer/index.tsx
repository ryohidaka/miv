import InfiniteScroll from "react-infinite-scroll-component";
import { useRecoilState } from "recoil";
import { viewModeState } from "@/atoms/ViewMode";
import { useScroll } from "@/hooks/scroll";
import { ViewMode } from "@/modules/const";
import { TileList } from "../TileList";
import { Timeline } from "../Timeline";
import { Posts } from "@/types/post";

type Props = {
  posts: Posts;
  hasMore: boolean;
  next: () => void;
};

/**
 * ツイート画像一覧表示
 * @returns
 */
export const Viewer = ({ posts, hasMore, next }: Props) => {
  const [mode] = useRecoilState(viewModeState);

  useScroll(posts.length > 0);

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={next}
      loader={<></>}
      hasMore={hasMore}
      style={{ overflowY: "hidden" }}
    >
      {mode === ViewMode.TIMELINE ? (
        <Timeline posts={posts} />
      ) : (
        <TileList posts={posts} />
      )}
    </InfiniteScroll>
  );
};
