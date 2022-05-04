import React from "react";

import { useRouter } from "next/router";

import { Tag } from "@chakra-ui/react";

import { MainTable } from "@/components";
import { useSelector } from "@/store";

export const SegmentPanel = () => {
  const { contactSegments } = useSelector(({ contactSegments }) => contactSegments);

  const { push } = useRouter();

  return (
    <div>
      <MainTable
        data={contactSegments}
        layout={{
          columns: [
            { label: "Nombre", path: "name" },
            { label: "Cantidad de contactos agregados", path: "contacts" },
            {
              label: "Sincronizados",
              path: "contacts",
              customComponent: ({ row }) => (
                <>
                  {row.synced ? (
                    <Tag colorScheme="green" size="sm">
                      Sincronizado
                    </Tag>
                  ) : (
                    <Tag colorScheme="red" size="sm">
                      No Sincronizado
                    </Tag>
                  )}
                </>
              ),
            },
          ],
        }}
        onClickRow={() => push("/contacts/segments/manage")}
      />
    </div>
  );
};
