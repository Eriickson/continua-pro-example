import { useHandleResponse, useToast } from "@/hooks";
import { useAction, useSelector } from "@/store";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Image,
  MenuItem,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import omitEmpty from "omit-empty";
import deepEqual from "deep-equal";
import { ProfileForm } from "./ProfileForm";
import { Profile } from "@continuapro/entity";

export const ProfileDrawer = () => {
  const { updateProfile } = useAction();

  const { profile } = useSelector(({ profile }) => profile);
  const { isLoading } = useSelector(({ profile }) => profile.updateProfile);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleResponse = useHandleResponse();

  const { showToast } = useToast();

  const [isEditing, setIsEditing] = useState(false);
  const btnRef = useRef(null);

  async function handleSubmit(internalProfile: Profile) {
    if (deepEqual(omitEmpty(internalProfile), omitEmpty(profile))) {
      showToast({
        title: "Actualizar Información",
        description: "Realice sus cambios y presione guardar",
        status: "info",
      });
      return;
    }

    const { name, phone, company_name, address } = internalProfile;

    delete internalProfile.profile_picture_url;
    const response: any = await updateProfile({ profile: { name, phone, company_name, address } });

    handleResponse(response, () => setIsEditing(false));
  }

  useEffect(() => {
    // if (isOpen) getProfile();
    // else {
    //   setIsEditing(false);
    //   showToast.closeAll();
    // }
    if (isOpen) {
      setIsEditing(false);
      showToast.closeAll();
    }
  }, [isOpen]);

  return (
    <div>
      <MenuItem fontWeight="medium" minH="48px" ref={btnRef} onClick={onOpen}>
        <Image boxSize="1.5rem" borderRadius="full" src={profile.profile_picture_url} alt="Mi Perfil" mr="8px" />
        <span>Mi Perfil</span>
      </MenuItem>
      <Drawer
        closeOnOverlayClick={!isLoading}
        closeOnEsc={!isLoading}
        size="md"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Perfil de Usuario</DrawerHeader>

          <DrawerBody>
            <ProfileForm isEditing={isEditing} onSubmit={handleSubmit} />
          </DrawerBody>

          <DrawerFooter>
            {isEditing ? (
              <>
                <Button isDisabled={isLoading} variant="outline" mr={3} onClick={() => setIsEditing(false)}>
                  Cancelar
                </Button>
                <Button
                  isLoading={isLoading}
                  colorScheme="primary"
                  type="submit"
                  form="profile-form"
                  loadingText="Guardando Cambios..."
                >
                  Guardar Cambios
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cerrar
                </Button>
                <Button colorScheme="secondary" onClick={() => setIsEditing(true)}>
                  Editar Información
                </Button>
              </>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
