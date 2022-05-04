import { Box, Flex, Image, useDisclosure } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Camera } from "react-feather";
import { ChangeProfilePictureModal } from "./ChangeProfilePictureModal";
import { compressImage, generateCroppedArea, generateFileByUrlBlob, getCroppedImg } from "src/utils";
import { v4 as uuid } from "uuid";
import { useAction, useSelector } from "@/store";
import { useHandleResponse } from "@/hooks";
import { GeneratedImage } from "@continuapro/entity";

export const ChangeProfilePicture = () => {
  const { uploadProfilePicture } = useAction();
  const handleResponse = useHandleResponse();

  const { profile } = useSelector(({ profile }) => profile);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [generatedImage, setGeneratedImage] = useState<GeneratedImage | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => handeFile(acceptedFiles[0]), []);

  async function generateAcceptedFile({ file }: { file: File }): Promise<GeneratedImage> {
    const zipFile = await compressImage(file);
    const src = URL.createObjectURL(zipFile);
    const pixelCrop = await generateCroppedArea(src, 1 / 1);
    const { blobUrl } = await getCroppedImg({ cropArea: pixelCrop, src });
    const fileCreated = await generateFileByUrlBlob({ blobUrl, originalFile: file });

    return {
      id: uuid(),
      originalSrc: src,
      src: blobUrl,
      originalFile: zipFile,
      point: { x: 0, y: 0 },
      rotation: 0,
      flip: { h: false, v: false },
      cropArea: pixelCrop,
      zoom: 1,
      aspectRatio: "4:3",
      file: fileCreated,
    };
  }

  async function generateNewImage() {}

  async function handeFile(file: File) {
    const zipFile: GeneratedImage = await generateAcceptedFile({ file });
    setGeneratedImage(zipFile);
    onOpen();
  }

  async function onSave() {
    if (!generatedImage) {
      console.log("no hay imagen");
      return;
    }
    ``;
    const formData = new FormData();

    formData.append("profile[profile_picture]", generatedImage.file);

    const response = await uploadProfilePicture({ newProfilePicture: formData });

    handleResponse(response, onClose);
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: "image/*", multiple: false });
  return (
    <div>
      <Box pos="relative" w="32">
        <Image borderRadius="full" src={profile?.profile_picture_url} alt="Mi Perfil" mr="8px" />
        <Flex
          bottom="0"
          right="0"
          pos="absolute"
          justifyContent="center"
          alignItems="center"
          rounded="full"
          bgColor="secondary.500"
          p="1.5"
          w="8"
          h="8"
          color="white"
          cursor="pointer"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <Camera strokeWidth="2" />
        </Flex>
      </Box>
      <ChangeProfilePictureModal
        setCroppedArea={generateNewImage}
        isOpen={isOpen}
        onClose={onClose}
        srcImg={generatedImage?.originalSrc}
        onSave={onSave}
      />
    </div>
  );
};
