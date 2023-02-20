"use client";

import { useUser } from "@/hooks/user";
import { follow, unfollow } from "@/modules/following";
import { getUser } from "@/modules/ssr/user";
import classNames from "classnames";
import { useEffect, useState } from "react";

type Props = {
  userId: string;
};

/**
 * フォローボタン
 * @returns
 */
export const FollowButton = ({ userId }: Props) => {
  // ユーザ情報を取得
  const { data: user } = useUser(userId);

  const [isActive, setActive] = useState<boolean>(false);
  const label = isActive ? "Following" : "Folow";

  const toggleFollowing = () => {
    try {
      if (!isActive) {
        follow(userId);
      } else {
        unfollow(userId);
      }
    } finally {
      setActive(!isActive);
    }
  };

  useEffect(() => {
    setActive(user?.isFollowing as boolean);
  }, [user]);

  return (
    <button
      className={classNames(
        "mx-auto w-44 rounded-full  py-2.5 text-center text-sm font-bold text-white",
        isActive ? "bg-gray-500 dark:bg-gray-800" : "bg-sky-500"
      )}
      onClick={toggleFollowing}
    >
      {label}
    </button>
  );
};
