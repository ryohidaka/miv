import classNames from "classnames";

type Props = {
  isFullPage?: boolean;
};

/**
 * ローディング表示
 * @returns
 */
export const Loading = ({ isFullPage }: Props) => {
  return (
    <div
      className={classNames(
        "grid h-full w-full place-items-center opacity-50",
        isFullPage && "fixed top-0 left-0 z-40 bg-black"
      )}
    >
      <div className="flex justify-center">
        <div
          className={classNames(
            "h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent",
            !isFullPage && "border-black dark:border-white"
          )}
        ></div>
      </div>
    </div>
  );
};
