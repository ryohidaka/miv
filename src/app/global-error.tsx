"use client";

import { ChakraProvider } from "@chakra-ui/react";
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
          <div className="container">
            <ErrorAlert />
          </div>
        </ChakraProvider>
      </body>
    </html>
  );
}
