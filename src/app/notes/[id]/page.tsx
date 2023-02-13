"use client";

import { ViewerLayout } from "@/components/Viewer/Layout";
import { User } from "@/types/user";
import { Author } from "@/components/Posts/Author";
import { Content } from "@/components/Posts/Content";
import { useNote } from "@/hooks/notes";
import { usePostId } from "@/hooks/post";
import { PostProps } from "@/types/post";

/**
 * ノート個別表示
 * @returns
 */
export default function ShowNoteImage({ params }: PostProps) {
  // 投稿IDを取得
  const postId = usePostId(params);

  // 投稿を取得
  const { data, error, isLoading } = useNote(postId);

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
