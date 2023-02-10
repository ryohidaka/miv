import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertStatus,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  status?: AlertStatus;
  title: string;
  children?: ReactNode;
};

/**
 * デフォルトのアラート表示
 * @returns
 */
export const DefaultAlert = ({ status, title, children }: Props) => {
  return (
    <Alert
      status={status}
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {title}
      </AlertTitle>
      <AlertDescription maxWidth="sm">{children}</AlertDescription>
    </Alert>
  );
};
