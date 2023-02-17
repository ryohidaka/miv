"use client";

import { follow, unfollow } from "@/modules/following";
import classNames from "classnames";
import { useEffect, useState } from "react";

type Props = {
  userId: string;
  defaultState?: boolean;
};

/**
 * フォローボタン
 * @returns
 */
export const FollowButton = ({ userId, defaultState }: Props) => {
  const [isActive, setActive] = useState<boolean>(false);
  const label = isActive ? "フォロー中" : "フォローする";

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
    setActive(defaultState as boolean);
  }, [defaultState]);

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
