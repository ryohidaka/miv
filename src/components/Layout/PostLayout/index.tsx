import { Author } from "@/components/Common/Author";
import { FollowButton } from "@/components/Common/FollowButton";
import { StickyTop } from "@/components/Common/StickyTop";
import { Post } from "@/types/post";
import { Content } from "./Content";
import { OpenInInstances } from "./OpenInInstances";

type Props = {
  post: Post;
};

/**
 * 投稿個別ページレイアウト
 * @returns
 */
export const PostLayout = ({ post }: Props) => {
  return (
    <div className="flex flex-wrap">
      {/* メインカラム */}
      <article className="grid w-full grid-cols-1 md:w-3/4 md:py-6">
        <Content post={post} />
      </article>

      {/* サイドカラム */}
      <aside className="w-full md:w-1/4">
        <StickyTop>
          <div className="grid grid-cols-1 gap-3 p-5">
            {/* ユーザ情報 */}
            <Author user={post.user} className="!w-11" />

            {/* フォローボタン */}
            <FollowButton userId={post.user.id} />

            {/* インスタンスで開くボタン */}
            {/* @ts-ignore */}
            {post.source && <OpenInInstances url={post.source} />}
          </div>
        </StickyTop>
      </aside>
    </div>
  );
};
