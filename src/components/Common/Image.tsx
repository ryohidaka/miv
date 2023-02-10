import { Image as ImageType } from "@/types/image";
import classNames from "classnames";
import Image from "next/image";

type Props = {
  image: ImageType;
  className?: string;
};

/**
 * 画像表示領域
 * @returns
 */
export const CommonImage = ({ image, className }: Props) => {
  return (
    <Image
      className={classNames(
        "!relative block h-full w-full object-contain",
        className
      )}
      key={image.id}
      src={image.url}
      alt={image.id}
      fill
      objectPosition="center"
      quality={100}
      unoptimized
      placeholder="empty"
    />
  );
};
