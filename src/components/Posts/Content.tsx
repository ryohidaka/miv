import { Post } from "@/types/post";
import { useState } from "react";
import { CommonImage } from "../Common/Image";
import { NumberBadge } from "../TileList/Tile/NumberBadge";

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

  return (
    <>
      <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
        {!isOpen ? (
          <div className="relative grid place-items-center">
            <CommonImage
              key={topImage.id}
              image={topImage}
              className="aspect-video object-cover"
            />
            <NumberBadge count={images.length} />

            <button
              className="light-btn absolute bottom-3 z-40 mx-auto !rounded-full"
              onClick={() => setOpen(true)}
            >
              すべて見る
            </button>
          </div>
        ) : (
          <div className="relative grid grid-cols-1 gap-1 md:gap-10">
            {images.map((image) => {
              return <CommonImage key={image.id} image={image} />;
            })}
          </div>
        )}
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post?.title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {post?.description}
          </p>
        </div>
      </div>
    </>
  );
};
