import { Post } from "@/types/post";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CommonImage } from "../Common/Image";
import { NumberBadge } from "../Common/SquareThumbnail/NumberBadge";

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
      <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
        {!isOpen ? (
          <div className="relative grid place-items-center">
            <CommonImage
              key={topImage.id}
              image={topImage}
              className="aspect-video object-cover"
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
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post?.title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {post?.description}
          </p>

          {/* ハッシュタグ */}
          <ul className="flex flex-wrap gap-3">
            {post?.tags?.map((tag) => (
              <li key={tag}>
                <Link
                  href={`/tags/${tag}`}
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
