import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  SimpleGrid,
  GridItem,
  Box,
  Text,
  Progress,
  Flex,
} from "@chakra-ui/react";

export const ReportStatusModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>ReportStatusModal</Button>
      <Modal isCentered size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Estatus de Solicitud de Reporte</ModalHeader>
          <ModalCloseButton _focus={{}} />
          <ModalBody>
            <SimpleGrid gap={5} columns={12}>
              <GridItem colSpan={4}>
                <Box>
                  <Text fontWeight="light" fontSize="sm" color="gray.700">
                    Canal seleccionado
                  </Text>
                  <Text color="primary.500" fontWeight="medium">
                    Email Marketing
                  </Text>
                </Box>
              </GridItem>
              <GridItem colSpan={12}>
                <Box>
                  <Flex mb="2" justifyContent="space-between">
                    <Text fontSize="sm" fontWeight="light">
                      21.63% Concluido
                    </Text>
                    <Text fontSize="sm" fontWeight="light">
                      25 minutos restantes
                    </Text>
                  </Flex>
                  <Progress colorScheme="secondary" value={10} />
                </Box>
              </GridItem>
            </SimpleGrid>
          </ModalBody>

          <ModalFooter px="3">
            <Button colorScheme="primary" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
