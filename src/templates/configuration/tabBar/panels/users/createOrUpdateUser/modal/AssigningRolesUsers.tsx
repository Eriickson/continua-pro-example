import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Flex,
  Center,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { Edit, Eye, Save, Trash2 } from "react-feather";
import { Checkbox } from "@/components";
import { useSelector } from "@/store";
import { FormProvider } from "@/providers";

interface AssigningRolesUsersProps {
  roleSelected: string;
}

export const AssigningRolesUsers: FC<AssigningRolesUsersProps> = ({ roleSelected }) => {
  const { permissions } = useSelector(({ permissions }) => permissions);
  const [columns] = useState([
    { Icon: Eye, color: "blue" },
    { Icon: Save, color: "green" },
    { Icon: Edit, color: "orange" },
    { Icon: Trash2, color: "red" },
  ]);

  return (
    <Box>
      <FormProvider id="example-form" onSubmit={() => {}}>
        <Table>
          <Thead>
            <Tr>
              <Th p="0" border="none" fontSize="md" color="black" textTransform="capitalize">
                {roleSelected}
              </Th>
              {columns.map((column, i) => (
                <Th p="0" width="20" key={i} border="none" color="black" textTransform="capitalize" textAlign="center">
                  <Center>
                    <Box p="1" bgColor={`${column.color}.50`} color={`${column.color}.600`}>
                      <column.Icon size="1.25rem" />
                    </Box>
                  </Center>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {!permissions.length && (
              <Tr>
                <Td p="0" colSpan={5}>
                  <Alert mt="2" status="warning">
                    <AlertIcon />
                    <AlertDescription>Este rol no cuenta con permisos.</AlertDescription>
                  </Alert>
                </Td>
              </Tr>
            )}
            {permissions.map((permission) => (
              <Tr key={permission.accessScope}>
                <Td border="none" p="0" fontSize="sm" fontWeight="400" userSelect="none">
                  {permission.label}
                </Td>
                {permission.values.map((value) => (
                  <Td key={value.id} border="none" p="0" textAlign="center">
                    <Flex w="full" justifyContent="center">
                      <Checkbox name="example" isDisabled defaultChecked={value.granted} />
                    </Flex>
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </FormProvider>
    </Box>
  );
};
