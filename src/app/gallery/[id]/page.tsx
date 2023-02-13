"use client";

import { useEffect, useState } from "react";
import { ViewerLayout } from "@/components/Viewer/Layout";
import { User } from "@/types/user";
import { Author } from "@/components/Posts/Author";
import { Content } from "@/components/Posts/Content";
import { useGalleryPost } from "@/hooks/gallery";

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

  return (
    <ViewerLayout isLoading={isLoading} error={error}>
      <div className="flex flex-wrap">
        <article className="grid w-full grid-cols-1 md:w-3/4">
          {data && <Content post={data} />}
        </article>
        <aside className="w-full md:w-1/4">
          <Author user={data?.user as User} />
        </aside>
      </div>
    </ViewerLayout>
  );
}
