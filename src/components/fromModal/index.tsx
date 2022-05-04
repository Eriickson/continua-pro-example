import React, { FC, Fragment, useEffect, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Heading,
  Text,
  VStack,
  Link as ChakraLink,
  Box,
  Stack,
  Divider,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { useAction, useSelector } from "@/store";
import { ChevronRight } from "react-feather";
import { InputControl } from "@/components";
import { Sender } from "@continuapro/entity";

interface FromModalProps {
  onSelected: (value: Sender) => void;
}

export const FromModal: FC<FromModalProps> = ({ onSelected }) => {
  const { getSenders } = useAction();
  const { senders } = useSelector(({ senders }) => senders);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [valueSelected, setValueSelected] = useState<string>();

  useEffect(() => {
    isOpen && getSenders();
  }, [isOpen]);

  return (
    <div>
      <InputControl
        formControl={{ label: "From" }}
        name="from"
        inputProps={{ cursor: "pointer", onClick: onOpen, value: valueSelected }}
      />

      <Modal scrollBehavior="inside" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            <Heading color="secondary.500" mb="2" fontWeight="medium" fontSize="2xl">
              Seleccionar un sender
            </Heading>
            <Text lineHeight="none" fontWeight="normal" fontSize="md">
              Deja que la gente sepa quién está enviando este correo electrónico
            </Text>
          </ModalHeader>
          <ModalBody pr="2">
            <Box mb="5">
              <Stack>
                {senders.map((sender) => (
                  <Fragment key={sender.id}>
                    <Flex
                      alignItems="center"
                      _hover={{ color: "primary.500", transition: "250ms" }}
                      cursor="pointer"
                      justifyContent="space-between"
                      onClick={() => {
                        setValueSelected(sender.email);
                        onSelected(sender);
                        onClose();
                      }}
                    >
                      <Box lineHeight="none">
                        <Text userSelect="none" fontWeight="medium">
                          {sender.name}
                        </Text>
                        <Text userSelect="none" fontSize="sm">
                          {sender.email}
                        </Text>
                      </Box>
                      <Box>
                        <ChevronRight />
                      </Box>
                    </Flex>
                    <Divider />
                  </Fragment>
                ))}
              </Stack>
            </Box>
          </ModalBody>

          <ModalFooter flexDir="column" alignItems="center">
            <VStack spacing="0">
              <Text>¿No puede encontrar el remitente que está buscando?</Text>
              <Link
                href={{
                  pathname: "/account",
                  query: { accountContactTabBarItem: 1 },
                }}
                passHref
              >
                <ChakraLink target="_blank" textDecor="underline" color="blue.500" _focus={{}}>
                  Administrar sender
                </ChakraLink>
              </Link>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
