import { Button } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  url: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

/**
 * メニューリンク
 * @returns
 */
export default function MenuLink({ url, label, isActive, onClick }: Props) {
  return (
    <Link href={url} passHref>
      <Button
        width="100%"
        justifyContent="start"
        variant={isActive ? "solid" : "outline"}
        onClick={onClick}
      >
        {label}
      </Button>
    </Link>
  );
}
