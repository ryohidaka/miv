import { TileList } from "@/components/TileList";
import UserHeader from "@/components/User/UserHeader";
import { getUserWithPosts } from "@/modules/ssr/user";
import { PostParams } from "@/types/post";

type Props = {
  params: PostParams;
};

/**
 * ユーザ情報表示
 * @returns
 */
export default async function ShowUser({ params }: Props) {
  // ユーザIDを取得
  const userId = params.id;

  // ユーザ情報を取得
  const { user, notes, gallery } = await getUserWithPosts(userId);
  const userItems = [
    {
      id: "user-notes",
      section: "ノート",
      posts: notes,
      isGallery: false,
    },
    {
      id: "user-gallery",
      section: "ギャラリー",
      posts: gallery,
      isGallery: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-10">
      {/* ユーザ情報 */}
      <UserHeader user={user} />

      {/* ユーザ投稿一覧 */}
      {userItems.map((item) => (
        <section key={item.id} id={item.id} className="grid grid-cols-1 gap-6">
          <h2 className="px-3 text-3xl tracking-tighter md:p-0">
            {item.section}
          </h2>
          <TileList posts={item.posts} isGallery={item.isGallery} hideUser />
        </section>
      ))}
    </div>
  );
}
