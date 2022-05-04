import React, { FC, useMemo } from "react";
import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useDebouncedCallback } from "use-debounce";

import { useSelector } from "@/store";
import { FormProvider, InputControl } from "@/components";
import { OnChangeInput } from "@continuapro/events";

interface GeneralPanelFormProps {
  onChangeField(newValue: OnChangeInput): void;
}

export const GeneralPanelForm: FC<GeneralPanelFormProps> = ({ onChangeField }) => {
  const { systemSettings, updateSystemSetting } = useSelector(({ systemSettings }) => systemSettings);

  const handleChange = useDebouncedCallback((newValue: OnChangeInput) => onChangeField(newValue), 1000);

  const systemSettingsDefaultValues = useMemo(
    () => systemSettings.reduce((a, v) => ({ ...a, [v.key]: v.value }), {}),
    [systemSettings]
  );

  return (
    <Box>
      <FormProvider id="" onSubmit={() => {}} defaultValues={systemSettingsDefaultValues}>
        <SimpleGrid rowGap="5" columns={12} spacing={10}>
          {systemSettings.map((systemSetting) => (
            <GridItem key={systemSetting.id} colSpan={[12, null, 6, 3]}>
              <InputControl
                formControl={{ label: systemSetting.description, isTruncatedLabel: true }}
                name={systemSetting.key}
                inputProps={{
                  onChange: (e) =>
                    handleChange({ id: systemSetting.id, value: e.target.value, name: systemSetting.key }),
                  isDisabled: updateSystemSetting.isLoading,
                }}
              />
            </GridItem>
          ))}
        </SimpleGrid>
      </FormProvider>
    </Box>
  );
};
