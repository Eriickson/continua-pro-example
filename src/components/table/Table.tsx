import React, { FC } from "react";

import {
  Table as _Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Skeleton,
  MenuList,
  Menu,
  MenuButton,
  IconButton,
  Box,
  TableCaption,
} from "@chakra-ui/react";
import { MoreVertical } from "react-feather";

type TableCellType = "text" | "number" | "badge";

interface TableLayout {
  columns: {
    label: string;
    path: string;
    type?: TableCellType;
    styles?: Record<string, string>;
  }[];
}

interface TableProps {
  layout: TableLayout;
  isLoading?: boolean;
  data?: any[];
  onRowClick?({ data }: any): void;
  nextPage?(): void;
  prevPage?(): void;
  menuOptions?: { Component: FC<any> }[];
}

export const Table: FC<TableProps> = ({ data, layout, menuOptions, onRowClick, isLoading }) => {
  return (
    <div>
      <_Table w="full" variant="striped">
        {!data?.length && !isLoading && <TableCaption>No hay datos para mostrar</TableCaption>}
        <Thead>
          <Tr>
            {layout.columns.map((column, i) => (
              <Th key={i} py="5" px="4">
                {column.label}
              </Th>
            ))}
            {Boolean(menuOptions?.length) && <Th w="4"></Th>}
          </Tr>
        </Thead>
        <Tbody>
          {!isLoading ? (
            data?.map((item, i) => {
              return (
                <Tr key={i}>
                  {layout.columns.map((column) => (
                    <Td
                      onClick={() => onRowClick && onRowClick({ data: item })}
                      key={column.label}
                      w="12"
                      px="4"
                      py="3"
                      {...column.styles}
                    >
                      {column.type === "badge" ? (
                        <Badge colorScheme="blue">{item[column.path]}</Badge>
                      ) : (
                        item[column.path]
                      )}
                    </Td>
                  ))}
                  {Boolean(menuOptions?.length) && (
                    <Td w="4">
                      <Box w="max-content">
                        <Menu>
                          <MenuButton
                            size="sm"
                            as={IconButton}
                            icon={<MoreVertical size="1.25rem" />}
                            variant="ghost"
                            aria-label="table menu"
                          />
                          {menuOptions?.map((option, i) => (
                            <MenuList key={i}>
                              <option.Component item={item} />
                            </MenuList>
                          ))}
                        </Menu>
                      </Box>
                    </Td>
                  )}
                </Tr>
              );
            })
          ) : (
            <>
              <Tr>
                {layout.columns.map((column) => (
                  <Th key={column.label} py="3" px="4">
                    <Skeleton w="full" h="4" />
                  </Th>
                ))}
              </Tr>
              <Tr>
                {layout.columns.map((column) => (
                  <Th key={column.label} py="3" px="4">
                    <Skeleton w="full" h="4" />
                  </Th>
                ))}
              </Tr>
              <Tr>
                {layout.columns.map((column) => (
                  <Th key={column.label} py="3" px="4">
                    <Skeleton w="full" h="4" />
                  </Th>
                ))}
              </Tr>
            </>
          )}
        </Tbody>
      </_Table>
      {/* <Pagination nextPage={nextPage} prevPage={prevPage} /> */}
    </div>
  );
};
