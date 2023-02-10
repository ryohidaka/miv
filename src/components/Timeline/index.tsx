import { Posts } from "@/types/post";
import { Container } from "@chakra-ui/react";
import { PostImages } from "./Post";

type Props = {
  posts: Posts;
};

/**
 * タイムライン表示
 * @returns
 */
export const Timeline = ({ posts }: Props) => {
  return (
    <Container maxW="2xl" px={0}>
      {posts.map((post) => (
        <PostImages key={post.id} post={post} />
      ))}
    </Container>
  );
};
