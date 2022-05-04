import { FormProvider } from "@/components";
import { useToast } from "@/hooks";
import { useAction } from "@/store";
import { getFormId } from "@/utils";
import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { FilterList } from "./FilterList";

// type ConditionType = "and" | "or";

// interface Condition {
//   operator: ConditionType;
//   conditions?: { field: string; operator: string; value: string };
// }

interface FilterProps extends FilterFormProps {}

export const Filter: FC<FilterProps> = ({ ...props }) => {
  return (
    <div>
      <FilterForm {...props} />
    </div>
  );
};

interface FilterFormProps {
  segmentId: number;
  setFilterActive: (value: boolean) => void;
}

const FilterForm: FC<FilterFormProps> = ({ setFilterActive, segmentId }) => {
  const { filterContacts, updateContactSegment } = useAction();

  const { showToast } = useToast();
  async function onSubmit(values: any) {
    delete values.field;
    delete values.gol;
    delete values.sdad;

    const conditions = values.conditions.map((condition: any, i: number) => {
      if (i === 0) {
        const newCondition = condition.conditions.map((condition: any) => ({
          ...condition,
          operator: condition?.operator?.value,
          field: condition?.field?.value,
        }));
        return { ...newCondition[0] };
      } else {
        return {
          ...condition,
          conditions: condition.conditions.map((condition: any) => ({
            ...condition,
            operator: condition?.operator?.value,
            field: condition?.field?.value,
          })),
        };
      }
    });

    const response: any = await filterContacts({ conditions });

    if (response?.payload?.status === 200) {
      await updateContactSegment({
        id: segmentId,
        contact_segment: { query_selector: response.payload.data.data.query_selector },
      });
      setFilterActive(false);
    } else {
      showToast({ title: "Sin resultados", description: "No se encontraron coincidencias", status: "warning" });
    }
  }

  return (
    <Box>
      <FormProvider id={getFormId(FilterForm)} onSubmit={onSubmit} defaultValues={{ conditions: [{}] }}>
        <FilterList />
      </FormProvider>
    </Box>
  );
};
