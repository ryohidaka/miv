"use client";

import { Container } from "@chakra-ui/react";
import { Splash } from "@/components/Top/Splash";

/**
 * トップ画面
 * @returns
 */
export default function Top() {
  return (
    <Container maxW="md">
      <Splash />
    </Container>
  );
}
