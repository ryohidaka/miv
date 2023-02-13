import { Post } from "@/types/post";
import { ImageSlider } from "./Slider";

type Props = {
  post: Post;
};

/**
 * 投稿画像表示
 * @returns
 */
export const PostImages = ({ post }: Props) => {
  return <ImageSlider images={post.images} />;
};
