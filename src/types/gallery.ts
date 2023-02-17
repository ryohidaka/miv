import { DriveFile, User } from "misskey-js/built/entities";

export type GalleryPost = {
  id: string;
  user: User;
  title: string;
  description: string | null;
  files: DriveFile[];
  likedCount: number;
  isLiked?: boolean;
};

export type GalleryParams = {
  limit: number;
  untilId?: string;
};

export type UserGalleryParams = GalleryParams & {
  userId: string;
};

export type GalleryFavorite = { post: GalleryPost };
