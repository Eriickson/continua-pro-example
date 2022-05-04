import { Card, CardContainer, InputControl, WizardStepProps } from "@/components";
import { FormProvider } from "@/providers";
import { useAction, useSelector } from "@/store";
import { Box, Link as ChakraLink, Flex, HStack, Stack, Tag, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

interface Step2Props extends WizardStepProps {}

export const Step2: FC<Step2Props> = ({ nextStep }) => {
  const { updateInstructions } = useAction();
  const { data } = useSelector(({ dnsSettings }) => dnsSettings.validateDomain);
  const { isLoading } = useSelector(({ dnsSettings }) => dnsSettings.updateInstructions);

  async function verifyDns() {
    if (data) {
      const { dkim, spf } = data;
      await updateInstructions({ dns_setting: { dkim, spf } });
      nextStep();
    }
  }

  return (
    <Stack>
      <Card>
        <CardContainer>
          <Box>
            <Text fontSize="lg" mb="2">
              Instrucciones de configuración para <b>{data?.domain}</b>
            </Text>
            <Stack>
              <Box>
                <HStack alignItems="flex-start">
                  <Tag mb="2" colorScheme="green">
                    SenderID/SPF
                  </Tag>
                  <Text flex="1">
                    Para asegurar el envío de sus emails, le recomendamos verificar el dominio del remitente que
                    utilizará para enviar sus campañas. Por favor configure las siguientes entradas en su DNS:
                  </Text>
                </HStack>
                <HStack
                  px="3"
                  py="2"
                  border="1px"
                  color="gray.600"
                  fontWeight="semibold"
                  fontSize="lg"
                  fontFamily="Roboto Slab"
                  borderColor="gray.300"
                  shadow="sm"
                >
                  <Text flex="1">{data?.spf.split(/\s/)[0]}</Text>
                  <Text textAlign="center" flex="1">
                    {data?.spf.split(/\s/)[1]}
                  </Text>
                  <Text textAlign="end" flex="1">
                    {data?.spf.split(/\s/).splice(2, data.spf.split(/\s/).length).join(" ")}
                  </Text>
                </HStack>
              </Box>
              <Box>
                <HStack alignItems="flex-start">
                  <Tag mb="2" colorScheme="green">
                    DKIM
                  </Tag>
                  <Text flex="1">
                    Agregar un registro CNAME a los DNS para autenticación DKIM. Te ofrecemos tres formas distintas para
                    acerolo, elige la que prefieras.
                  </Text>
                </HStack>
                <HStack
                  px="3"
                  py="2"
                  border="1px"
                  color="gray.600"
                  fontWeight="semibold"
                  fontSize="lg"
                  fontFamily="Roboto Slab"
                  borderColor="gray.300"
                  shadow="sm"
                >
                  <Text flex="1">{data?.dkim.split(/\s/)[0]}</Text>
                  <Text textAlign="center" flex="1">
                    {data?.dkim.split(/\s/)[1]}
                  </Text>
                  <Text textAlign="end" flex="1">
                    {data?.dkim.split(/\s/).splice(2, data.dkim.split(/\s/).length).join(" ")}
                  </Text>
                </HStack>
              </Box>
            </Stack>
          </Box>
        </CardContainer>
      </Card>
      <Flex justifyContent="space-between">
        <Box fontWeight="bold" color="gray.800" display="flex">
          <Text mr="1.5" color="primary.500" textDecor="underline">
            <Link href="">
              <a>Descargue estas instrucciones</a>
            </Link>
          </Text>
          y envíelas a su administrador de sistemas.
        </Box>
        <Button colorScheme="primary" onClick={verifyDns} isLoading={isLoading} loadingText="Verificando DNS...">
          Verificar DNS
        </Button>
      </Flex>
    </Stack>
  );
};
