import React from "react";
import { MenuItem, Stack, Tag, Text } from "@chakra-ui/react";
import { MainTable } from "@/components";
import { useRouter } from "next/router";
import { DeleteCampaing } from "./DeleteCampaing";
import { useSelector } from "@/store";
import numeral from "numeral";

export const CampaingsPanel = () => {
  const { push, pathname } = useRouter();

  const { campaigns } = useSelector(({ campaigns }) => campaigns.sms);

  return (
    <div>
      <Stack spacing={2}>
        <Text>
          Recuerda que puedes descargar un listado de todos sus mensajes en el icono de “ver estatus de mensajes”
        </Text>
        <MainTable
          data={campaigns}
          layout={{
            columns: [
              { label: "Nombre", path: "name" },
              {
                label: "Estatus",
                path: "status",
                customComponent: ({ row }) => (
                  <>
                    <Text>{row.status}</Text>
                    <Text>
                      ({numeral(row.deivered).format("0,0")} de {numeral(row.sent).format("0,0")} mensaje)
                    </Text>
                  </>
                ),
              },
              {
                label: "Segmentos",
                customComponent: ({ row }) => (
                  <>
                    {row.contact_segment ? (
                      <Tag colorScheme="secondary" variant="outline" rounded="sm">
                        {row.contact_segment.name}
                      </Tag>
                    ) : (
                      <Text>-</Text>
                    )}
                  </>
                ),
                path: "segment",
              },
              { label: "Tasa de Entrega", path: "delivery_rate" },
              { label: "Costo", path: "cost" },
              { label: "Fecha de Programación", path: "scheduled_at" },
              { label: "Fecha de Ejecución", path: "executed_at" },
            ],
          }}
          onClickRow={(item) => {
            push(`${pathname.replace("/[id]", "")}/${item.id}`);
          }}
          optionMenu={{
            items: [
              {
                Component: ({ args }: any) => (
                  <MenuItem onClick={() => push(`/campaigns/sms/${args.item.id}/settings-view`)}>Editar</MenuItem>
                ),
              },
              { Component: ({ args }: any) => <DeleteCampaing id={args.item.id} /> },
            ],
          }}
        />
      </Stack>
    </div>
  );
};
