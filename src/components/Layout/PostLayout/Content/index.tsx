"use client";

import { CommonImage } from "@/components/Common/Image";
import { NumberBadge } from "@/components/Common/SquareThumbnail/NumberBadge";
import { Post } from "@/types/post";
import { useEffect, useState } from "react";
import { ContentDetail } from "./ContentDetail";

type Props = {
  post: Post;
};

/**
 * コンテンツ
 * @returns
 */
export const Content = ({ post }: Props) => {
  const images = post.images;

  const [isOpen, setOpen] = useState<boolean>(false);

  const topImage = images[0];

  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!hasMultiple) {
      setOpen(true);
    }
  }, [hasMultiple]);

  return (
    <>
      <div className="overflow-hidden bg-white shadow dark:bg-gray-800 md:rounded-lg">
        {!isOpen ? (
          <div className="relative grid place-items-center">
            <CommonImage
              key={topImage.id}
              image={topImage}
              className="aspect-video object-cover object-top"
              thumbnail
            />
            <NumberBadge count={images.length} />

            {hasMultiple && (
              <button
                className="light-btn absolute bottom-3 z-40 mx-auto !rounded-full"
                onClick={() => setOpen(true)}
              >
                すべて見る
              </button>
            )}
          </div>
        ) : (
          <div className="relative grid grid-cols-1 gap-1 md:gap-10">
            {images.map((image) => {
              return <CommonImage key={image.id} image={image} />;
            })}
          </div>
        )}

        {/* 詳細表示 */}
        <ContentDetail
          postId={post?.id}
          isLiked={post.isLiked as boolean}
          title={post?.title}
          description={post?.description as string}
          tags={post?.tags}
        />
      </div>
    </>
  );
};
