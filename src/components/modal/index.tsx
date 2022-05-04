import React, { FC, ReactElement } from "react";

import {
  Modal as _Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Text,
  HStack,
  ModalProps as _ModalProps,
} from "@chakra-ui/react";
import { CreateOrUpdate, FormElement } from "@continuapro/form";
import { getFormId } from "@/utils";
import { useDebounce } from "use-debounce";

interface ModalProps<T> {
  title: string;
  subtitle?: string;
  customButton?: ReactElement | string;
  showingModalCloseButton?: boolean;
  btnOpen?: Partial<{ colorScheme: string; label: string; onClick(): void }>;
  btnPri: Partial<{ colorScheme: string; label: string; onClick(): void }>;
  btnSec?: Partial<{ colorScheme: string; label: string; onClick(): void }>;
  isLoading?: boolean;
  FormChild?: FC<FormElement<T, any>>;
  onSubmit?(values: T): void;
  isOpen: boolean;
  onClose(): void;
  onOpen(): void;
  children?: ReactElement;
  startLoadingDelay?: number;
  endLoadingDelay?: number;
  modalProps?: Partial<_ModalProps>;
  defaultValues?: any;
  titleColor?: string;
  formType?: CreateOrUpdate;
}

export const Modal = <T extends unknown>({
  customButton,
  showingModalCloseButton,
  title,
  btnOpen,
  btnPri,
  btnSec,
  isLoading,
  FormChild,
  onSubmit,
  children,
  isOpen,
  onOpen,
  onClose,
  subtitle,
  startLoadingDelay = 0,
  endLoadingDelay = 500,
  modalProps,
  defaultValues,
  titleColor,
  formType = "CREATE",
}: ModalProps<T>) => {
  const [isLoadingDebounce] = useDebounce(isLoading, isLoading === false ? endLoadingDelay : 0);

  return (
    <>
      {customButton ? (
        <Box onClick={onOpen}>{customButton}</Box>
      ) : (
        <Button colorScheme={btnOpen?.colorScheme} onClick={onOpen}>
          {btnOpen?.label}
        </Button>
      )}

      <_Modal
        closeOnEsc={!isLoadingDebounce}
        closeOnOverlayClick={!isLoadingDebounce}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
        {...modalProps}
      >
        <ModalOverlay />
        <ModalContent rounded="sm">
          <ModalHeader px="4">
            <Text color={titleColor ? titleColor : "primary.700"} fontSize="xl">
              {title}
            </Text>
            <Text userSelect="none" pr="8" textAlign="justify" color="secondary.400" lineHeight="none" fontSize="sm">
              {subtitle}
            </Text>
          </ModalHeader>
          {showingModalCloseButton && <ModalCloseButton mr="-1" mt="1" isDisabled={isLoadingDebounce} _focus={{}} />}
          <ModalBody px="4" py="0">
            {FormChild && onSubmit ? (
              <FormChild type={formType} onSubmit={onSubmit} defaultValues={defaultValues} />
            ) : (
              children
            )}
          </ModalBody>
          <ModalFooter px="4">
            <HStack justifyContent="flex-end">
              <Button
                _focus={{}}
                isDisabled={isLoadingDebounce}
                onClick={() => (btnSec?.onClick ? btnSec?.onClick() : onClose())}
                variant="ghost"
              >
                {btnSec?.label}
              </Button>
              {btnPri.label && (
                <Button
                  _focus={{}}
                  form={FormChild && getFormId(FormChild)}
                  type={FormChild ? "submit" : "button"}
                  isLoading={isLoadingDebounce}
                  colorScheme={btnPri?.colorScheme || "primary"}
                  onClick={btnPri?.onClick}
                >
                  {btnPri?.label}
                </Button>
              )}
            </HStack>
          </ModalFooter>
        </ModalContent>
      </_Modal>
    </>
  );
};

Modal.defaultProps = { showingModalCloseButton: true, btnPri: { colorScheme: "primary" }, btnSec: { label: "Cerrar" } };
