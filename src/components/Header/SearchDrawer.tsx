import CommonDrawer from "../Common/Drawer";
import SearchInput from "./SearchInput";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  clasdName?: string;
};

/**
 * 検索ドロワー
 * @returns
 */
export default function SearchDrawer({ isOpen, onClose }: Props) {
  return (
    <CommonDrawer
      isOpen={isOpen}
      onClose={onClose}
      direction="right"
      className="!w-full"
      title="Search"
    >
      {/* 検索フォーム */}
      <SearchInput className="!block !w-full" />
    </CommonDrawer>
  );
}
