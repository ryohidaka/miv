import { DriveFile, User } from "misskey-js/built/entities";

export type NotePost = {
  id: string;
  user: User;
  text: string | null;
  files: DriveFile[];
  likedCount: number;
  isLiked?: boolean;
  tags?: string[];
};

export type NoteParams = {
  reply?: boolean;
  renote?: boolean;
  withFiles?: boolean;
  poll?: boolean;
  untilId?: string;
  limit: number;
  tag?: string;
};

export type SearchNoteParams = NoteParams & {
  query: string;
};

export type UserNoteParams = NoteParams & {
  userId: string;
  includeReplies: boolean;
  includeMyRenotes: boolean;
  excludeNsfw: boolean;
};

export type NoteFavorite = { note: NotePost };
