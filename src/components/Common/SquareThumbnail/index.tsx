import Link from "next/link";
import { useRecoilState } from "recoil";
import { newTabState } from "@/atoms/NewTab";
import { CommonImage } from "@/components/Common/Image";
import { LikeButton } from "./LikeButton";
import { NumberBadge } from "./NumberBadge";
import { Image } from "@/types/image";

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

  return (
    <div className="relative aspect-square w-full overflow-hidden">
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
          className="rounded-none object-cover md:rounded-xl"
          thumbnail
        />
      </Link>

      {/* いいねボタン */}
      <LikeButton postId={postId} isLiked={isLiked} isGallery={isGallery} />
    </div>
  );
};
