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
  tags?: string[];
};

export type Posts = Post[];

export type PostParams = {
  id: string;
};
