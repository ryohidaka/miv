import { Posts } from "@/types/post";
import { Tile } from "./Tile";

type Props = {
  posts?: Posts;
};

/**
 * タイルリスト
 * @returns
 */
export const TileList = ({ posts }: Props) => {
  return (
    <div className="grid sm:grid-cols-2 sm:gap-x-0.5 sm:gap-y-0.5 md:grid-cols-3 md:gap-x-1 md:gap-y-1 lg:grid-cols-6 lg:gap-x-6 lg:gap-y-6">
      {posts?.map((post) => (
        <Tile key={post.id} post={post} />
      ))}
    </div>
  );
};
