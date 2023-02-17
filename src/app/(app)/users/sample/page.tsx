"use client";

import { TileList } from "@/components/TileList";
import UserHeader from "@/components/User/UserHeader";
import { USER_PAGE_POSTS } from "@/modules/dummy/post";
import { createRandomUser } from "@/modules/dummy/user";
import { User } from "@/types/user";

/**
 * ユーザ情報表示(サンプル)
 * @returns
 */
export default function ShowSampleUser() {
  const data = createRandomUser();

  const userItems = [
    {
      id: "user-notes",
      section: "Notes",
      posts: USER_PAGE_POSTS,
    },
    {
      id: "user-gallery",
      section: "Gallery",
      posts: USER_PAGE_POSTS,
    },
  ];

  return (
    <>
      <UserHeader user={data as User} />
      {userItems.map((item) => (
        <section key={item.id} id={item.id} className="grid grid-cols-1 gap-6">
          <h2 className="px-3 text-3xl tracking-tighter md:p-0">
            {item.section}
          </h2>
          <TileList posts={item.posts} hideUser />
        </section>
      ))}
    </>
  );
}
