import React, { FC, useEffect, useState } from "react";
import { Table, Tbody, Tr, Box, Stack, Flex, CircularProgress, Td, Checkbox, Text } from "@chakra-ui/react";
import { Card } from "@/components";
import { useDebounce } from "use-debounce";
import { TablePagination } from "./Pagination";

import arraySort from "array-sort";

const getByString = function (o: any, s: any) {
  s = s.replace(/\[(\w+)\]/g, ".$1");
  s = s.replace(/^\./, "");
  var a = s.split(".");
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
};

import jsonResponse from "src/json/pagination.json";
import { HeadTable } from "./HeadTable";
import { TableLayout } from "src/types";
import { TextColumn } from "./columns/TextColumn";
import { TableMenu } from "./menu/TableMenu";

type HandleSearchType = {
  fieldName: string;
  value: string;
};

interface OptionMenu {
  items: {
    Component: FC<{ args: { item: any } }>;
  }[];
}

interface MainTableProps {
  layout: TableLayout;
  rowSelection?: string;
  data?: any[];
  optionMenu?: OptionMenu;
  onClickRow?(row: any): void;
}

export const MainTable: FC<MainTableProps> = (props) => {
  const { layout, rowSelection, data, optionMenu, onClickRow } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [dataInternal, setDataInternal] = useState<any[]>([]);

  // Debounce
  const [isLoadingDebounce] = useDebounce(isLoading, 1000);

  async function handleSearch({ value }: HandleSearchType) {
    if (!value || value.length < 3) return;
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }

  function sortData(path: string, sort: "desc" | "asc") {
    const dataSorted = arraySort([...dataInternal], path, { reverse: sort !== "desc" });
    setDataInternal(dataSorted);
  }

  useEffect(() => {
    data && setDataInternal(data);
  }, [data]);

  return (
    <div>
      <Stack pb="5">
        <Card pos={isLoadingDebounce ? "relative" : "initial"} maxH={isLoadingDebounce ? "83vh" : ""} overflow="hidden">
          {isLoadingDebounce && (
            <>
              <Box pos="absolute" inset="0" bgColor="white" opacity="0.7" zIndex="10" />
              <Flex alignItems="center" justifyContent="center" zIndex="10" pos="absolute" inset="0">
                <CircularProgress color="secondary.500" isIndeterminate />
              </Flex>
            </>
          )}

          <Table minW="max-content" size="sm" textAlign="left" pos={isLoadingDebounce ? "relative" : "initial"}>
            <HeadTable
              isLoading={isLoadingDebounce}
              setIsLoading={setIsLoading}
              hasOptionMenu={Boolean(optionMenu?.items.length)}
              sortData={sortData}
              {...props}
            />
            <Tbody>
              {!(Array.isArray(dataInternal) ? dataInternal : []).length && (
                <Tr
                  _hover={{
                    transition: "150ms",
                    bgColor: "gray.100",
                  }}
                >
                  <Td colSpan={layout.columns.length}>
                    <Text textAlign="center" fontWeight="semibold" color="gray.600">
                      No hay datos que mostrar
                    </Text>
                  </Td>
                </Tr>
              )}
              {(Array.isArray(dataInternal) ? dataInternal : []).map((item: any) => (
                <Tr
                  cursor="pointer"
                  _hover={{
                    transition: "150ms",
                    bgColor: "gray.100",
                  }}
                  key={item.id}
                  onClick={() => onClickRow?.(item)}
                >
                  {rowSelection === "multiple" && (
                    <Td>
                      <Checkbox colorScheme="secondary" />
                    </Td>
                  )}

                  {layout.columns.map((column) => {
                    return column.customComponent ? (
                      <Td key={column.path}>
                        <column.customComponent row={item} />
                      </Td>
                    ) : (
                      <TextColumn key={column.path} value={getByString(item, column.path)} />
                    );
                  })}
                  {optionMenu && optionMenu.items.length && (
                    <Td onClick={(e) => e.stopPropagation()}>
                      <TableMenu item={item} items={optionMenu.items} />
                    </Td>
                  )}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Card>
        <TablePagination
          {...jsonResponse.metadata.pagination}
          total={data?.length || 0}
          totalPages={1}
          onClickButton={(url) => {}}
        />
      </Stack>
    </div>
  );
};
