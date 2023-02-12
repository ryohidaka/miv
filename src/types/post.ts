import { Image } from "./image";
import { User } from "./user";

export type Post = {
  id: string;
  images: Image[];
  user: User;
  text: string;
  title?: string;
  description?: string;
};

export type Posts = Post[];
