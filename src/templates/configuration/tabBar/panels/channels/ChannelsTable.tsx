import React, { useMemo } from "react";

import { useSelector } from "@/store";
import { MainTable } from "@/components";
import { useRouter } from "next/router";

export const ChannelsTable = () => {
  const { channels } = useSelector(({ channels }) => channels);
  const { push } = useRouter();

  const channelsList = useMemo(() => {
    const list = channels.map((channel) => {
      const { service_providers, ...rest } = channel;
      const serviceProvider = service_providers.find((sp) => sp.active);

      return { ...rest, serviceProvider };
    });

    return list;
  }, [channels]);

  return (
    <div>
      <MainTable
        onClickRow={(row) => push(`/channels/service-providers/${row.serviceProvider.id}`)}
        layout={{
          columns: [
            { label: "Nombre", path: "name" },
            { label: "Proveedor de servicios", path: "serviceProvider.name" },
          ],
        }}
        data={channelsList}
      />
    </div>
  );
};
