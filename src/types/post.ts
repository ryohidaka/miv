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
  source?: string;
};

export type PostParams = {
  id: string;
};

export type PostState = {
  isFavorited: boolean;
};
