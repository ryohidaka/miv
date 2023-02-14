import { Post } from "@/types/post";
import { Tile } from "./Tile";

type Props = {
  posts?: Post[];
  isGallery?: boolean;
};

/**
 * タイルリスト
 * @returns
 */
export const TileList = ({ posts, isGallery }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-0.5 md:grid-cols-3 md:gap-x-1 md:gap-y-1 lg:grid-cols-6 lg:gap-x-6 lg:gap-y-6">
      {posts?.map((post) => (
        <Tile key={post.id} post={post} isGallery={isGallery} />
      ))}
    </div>
  );
};
