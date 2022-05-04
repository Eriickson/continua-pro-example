import { FormProvider, InputControl, InputFileUploadControl, Modal } from "@/components";
import { useSelector } from "@/store";
import { Box, GridItem, HStack, IconButton, Image, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { useDebouncedCallback } from "use-debounce";
import React, { FC, useMemo } from "react";
import { OnChangeInput } from "@continuapro/events";
import { Eye } from "react-feather";

interface PersonalizationPanelFormProps {
  onChangeField(newValue: OnChangeInput): void;
}

export const PersonalizationPanelForm: FC<PersonalizationPanelFormProps> = ({ onChangeField }) => {
  const { settings } = useSelector(({ accounts }) => accounts);

  const handleChange = useDebouncedCallback((newValue: OnChangeInput, rules: JSON) => {
    console.log(rules);

    // TODO: Crear una función que reciba un objeto de reglas y unos valores y valide si el valor actual cumple con las reglas

    onChangeField(newValue);
  }, 1000);

  const settingsDefaultValues = useMemo(() => settings.reduce((a, v) => ({ ...a, [v.key]: v.value }), {}), [settings]);

  return (
    <Box>
      <FormProvider id="" onSubmit={() => {}} defaultValues={settingsDefaultValues}>
        <SimpleGrid rowGap="5" columns={12} spacing={10}>
          {settings.map((setting) => (
            <GridItem key={setting.id} colSpan={[12, null, 6, 3]}>
              {setting.setting_type === "Text" && (
                <InputControl
                  formControl={{ label: setting.description, isTruncatedLabel: true }}
                  name={setting.key}
                  rules={setting.rules}
                  inputProps={{
                    onChange: (e) =>
                      handleChange({ id: setting.id, value: e.target.value, name: setting.key }, setting.rules),
                    //   isDisabled: updateSystemSetting.isLoading,
                  }}
                />
              )}
              {setting.setting_type === "file" && (
                <HStack alignItems="flex-end">
                  <InputFileUploadControl
                    formControl={{ label: setting.description, isTruncatedLabel: true }}
                    name={setting.key}
                    rules={setting.rules}
                    inputProps={{
                      onChange: (e) =>
                        handleChange({ id: setting.id, value: e as any, name: setting.key }, setting.rules),
                      //   isDisabled: updateSystemSetting.isLoading,
                    }}
                  />
                  <FilePreview urlFile={setting.file_url} description={setting.description} />
                </HStack>
              )}
            </GridItem>
          ))}
        </SimpleGrid>
      </FormProvider>
    </Box>
  );
};

interface FilePreviewProps {
  urlFile: string;
  description?: string;
}

const FilePreview: FC<FilePreviewProps> = ({ urlFile, description }) => {
  const disclosure = useDisclosure();

  return (
    <>
      <Modal
        modalProps={{ size: "sm" }}
        customButton={<IconButton colorScheme="primary" variant="outline" aria-label="" icon={<Eye />} />}
        {...disclosure}
        title="Preview"
        subtitle={description}
      >
        <Image mx="auto" src={urlFile} alt="" />
      </Modal>
    </>
  );
};
