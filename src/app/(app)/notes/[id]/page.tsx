import { PostLayout } from "@/components/Layout/PostLayout";
import { getNotePost } from "@/modules/ssr/notes";
import { PostParams } from "@/types/post";

type Props = {
  params: PostParams;
};

export async function generateMetadata({ params }: Props) {
  const { user } = await getNotePost(params.id);

  return { title: `${user.name} の投稿` };
}

/**
 * ノート個別表示
 * @returns
 */
export default async function ShowNoteImage({ params }: Props) {
  // 投稿を取得
  const post = await getNotePost(params.id);

  return <PostLayout post={post} />;
}
