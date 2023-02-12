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
        <svg
          aria-hidden="true"
          className="mr-2 h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <div className="mt-2 mb-4 max-w-screen-sm text-sm">{children}</div>
    </div>
  );
};
