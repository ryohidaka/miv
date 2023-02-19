"use client";

import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  status?: "warning" | "error";
  title: string;
  children?: ReactNode;
};

/**
 * デフォルトのアラート表示
 * @returns
 */
export const DefaultAlert = ({ status, title, children }: Props) => {
  const [color, setColor] = useState<string>("red");

  const statusColors = [
    { status: "warning", color: "yellow" },
    { status: "error", color: "red" },
  ];

  useEffect(() => {
    const color =
      statusColors.find((item) => item.status === status)?.color || "red";
    setColor(color);
  }, [status, statusColors]);

  return (
    <div
      id="alert-additional-content-1"
      className={classNames(
        `mb-4 p-4 text-${color}-800 dark:text-${color}-400 rounded-lg border border-${color}-300 bg-${color}-50 dark:border-${color}-800 dark:bg-gray-800`
      )}
      role="alert"
    >
      <div className="flex items-center">
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <div className="mt-2 mb-4 max-w-screen-sm text-sm">{children}</div>
    </div>
  );
};
