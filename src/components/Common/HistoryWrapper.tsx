import { RepeatClockIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

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

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<RepeatClockIcon />}
      />
      <MenuList>
        {hasHistory ? (
          <>
            {histories.map((history) => (
              <MenuItem key={history} onClick={() => search(history)}>
                {history}
              </MenuItem>
            ))}
          </>
        ) : (
          <>
            <MenuItem>No data</MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};
