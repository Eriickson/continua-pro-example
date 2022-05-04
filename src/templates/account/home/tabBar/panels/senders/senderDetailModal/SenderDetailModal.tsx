import React, { FC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  List,
  ListItem,
  Divider,
  Tag,
} from "@chakra-ui/react";
import { CardContainer } from "@/components";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { Check, Clock } from "react-feather";
import { MenuOptions } from "./menuOptions/MenuOptions";
import { Sender } from "@continuapro/entity";

interface SenderDetailModalProps {
  sender: Sender;
}

export const SenderDetailModal: FC<SenderDetailModalProps> = ({ sender }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CardContainer>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Flex alignItems="center">
              <Avatar
                bg="white"
                name={sender.username_initials.split("").join(" ")}
                cursor="pointer"
                onClick={onOpen}
                mr="3"
                color="secondary.500"
                border="2px"
              />
              <Box lineHeight="none">
                <Text
                  cursor="pointer"
                  mb="0.5"
                  fontSize="lg"
                  fontWeight="medium"
                  color="secondary.500"
                  onClick={onOpen}
                  _hover={{ color: "secondary.400" }}
                >
                  {sender.name}
                </Text>
                <Text fontSize="sm" fontWeight="medium" color="gray.600">
                  {sender.email}
                </Text>
              </Box>
            </Flex>
            <Flex alignItems="center">
              {sender.status === "pending_verification" ? (
                <Tag colorScheme="orange" variant="solid" mr="4" rounded="sm">
                  <Text mt="0.5" mr="1">
                    Pendiente
                  </Text>
                  <Clock size="1rem" strokeWidth="2.5" />
                </Tag>
              ) : (
                <Tag colorScheme="secondary" variant="solid" mr="4" rounded="sm">
                  <Text mt="0.5" mr="1">
                    Verificado
                  </Text>
                  <Check size="1rem" strokeWidth="2.5" />
                </Tag>
              )}

              <MenuOptions sender={sender} />
            </Flex>
          </Flex>
        </Box>
      </CardContainer>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize="sm" color="gray.700" fontWeight="normal" lineHeight="none">
              Datos del Remitente:
            </Text>
            <Text color="secondary.500">{sender.name}</Text>
          </ModalHeader>
          <ModalBody>
            <List>
              <ListItem display="flex" justifyContent="space-between">
                <Text>Nombre:</Text>
                <Text color="primary.600" fontWeight="medium">
                  {sender.name}
                </Text>
              </ListItem>
              <Divider my="2" borderWidth="1px" />

              <ListItem display="flex" justifyContent="space-between">
                <Text>Correo electrónico:</Text>
                <Text color="primary.600" fontWeight="medium">
                  {sender.email}
                </Text>
              </ListItem>
              <Divider my="2" borderWidth="1px" />
              <ListItem></ListItem>
              <ListItem display="flex" justifyContent="space-between">
                <Text>Estado de verificación:</Text>
                {sender.status === "pending_verification" ? (
                  <Tag colorScheme="orange" variant="solid" rounded="sm">
                    <Text mt="0.5" mr="1">
                      Pendiente
                    </Text>
                    <Clock size="1rem" strokeWidth="2.5" />
                  </Tag>
                ) : (
                  <Tag colorScheme="secondary" variant="solid" rounded="sm">
                    <Text mt="0.5" mr="1">
                      Verificado
                    </Text>
                    <Check size="1rem" strokeWidth="2.5" />
                  </Tag>
                )}
              </ListItem>
              <Divider my="2" borderWidth="1px" />
              <ListItem display="flex" justifyContent="space-between">
                <Text>Teléfono:</Text>
                <Text color="primary.600" fontWeight="medium">
                  {sender.phone}
                </Text>
              </ListItem>
            </List>
          </ModalBody>

          <ModalFooter px="3">
            <Button colorScheme="primary" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
