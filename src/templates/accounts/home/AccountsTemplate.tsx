import React, { useEffect } from "react";

import { MainTable, TemplateContainer } from "@/components";
import { useAction, useSelector } from "@/store";
import { HStack, Stack, Tag } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { DeleteAccount } from "./DeleteAccount";
import { NewAccount } from "./newAccount";

export const AccountsTemplate = () => {
  const { push } = useRouter();
  const { getAccounts } = useAction();

  const { accounts } = useSelector(({ accounts }) => accounts);

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <TemplateContainer title="Cuentas">
      <Stack>
        <HStack justifyContent="flex-end">
          <NewAccount />
        </HStack>
        <MainTable
          onClickRow={(row) => {
            push(`/accounts/${row.id}`);
          }}
          layout={{
            columns: [
              { label: "Nombre", path: "name" },
              { label: "Subdominio", path: "subdomain" },
              {
                label: "Host Status",
                path: "active",
                customComponent: ({ row }) => (
                  <Tag
                    w="16"
                    textAlign="center"
                    size="sm"
                    variant="solid"
                    rounded="sm"
                    colorScheme={row.active ? "green" : "red"}
                    fontWeight="medium"
                    justifyContent="center"
                    userSelect="none"
                  >
                    {row.active ? "Activo" : "Inactivo"}
                  </Tag>
                ),
              },
            ],
          }}
          data={accounts}
          optionMenu={{
            items: [{ Component: (props: any) => <DeleteAccount account={props.args.item} /> }],
          }}
        />
      </Stack>
    </TemplateContainer>
  );
};
