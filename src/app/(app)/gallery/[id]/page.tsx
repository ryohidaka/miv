import { PostLayout } from "@/components/Layout/PostLayout";
import { getGalleryPost } from "@/modules/ssr/gallery";
import { PostParams } from "@/types/post";

type Props = {
  params: PostParams;
};

export async function generateMetadata({ params }: Props) {
  // タイトルを取得
  const { title: postTitle, user } = await getGalleryPost(params.id);
  const userName = user.name;

  return { title: `${postTitle} by ${userName}` };
}

/**
 * ギャラリー個別表示
 * @returns
 */
export default async function ShowPostImages({ params }: Props) {
  // 投稿を取得
  const post = await getGalleryPost(params.id);

  return <PostLayout post={post} />;
}
