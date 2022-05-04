import { AlertDialog, Card, CardContainer } from "@/components";
import { useAgency } from "@/contexts";
import {
  Avatar,
  Box,
  Button,
  Flex,
  GridItem,
  HStack,
  SimpleGrid,
  Tag,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
  Divider,
  Skeleton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "@/store";
import { colors } from "src/themes/color";
import { DownloadSupportIllustration, LoveLetterIconIllustration, OpenEnvelopeIllustration, StarIcon } from "@/assets";

export const DetailsPanel = () => {
  const { deleteContact } = useAgency();
  const { query, push, pathname } = useRouter();
  const { contact } = useSelector(({ contacts }) => contacts);

  async function onDelete() {
    const isDeleted = await deleteContact(Number(query.contactId));
    if (!isDeleted) {
      console.log("El contacto no ha sido eliminado");
      return;
    }
    push("/contacts");
  }

  return (
    <SimpleGrid gap={2} columns={12}>
      <GridItem colSpan={4}>
        <Card>
          <CardContainer>
            <Box>
              <Flex justifyContent="space-between">
                <HStack mr="5" flex="1" alignItems="center">
                  {contact?.email ? (
                    <>
                      <Text fontWeight="medium">{contact.email}</Text>
                      <Tag variant="solid" size="sm" colorScheme="primary">
                        Active
                      </Tag>
                    </>
                  ) : (
                    <Skeleton flex="1" height="20px" />
                  )}
                </HStack>
                <Avatar bg="secondary.500" name="H" />
              </Flex>
              <VStack mb="5" lineHeight="none" alignItems="flex-start">
                <Text>
                  <b>Nombre</b> <span>{contact?.name}</span>
                </Text>
                <Text>
                  <b>Teléfono</b> <span>{contact?.phone}</span>
                </Text>
              </VStack>
              <Flex alignItems="flex-start" justifyContent="space-between">
                <Box lineHeight="none">
                  <Text mb="1">
                    <b>Has been your contact for {contact?.time_being_contact}</b>
                  </Text>
                  <Text color="gray.500">Since {contact?.contact_since}</Text>
                </Box>
                <HStack>
                  <StarIcon color={colors.bittersweet["500"]} />
                  <StarIcon color={colors.bittersweet["500"]} />
                  <StarIcon color={colors.bittersweet["500"]} />
                  <StarIcon />
                  <StarIcon />
                </HStack>
              </Flex>
            </Box>
            <HStack justifyContent="flex-end">
              {/* {contact && <ModalEditContact contact={contact} />} */}
              <Button colorScheme="primary" variant="outline">
                Dar de baja
              </Button>
              <AlertDialog
                title="Eliminar Contacto"
                subtitle="¿Está seguro? No podrá deshacer esta acción después"
                button={
                  <Button colorScheme="bittersweet" variant="outline">
                    Eliminar
                  </Button>
                }
                btnPri={{
                  colorSchema: "red",
                  label: "Eliminar",
                  onClick: onDelete,
                }}
              />
            </HStack>
          </CardContainer>
        </Card>
      </GridItem>
      <GridItem colSpan={4}>
        <Card>
          <CardContainer>
            <List spacing={3}>
              <ListItem px="5">
                <HStack justifyContent="space-between">
                  <HStack>
                    <ListIcon as={DownloadSupportIllustration} color="green.500" />
                    <Text>Campañas Recibidas</Text>
                  </HStack>
                  <b>1</b>
                </HStack>
              </ListItem>
              <Divider my="0.5" />
              <ListItem px="5">
                <HStack justifyContent="space-between">
                  <HStack>
                    <ListIcon as={OpenEnvelopeIllustration} color="green.500" />
                    <Text>Abiertas</Text>
                  </HStack>
                  <b>1</b>
                </HStack>
              </ListItem>
              <Divider my="0.5" />
              <ListItem px="5">
                <HStack justifyContent="space-between">
                  <HStack>
                    <ListIcon as={LoveLetterIconIllustration} color="green.500" />
                    <Text>Clicks</Text>
                  </HStack>
                  <b>1</b>
                </HStack>
              </ListItem>
              <Divider my="0.5" />
            </List>
          </CardContainer>
        </Card>
      </GridItem>
    </SimpleGrid>
  );
};
