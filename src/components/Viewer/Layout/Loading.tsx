import { Box, Spinner } from "@chakra-ui/react";

/**
 * ローディング表示
 * @returns
 */
export const Loading = () => {
  return (
    <Box
      bg="black"
      w="100%"
      h="100%"
      p={4}
      color="white"
      position="fixed"
      top={0}
      left={0}
      zIndex="overlay"
      opacity={0.5}
      sx={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <Spinner size="xl" />
    </Box>
  );
};
