import React from "react";

import { MainTable } from "@/components";
import { useSelector } from "@/store";
import { DeleteSuppressionItem } from "./DeleteSuppressionItem";

export const SuppressionListTable = () => {
  const { suppressionList } = useSelector(({ suppressionList }) => suppressionList);

  return (
    <div>
      <MainTable
        layout={{
          columns: [
            { label: "Email / Domain", path: "email_or_domain" },
            { label: "Source", path: "source" },
            {
              label: "",
              path: "x",
              customComponent: ({ row }) => {
                return <DeleteSuppressionItem suppressionId={row.id} />;
              },
            },
          ],
        }}
        data={suppressionList}
      />
    </div>
  );
};
