"use client";

import { newTabState } from "@/atoms/NewTab";
import { CommonImage } from "@/components/Common/Image";
import { Image } from "@/types/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { LikeButton } from "./LikeButton";
import { NumberBadge } from "./NumberBadge";

type Props = {
  url: string;
  image: Image;
  postId: string;
  isLiked: boolean;
  isGallery: boolean;
  length: number;
};

/**
 * タイル表示
 * @returns
 */
export const SquareThumbnail = ({
  postId,
  url,
  image,
  isLiked,
  length,
  isGallery,
}: Props) => {
  // 別タブ遷移設定を取得
  const [newTab] = useRecoilState(newTabState);

  const [isBlur, setBlur] = useState<boolean>(false);

  useEffect(() => {
    setBlur(image.isSensitive as boolean);
  }, [image]);

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-none md:rounded-xl">
      {/* 画像数表示バッジ */}
      <NumberBadge count={length} />

      <Link
        className="block aspect-square"
        href={url}
        target={newTab ? "_blank" : ""}
        rel={newTab ? "noopener noreferrer" : ""}
      >
        <CommonImage
          image={image}
          className="object-cover"
          thumbnail
          isBlur={isBlur}
        />
      </Link>

      {/* いいねボタン */}
      <LikeButton
        postId={postId}
        isLiked={isLiked}
        isGallery={isGallery}
        className="absolute"
      />
    </div>
  );
};
