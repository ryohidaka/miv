import { Post } from "@/types/post";
import { Author } from "../../Common/Author";
import { StickyTop } from "../../Common/StickyTop";
import { Content } from "./Content";

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
      <aside className="w-full p-5 md:w-1/4">
        <StickyTop>
          <Author user={post.user} className="!w-11" />
        </StickyTop>
      </aside>
    </div>
  );
};
