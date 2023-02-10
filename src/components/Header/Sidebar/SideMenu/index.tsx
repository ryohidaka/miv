"use client";

import { Heading, VStack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import MenuLink from "./MenuLink";

type Props = {
  onClose: () => void;
};

/**
 * サイドメニュー
 * @returns
 */
export default function SideMenu({ onClose }: Props) {
  // ページ一覧
  const pages = [
    {
      url: "/",
      label: "Top",
    },
    {
      url: "/home",
      label: "Home Timeline",
    },
    {
      url: "/user",
      label: "User Timeline",
    },
    {
      url: "/search",
      label: "Search Timeline",
    },
  ];

  // ページのパスを取得
  const path = usePathname();

  return (
    <VStack as="nav" spacing={3} justify="center" align="stretch" mb={5}>
      <Heading size="md">Links</Heading>
      {pages.map((page) => (
        <MenuLink
          key={page.label}
          url={page.url}
          label={page.label}
          isActive={path === page.url}
          onClick={onClose}
        />
      ))}
    </VStack>
  );
}
