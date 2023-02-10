"use client";

import {
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import View from "./View";
import SideMenu from "./SideMenu";
import { AiOutlineMenu } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { newTabState } from "@/atoms/NewTab";

/**
 * サイドバー
 * @returns
 */
export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  // 別タブ遷移設定を取得
  const [newTab, setNewTab] = useRecoilState(newTabState);

  return (
    <>
      <Button ref={btnRef.current} onClick={onOpen}>
        <AiOutlineMenu />
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
            <div className="grid grid-cols-1 gap-3">
              {/* ページリンク */}
              <SideMenu onClose={onClose} />

              {/* 別タブ遷移設定 */}
              <Checkbox
                isChecked={newTab}
                onChange={(e) => setNewTab(e.target.checked)}
              >
                Open in new tab
              </Checkbox>

              {/* 表示モード切替 */}
              <View />
            </div>
          </DrawerBody>

          <DrawerFooter className="flex items-center">
            {/* Copyrights */}
            &copy;
            <Link href="https://ryohidaka.jp" className="flex items-center">
              ryohidaka <BiLinkExternal className="mx-2" />
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
