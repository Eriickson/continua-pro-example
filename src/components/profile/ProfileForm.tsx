import React, { FC } from "react";

import { HStack, Stack } from "@chakra-ui/react";

import { FormProvider } from "@/components";
import { useSelector } from "@/store";

import { InputControlOld } from "../form/InputControlOld";
import { ChangeProfilePicture } from "./changeProfilePicture";
import { Profile } from "@continuapro/entity";
import { InputMaskControl } from "../form/inputMaskControl";
import { InputControl } from "../form/inputControl";

interface ProfileFormProps {
  isEditing: boolean;
  onSubmit(values: Profile): void;
}

export const ProfileForm: FC<ProfileFormProps> = ({ isEditing, onSubmit }) => {
  const { profile } = useSelector(({ profile }) => profile);
  const { isLoading } = useSelector(({ profile }) => profile.updateProfile);

  return (
    <div>
      <FormProvider id="profile-form" onSubmit={onSubmit} defaultValues={profile}>
        <Stack>
          <HStack>
            <ChangeProfilePicture />
          </HStack>
          <InputControl
            formControl={{ label: "Nombre" }}
            inputProps={{ isDisabled: !isEditing || isLoading }}
            rules={{ required: true }}
            name="name"
          />
          <InputControl
            // rules={{ required: true }}
            inputProps={{ isDisabled: !isEditing || isLoading }}
            formControl={{ label: "Correo electrónico" }}
            name="email"
          />
          <InputMaskControl
            // mask +52 (331) 862-4318
            mask="+99 (999) 999-9999"
            formControl={{ label: "Teléfono" }}
            inputProps={{
              isDisabled: !isEditing || isLoading,
            }}
            // rules={{ required: true }}
            name="phone"
            // defaultValue={profile.phone}
          />
          <InputControl
            // rules={{ required: true }}
            inputProps={{ isDisabled: !isEditing || isLoading }}
            formControl={{ label: "Empresa" }}
            name="company_name"
            // defaultValue={profile.company_name}
          />
          <InputControl
            // rules={{ required: true }}
            inputProps={{ isDisabled: !isEditing || isLoading }}
            formControl={{ label: "Dirección" }}
            name="address"
            // defaultValue={profile.address}
          />
        </Stack>
      </FormProvider>
    </div>
  );
};
