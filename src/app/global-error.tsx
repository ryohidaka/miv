"use client";

import { ChakraProvider, Container } from "@chakra-ui/react";
import { ErrorAlert } from "@/components/Viewer/Layout/ErrorAlert";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <head></head>
      <body>
        <ChakraProvider>
          <Container>
            <ErrorAlert />
          </Container>
        </ChakraProvider>
      </body>
    </html>
  );
}
