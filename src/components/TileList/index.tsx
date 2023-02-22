import { useFavoritedNotes } from "@/hooks/post";
import { Post } from "@/types/post";
import { Tile } from "./Tile";

type Props = {
  posts?: Post[];
  isGallery?: boolean;
  hideUser?: boolean;
};

/**
 * タイルリスト
 * @returns
 */
export const TileList = ({ posts, isGallery, hideUser }: Props) => {
  const favoriteNotes = useFavoritedNotes();
  return (
    <div className="grid grid-cols-2 gap-0.5 md:grid-cols-3 md:gap-x-1 md:gap-y-1 lg:grid-cols-6 lg:gap-x-6 lg:gap-y-6">
      {posts?.map((post) => {
        post.isLiked = isGallery
          ? post.isLiked
          : favoriteNotes.includes(post.id);
        return (
          <Tile
            key={post.id}
            post={post}
            isGallery={isGallery}
            hideUser={hideUser}
          />
        );
      })}
    </div>
  );
};
