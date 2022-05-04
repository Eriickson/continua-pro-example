import { FormProvider, InputControl, PasswordInputControl } from "@/components";
import { useSelector } from "@/store";
import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import { OnChangeInput } from "@continuapro/events";
import React, { FC, useMemo } from "react";
import { useDebouncedCallback } from "use-debounce";

interface ChannelDetailsFormProps {
  onChangeField: (value: any) => void;
}

export const ChannelDetailsForm: FC<ChannelDetailsFormProps> = ({ onChangeField }) => {
  const { channelServiceProvider } = useSelector(({ channelServiceProviders }) => channelServiceProviders);
  const { isLoading } = useSelector(({ channelServiceProviders }) => channelServiceProviders.getChannelServiceProvider);

  const handleChange = useDebouncedCallback((newValue: OnChangeInput) => onChangeField(newValue), 1000);

  const formDefaultValues = useMemo(
    () => channelServiceProvider?.settings.reduce((a, v) => ({ ...a, [v.key]: v.value }), {}),
    [channelServiceProvider]
  );

  return (
    <Box>
      <FormProvider id="" onSubmit={() => {}} defaultValues={formDefaultValues}>
        <SimpleGrid rowGap="5" columns={12} spacing={10}>
          {channelServiceProvider?.settings.map((setting) => (
            <GridItem key={setting.id} colSpan={[12, null, 6, 3]}>
              {setting.input_type === "password" ? (
                <PasswordInputControl
                  formControl={{ label: setting.label, isTruncatedLabel: true }}
                  name={setting.key}
                  inputProps={{
                    onChange: (e) => handleChange({ id: setting.id, value: e.target.value, name: setting.key }),
                    isDisabled: isLoading,
                  }}
                />
              ) : (
                <InputControl
                  formControl={{ label: setting.label, isTruncatedLabel: true }}
                  name={setting.key}
                  inputProps={{
                    onChange: (e) => handleChange({ id: setting.id, value: e.target.value, name: setting.key }),
                    isDisabled: isLoading,
                  }}
                />
              )}
            </GridItem>
          ))}
        </SimpleGrid>
      </FormProvider>
    </Box>
  );
};
