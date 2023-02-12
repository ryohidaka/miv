"use client";

import { useEffect, useState } from "react";
import { CommonImage } from "@/components/Common/Image";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { User } from "@/types/user";
import { Author } from "@/components/Posts/Author";
import { useGalleryPost } from "@/hooks/gallery/post";

type Props = {
  params: {
    id: string;
  };
};

/**
 * ギャラリー個別表示
 * @returns
 */
export default function ShowPostImages({ params }: Props) {
  const [postId, setPostId] = useState<string>("");

  useEffect(() => {
    const postId = params.id;
    setPostId(postId);
  }, [params]);

  // 投稿を取得
  const { data, error, isLoading } = useGalleryPost(postId);

  const images = data?.images;

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <div className="flex flex-wrap">
        <article className="grid w-full grid-cols-1 md:w-3/4">
          {images?.map((image) => {
            return <CommonImage key={image.id} image={image} />;
          })}
          <h1>{data?.title}</h1>
          <p>{data?.description}</p>
        </article>
        <aside className="w-full md:w-1/4">
          <Author user={data?.user as User} />
        </aside>
      </div>
    </ViewerLayout>
  );
}
