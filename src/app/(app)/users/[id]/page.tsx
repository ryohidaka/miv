import { TopPosts } from "@/components/Top/TopPosts";
import UserHeader from "@/components/User/UserHeader";
import { getUser } from "@/modules/ssr/user";
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
  const user = await getUser(userId);
  const userItems = [
    {
      id: "user-notes",
      section: "Notes",
      url: `/api/users/${userId}/notes?limit=12`,
      isGallery: false,
    },
    {
      id: "user-gallery",
      section: "Gallery",
      url: `/api/users/${userId}/gallery?limit=12`,
      isGallery: true,
    },
  ];

  return (
    <>
      <UserHeader user={user} />

      {userItems.map((item) => (
        <section key={item.id} id={item.id} className="grid grid-cols-1 gap-6">
          <h2 className="px-3 text-3xl tracking-tighter md:p-0">
            {item.section}
          </h2>
          <TopPosts url={item.url} isGallery={item.isGallery} hideUser />
        </section>
      ))}
    </>
  );
}
