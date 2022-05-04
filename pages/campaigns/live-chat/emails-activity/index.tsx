import React from "react";

import { NextPage } from "next";
import {
  ButtonBack,
  Card,
  CardContainer,
  FormProvider,
  InputControl,
  InputTextareaControl,
  MainContainer,
  TabBarsEnclosed,
} from "@/components";
import { chakra, Box, GridItem, SimpleGrid, Stack, Text, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import { withAuth } from "@/hocs";

const EmailsActivityPage: NextPage = () => {
  return (
    <MainContainer>
      {/* <MessegerServicesAvailable/> */}
      <TabBarsEnclosed
        items={[
          { label: "Número de Whatsapp", PanelComponent: WhatsappNumberPanel },
          { label: "Asistente Digital", PanelComponent: DigitalAssistant },
        ]}
        rightComponent={<ButtonBack pathname="/campaigns/live-chat" />}
      />
    </MainContainer>
  );
};

const WhatsappNumberPanel = () => {
  return (
    <Box>
      <Card>
        <CardContainer>
          <SimpleGrid gap={5} columns={12}>
            <GridItem colSpan={12}>
              <Text fontWeight="medium" color="black" fontSize="xl">
                Configura tu número de Whatsapp
              </Text>
            </GridItem>
            <GridItem colSpan={5}>
              <Box mb={5}>
                <Text mb="1" fontWeight="medium" color="black" fontSize="xl">
                  Whatsapp Business API Account Submission
                </Text>
                <Text lineHeight="5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quibusdam beatae excepturi quod! Ad
                  aspernatur repellendus, dolor numquam placeat odio et est nam saepe totam velit aperiam deserunt quas
                  aliquid?
                </Text>
                <Text>
                  Ya tienes una cuenta?{" "}
                  <Link href="">
                    <a>
                      <chakra.span color="blue.600" textDecor="underline">
                        Inicia sesión
                      </chakra.span>
                    </a>
                  </Link>
                </Text>
              </Box>
              <WhatsappNumberForm />
            </GridItem>

            <GridItem colSpan={3}>
              <Text fontWeight="medium" color="gray.800" fontSize="lg">
                Información de Ayuda
              </Text>{" "}
              <br />
              <Text lineHeight="5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Text>
              <br />
              <Text lineHeight="5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </Text>
            </GridItem>
          </SimpleGrid>
        </CardContainer>
      </Card>
    </Box>
  );
};

const WhatsappNumberForm = () => {
  return (
    <FormProvider
      id="whatsapp-number-form"
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Stack>
        <InputControl formControl={{ label: "Correo electrónico" }} name="email" rules={{ required: true }} />
        <InputControl formControl={{ label: "Nombre completo" }} name="fullname" rules={{ required: true }} />
        <InputTextareaControl
          formControl={{ label: "Detalles de la empresa" }}
          name="businessDetails"
          rules={{ required: true }}
        />
      </Stack>
    </FormProvider>
  );
};

const DigitalAssistant = () => {
  return (
    <Box>
      <SimpleGrid gap={2} columns={12}>
        <GridItem colSpan={12}>
          <Card>
            <CardContainer>
              {" "}
              <Text fontWeight="medium" color="black" fontSize={[null, null, null, "xl"]}>
                Conecta tu número de Whatsapp con un Asistente Digital
              </Text>
            </CardContainer>
          </Card>
        </GridItem>
        <GridItem colSpan={[12, null, null, 6, 4]}>
          <Stack>
            <Card borderLeftWidth="4px" borderLeftColor="red.500">
              <CardContainer>
                <Flex justifyContent="space-between" alignItems="center">
                  <Box userSelect="none">
                    <Text fontWeight="semibold" lineHeight="5">
                      Nombre de Cola 1
                    </Text>
                    <Text color="gray.600" lineHeight="5">
                      Descripción de Cola 1
                    </Text>
                  </Box>
                  <Button size="sm" w="20" colorScheme="green">
                    Activo
                  </Button>
                </Flex>
              </CardContainer>
            </Card>
            <Card borderLeftWidth="4px" borderLeftColor="blue.500">
              <CardContainer>
                <Flex justifyContent="space-between" alignItems="center">
                  <Box userSelect="none">
                    <Text fontWeight="semibold" lineHeight="5">
                      Nombre de Cola 1
                    </Text>
                    <Text color="gray.600" lineHeight="5">
                      Descripción de Cola 1
                    </Text>
                  </Box>
                  <Button size="sm" w="20" colorScheme="red">
                    Apagado
                  </Button>
                </Flex>
              </CardContainer>
            </Card>
            <Card borderLeftWidth="4px" borderLeftColor="yellow.500">
              <CardContainer>
                <Flex justifyContent="space-between" alignItems="center">
                  <Box userSelect="none">
                    <Text fontWeight="semibold" lineHeight="5">
                      Nombre de Cola 1
                    </Text>
                    <Text color="gray.600" lineHeight="5">
                      Descripción de Cola 1
                    </Text>
                  </Box>
                  <Button size="sm" w="20" colorScheme="red">
                    Apagado
                  </Button>
                </Flex>
              </CardContainer>
            </Card>
          </Stack>
        </GridItem>
        <GridItem colSpan={[12, null, null, 6, 8]}>
          <Card>
            <CardContainer>
              <Box maxW="3xl">
                <Text fontWeight="medium" color="gray.800" fontSize="lg">
                  Información de Ayuda
                </Text>{" "}
                <br />
                <Text lineHeight="5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Text>
                <br />
                <Text lineHeight="5">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </Text>
              </Box>
            </CardContainer>
          </Card>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default withAuth(EmailsActivityPage);
