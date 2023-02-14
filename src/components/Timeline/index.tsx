import { Post } from "@/types/post";
import { PostImages } from "./Post";

type Props = {
  posts?: Post[];
};

/**
 * タイムライン表示
 * @returns
 */
export const Timeline = ({ posts }: Props) => {
  return (
    <div className="container mx-auto max-w-2xl px-0">
      {posts?.map((post) => (
        <PostImages key={post.id} post={post} />
      ))}
    </div>
  );
};
