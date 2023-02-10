"use client";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Link as ChakraLink,
  useDisclosure,
} from "@chakra-ui/react";
import { ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import View from "./View";
import SideMenu from "./SideMenu";
import NewTab from "./NewTab";

/**
 * サイドバー
 * @returns
 */
export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef.current} onClick={onOpen}>
        <HamburgerIcon />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef.current}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>

          <DrawerBody>
            {/* ページリンク */}
            <SideMenu onClose={onClose} />

            {/* 別タブ遷移設定 */}
            <NewTab />

            {/* 表示モード切替 */}
            <View />
          </DrawerBody>

          <DrawerFooter>
            {/* Copyrights */}
            <div>
              &copy;
              <ChakraLink href="https://ryohidaka.jp" isExternal>
                ryohidaka <ExternalLinkIcon mx="2px" />
              </ChakraLink>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
