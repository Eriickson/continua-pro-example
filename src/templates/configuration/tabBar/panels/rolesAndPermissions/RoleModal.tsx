import React, { FC, Fragment, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  GridItem,
  Text,
  Box,
  Accordion,
  VStack,
  AccordionItem,
  AccordionButton,
  Heading,
  AccordionIcon,
  ListItem,
  Flex,
  ListIcon,
  Divider,
  AccordionPanel,
  List,
} from "@chakra-ui/react";
import { Card, CardContainer, Switch } from "@/components";
import { Eye, Plus, Trash2, Edit2 } from "react-feather";
import { useAction, useSelector } from "@/store";
import { PermissionAction } from "src/types";
import { FormProvider } from "@/providers";
import { Role } from "@continuapro/entity";

interface RoleModalProps {
  role: Role;
}

export const RoleModal: FC<RoleModalProps> = ({ role }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getPermissions, updatePermission } = useAction();
  const { permissions } = useSelector(({ permissions }) => permissions);

  const crudOptions: Record<PermissionAction, any> = {
    read: { label: "Visualizar", icon: Eye, color: "blue" },
    create: { label: "Crear", icon: Plus, color: "green" },
    edit: { label: "Actualizar", icon: Edit2, color: "orange" },
    delete: { label: "Eliminar", icon: Trash2, color: "red" },
  };

  useEffect(() => {
    isOpen && getPermissions({ roleId: role.id });
  }, [isOpen]);

  return (
    <>
      <GridItem colSpan={3}>
        <Box cursor="pointer" onClick={onOpen}>
          <Card>
            <CardContainer>
              <Text fontWeight="medium" fontSize="xl" textAlign="center">
                {role.name}
              </Text>
            </CardContainer>
          </Card>
        </Box>
      </GridItem>
      <Modal size="2xl" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="sm">
          <ModalHeader>Permisos para {role.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Accordion allowToggle>
              <VStack alignItems="stretch">
                {permissions.map((permission) => (
                  <AccordionItem key={permission.label}>
                    <h2>
                      <AccordionButton justifyContent="space-between" _focus={{}}>
                        <Heading size="md">{permission.label}</Heading>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={0}>
                      <FormProvider id="permission-switch-form" onSubmit={(values) => console.log(values)}>
                        <List mb="3" maxW="3xl">
                          {permission.values.map((option, i) => (
                            <Fragment key={option.id}>
                              <ListItem alignItems="center" justifyContent="space-between">
                                <Flex justifyContent="space-between">
                                  <Box mr="24" w="36">
                                    <ListIcon
                                      as={crudOptions[option.action].icon}
                                      color={`${crudOptions[option.action].color}.500`}
                                    />
                                    <strong>{crudOptions[option.action].label}</strong>
                                  </Box>
                                  <Switch
                                    inputProps={{
                                      onChange: (value) =>
                                        updatePermission({ id: option.id, access_scope: { granted: value } }),
                                      defaultChecked: option.granted,
                                    }}
                                    name={`${permission.accessScope}.${option.action}`}
                                  />
                                </Flex>
                              </ListItem>
                              {permission.values.length !== i + 1 && <Divider my="2" />}
                            </Fragment>
                          ))}
                        </List>
                      </FormProvider>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </VStack>
            </Accordion>
          </ModalBody>

          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};
