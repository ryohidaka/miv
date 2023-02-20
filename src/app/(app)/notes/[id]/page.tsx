import { PostLayout } from "@/components/Layout/PostLayout";
import { getNotePost } from "@/modules/ssr/notes";
import { PostParams } from "@/types/post";

type Props = {
  params: PostParams;
};

/**
 * ノート個別表示
 * @returns
 */
export default async function ShowNoteImage({ params }: Props) {
  // 投稿を取得
  const post = await getNotePost(params.id);

  return <PostLayout post={post} />;
}
