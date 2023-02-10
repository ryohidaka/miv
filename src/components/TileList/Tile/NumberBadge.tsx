import { CopyIcon } from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/react";

type Props = {
  count: number;
};

/**
 * 画像数表示バッジ
 * @returns
 */
export const NumberBadge = ({ count }: Props) => (
  <Badge
    display="grid"
    gridAutoFlow="column"
    gap={0.5}
    position="absolute"
    zIndex="docked"
    right={0}
    margin={1}
    alignItems="center"
    bgColor="rgba(0,0,0,0.5)"
    color="white"
  >
    <CopyIcon />
    <span>{count}</span>
  </Badge>
);
