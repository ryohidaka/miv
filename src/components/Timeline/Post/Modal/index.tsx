import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
} from "@chakra-ui/react";

import { Post } from "@/types/post";

type Props = {
  post: Post;
  isOpen: boolean;
  onClose: () => void;
};

/**
 * 詳細表示モーダル
 * @param param0
 * @returns
 */
export const DetailModal = ({ post, isOpen, onClose }: Props) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>

          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
