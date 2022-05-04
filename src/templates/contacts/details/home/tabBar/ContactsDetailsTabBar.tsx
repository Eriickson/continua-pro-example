import { TabBarsSimple } from "@/components";
import { Button, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { ArrowLeft } from "react-feather";
import { DetailsPanel } from "./panels/Details/DetailsPanel";
import { EmailPanel } from "./panels/email/EmailPanel";

export const ContactsDetailsTabBar = () => {
  const items = [
    { label: "Detalles", PanelComponent: DetailsPanel },
    { label: "Correo electrónicos", PanelComponent: EmailPanel },
  ];

  return (
    <TabBarsSimple
      items={items}
      rightComponent={
        <HStack>
          <Link href="/contacts">
            <a>
              <Button
                pl="3"
                fontSize="sm"
                variant="outline"
                colorScheme="secondary"
                leftIcon={<ArrowLeft size="1.25rem" />}
              >
                <Text ml="-1">Atrás</Text>
              </Button>
            </a>
          </Link>
        </HStack>
      }
    />
  );
};
