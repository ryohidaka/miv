import { Image } from "@/types/image";
import { DriveFile } from "misskey-js/built/entities";

/**
 * 画像一覧を整形して返却する
 * @param user
 * @returns
 */
export const convertImages = (files: DriveFile[]): Image[] => {
  const images = files.map((file) => {
    const image: Image = {
      id: file.id,
      url: file.url,
      thumbnailUrl: file.thumbnailUrl,
      blurhash: file.blurhash,
      isSensitive: file.isSensitive,
    };
    return image;
  });
  return images;
};
