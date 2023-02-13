import { Image } from "./image";
import { User } from "./user";

export type Post = {
  id: string;
  images: Image[];
  user: User;
  text: string;
  title?: string;
  description?: string | null;
  isLiked?: boolean;
  likedCount?: number;
};

export type Posts = Post[];

export type PostProps = {
  params: PostParams;
};

export type PostParams = {
  id: string;
};
