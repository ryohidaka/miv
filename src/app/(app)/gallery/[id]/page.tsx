import { PostLayout } from "@/components/Layout/PostLayout";
import { getGalleryPost } from "@/modules/ssr/gallery";
import { PostParams } from "@/types/post";

type Props = {
  params: PostParams;
};

/**
 * ギャラリー個別表示
 * @returns
 */
export default async function ShowPostImages({ params }: Props) {
  // 投稿を取得
  const post = await getGalleryPost(params.id);

  return <PostLayout post={post} />;
}
