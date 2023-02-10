"use client";

import { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";
import { CommonImage } from "@/components/Common/Image";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { usePost } from "@/hooks/post";
import { Image as ImageType } from "@/types/image";
import { User } from "@/types/user";
import { Author } from "@/components/Posts/Author";

/**
 * 投稿画像表示画面
 * @returns
 */
export default function ShowPostImages() {
  const params = useSearchParams();

  const [postId, setPostId] = useState<string>("");

  useEffect(() => {
    const postId = params.get("ids") as string;
    setPostId(postId);
  }, [params]);

  // 投稿を取得
  const { data, error, isLoading } = usePost(postId);

  const images: ImageType[] = data ? data.images : [];

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <div className="flex flex-wrap">
        <article className="grid w-full grid-cols-1 md:w-3/4">
          {images &&
            images.map((image) => {
              return <CommonImage key={image.id} image={image} />;
            })}
        </article>
        <aside className="w-full md:w-1/4">
          <Author user={data?.user as User} />
        </aside>
      </div>
    </ViewerLayout>
  );
}
