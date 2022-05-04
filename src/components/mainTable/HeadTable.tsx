import React, { FC, useState } from "react";
import { Thead, Tr, Th, HStack, Text, Flex, Checkbox } from "@chakra-ui/react";
import { ChevronDown, ChevronUp } from "react-feather";
import { TableLayout } from "src/types";

interface HeadTableProps {
  isLoading: boolean;
  layout: TableLayout;
  setIsLoading(newValue: boolean): void;
  rowSelection?: string;
  hasOptionMenu: boolean;
  sortData(path: string, sort: "desc" | "asc"): void;
}

export const HeadTable: FC<HeadTableProps> = ({ layout, rowSelection = "none", hasOptionMenu, sortData }) => {
  const [sorting, setSorting] = useState<{
    field: string;
    sort: "desc" | "asc";
  }>({ field: "", sort: "desc" });

  async function handlerSorting({ column }: any) {
    setSorting((prev) => ({
      field: column.path,
      sort: prev?.sort === "asc" ? "desc" : "asc",
    }));
    sortData(column.path, sorting.sort === "asc" ? "desc" : "asc");
  }

  return (
    <>
      <Thead width="max-content">
        <Tr width="max-content">
          {rowSelection === "multiple" && (
            <Th w="1">
              <Checkbox _focus={{}} />
            </Th>
          )}
          {layout.columns.map((column) => (
            <Th width="max-content" key={column.path}>
              <HStack width="max-content" py="2">
                <Flex
                  width="max-content"
                  cursor="pointer"
                  alignItems="center"
                  onClick={() => handlerSorting({ column })}
                >
                  <Text width="max-content" userSelect="none" mr="1">
                    {column.label}
                  </Text>
                  {sorting && sorting.field === column.path && (
                    <>{sorting.sort === "desc" ? <ChevronDown size="1.25rem" /> : <ChevronUp size="1.25rem" />}</>
                  )}
                </Flex>
              </HStack>
            </Th>
          ))}
          {hasOptionMenu && <Th w="1"></Th>}
        </Tr>
      </Thead>
    </>
  );
};
