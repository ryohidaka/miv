import { Text } from "@chakra-ui/react";

type Props = {
  text: string;
};

/**
 * ツイート本文
 * @returns
 */
export const PostText = ({ text }: Props) => {
  return (
    <Text
      fontSize="xs"
      sx={{
        textOverflow: "ellipsis",
      }}
      whiteSpace="nowrap"
      overflow="hidden"
      maxWidth="100%"
    >
      {text}
    </Text>
  );
};
