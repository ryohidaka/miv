import { User } from "@/types/user";
import { Text, HStack } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  user: User;
};

/**
 * 投稿者情報表示
 * @returns
 */
export const Author = ({ user }: Props) => {
  return (
    <HStack width="100%" id={user.id}>
      <Image
        width={25}
        height={25}
        alt={user.name}
        src={user.image_url}
        unoptimized
        style={{ borderRadius: "50%" }}
      />
      <Text
        fontSize="xs"
        sx={{
          textOverflow: "ellipsis",
        }}
        whiteSpace="nowrap"
        overflow="hidden"
        maxWidth="100%"
      >
        {user.name}
      </Text>
    </HStack>
  );
};
