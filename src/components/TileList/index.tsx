import { Posts } from "@/types/post";
import { SimpleGrid } from "@chakra-ui/react";
import { Tile } from "./Tile";

type Props = {
  posts: Posts;
};

/**
 * タイルリスト
 * @returns
 */
export const TileList = ({ posts }: Props) => {
  return (
    <SimpleGrid
      columns={[2, 2, 3, 6, 6]}
      columnGap={[0.5, 1, 1, 6, 6]}
      rowGap={[0.5, 1, 6]}
    >
      {posts.map((post) => (
        <Tile key={post.id} post={post} />
      ))}
    </SimpleGrid>
  );
};
