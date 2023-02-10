import classNames from "classnames";
import { useState } from "react";
import { AiOutlineHistory } from "react-icons/ai";

type Props = {
  histories: string[];
  search: (history: string) => void;
};

/**
 * 検索履歴
 * @returns
 */
export const HistoryWrapper = ({ histories, search }: Props) => {
  const hasHistory = histories.length > 0;

  const [isShow, setShow] = useState<boolean>(false);
  const toggle = () => {
    setShow(!isShow);
  };

  return (
    <>
      <button
        id="dropdownMenuIconButton"
        data-dropdown-toggle="dropdownDots"
        className="lignt-btn"
        type="button"
        aria-label="Options"
        onClick={toggle}
      >
        <AiOutlineHistory />
      </button>

      <div
        id="dropdownDots"
        className={classNames(
          "z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700",
          !isShow && "hidden"
        )}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownMenuIconButton"
        >
          {hasHistory ? (
            <>
              {histories.map((history) => (
                <li
                  key={history}
                  onClick={() => search(history)}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {history}
                </li>
              ))}
            </>
          ) : (
            <>
              <span>No data</span>
            </>
          )}
        </ul>
      </div>
    </>
  );
};
