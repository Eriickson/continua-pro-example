import React, { FC, useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
} from "@chakra-ui/react";
import { CropperImageProps } from "src/components/cropperImageProps";
import { useSelector } from "@/store";
import { CropArea } from "@continuapro/entity";

interface ChangeProfilePictureModalProps {
  isOpen: boolean;
  onClose(): void;
  srcImg?: string;
  onSave(): void;
  setCroppedArea(area: CropArea): void;
}

export const ChangeProfilePictureModal: FC<ChangeProfilePictureModalProps> = ({
  isOpen,
  onClose,
  srcImg = "",
  onSave,
  setCroppedArea,
}) => {
  const { isLoading } = useSelector(({ profile }) => profile.uploadProfilePicture);

  const [showCropper, setShowCropper] = useState(false);
  useEffect(() => {
    isOpen
      ? setTimeout(() => {
          setShowCropper(true);
        }, 100)
      : setShowCropper(false);
  }, [isOpen]);

  return (
    <div>
      <Modal isCentered size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box minH="20rem">{showCropper && <CropperImageProps src={srcImg} setCroppedArea={setCroppedArea} />}</Box>
          </ModalBody>
          <ModalFooter>
            <Button isDisabled={isLoading} mr={3} variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="primary" onClick={onSave} isLoading={isLoading} loadingText="Actualizando imagen...">
              Guardar Cambios
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
