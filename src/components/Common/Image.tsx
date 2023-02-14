import { Image as ImageType } from "@/types/image";
import classNames from "classnames";
import Image from "next/image";

type Props = {
  image: ImageType;
  className?: string;
  thumbnail?: boolean;
};

/**
 * 画像表示領域
 * @returns
 */
export const CommonImage = ({ image, className, thumbnail }: Props) => {
  const src = thumbnail ? image.thumbnailUrl || image.url : image.url;
  return (
    <Image
      className={classNames(
        "!relative block h-full w-full object-contain",
        className
      )}
      key={image.id}
      src={src}
      alt={image.id}
      fill
      objectPosition="center"
      quality={100}
      unoptimized
      placeholder={image.blurhash ? "blur" : "empty"}
      blurDataURL={image.blurhash}
    />
  );
};
