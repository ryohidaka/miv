import { Image } from "./image";
import { User } from "./user";

export type Post = {
  id: string;
  images: Image[];
  user: User;
  text: string;
};

export type Posts = Post[];
