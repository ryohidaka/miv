"use client";

import { Splash } from "@/components/Top/Splash";
import { Container } from "@chakra-ui/react";

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
