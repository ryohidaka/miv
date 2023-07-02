import classNames from "classnames";
import { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Drawer from "react-modern-drawer";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  direction: "left" | "right";
  title: string;
  children?: ReactNode | ReactNode[];
  className?: string;
};

/**
 * ドロワー
 * @returns
 */
export default function CommonDrawer({
  isOpen,
  onClose,
  direction,
  title,
  children,
  className,
}: Props) {
  return (
    <Drawer
      customIdSuffix="drawer"
      open={isOpen}
      onClose={onClose}
      direction={direction}
      className={classNames(
        "h-screen bg-white p-4 dark:!bg-gray-800",
        className
      )}
      lockBackgroundScroll={true}
    >
      <h5
        id="drawer-navigation-label"
        className="text-base font-semibold uppercase text-gray-500 dark:text-gray-400"
      >
        {title}
      </h5>
      <button
        type="button"
        className="absolute top-2.5 right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-base text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <AiOutlineClose onClick={onClose} />
        <span className="sr-only">Close menu</span>
      </button>
      <div className="overflow-y-auto py-4">{children}</div>
    </Drawer>
  );
}
