import React, { FC } from "react";
import { Box, HStack, IconButton, Text, Divider } from "@chakra-ui/react";
import { Card } from "@/components";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "react-feather";
import numeral from "numeral";
import { Pagination } from "src/types";

interface TablePaginationProps extends Pagination {
  onFirstPage?(): void;
  onNextPage?(): void;
  onPrevPage?(): void;
  onLastPage?(): void;
  onClickButton?(url: string): void;
}

export const TablePagination: FC<TablePaginationProps> = (props) => {
  const {
    perPage,
    total,
    currentPage,
    totalPages,
    firstPageUrl,
    prevPageUrl,
    nextPageUrl,
    lastPageUrl,
    onNextPage,
    onPrevPage,
    onLastPage,
    onClickButton,
  } = props;

  return (
    <div>
      <Box>
        <Card padding={1}>
          <HStack justifyContent="space-between">
            <HStack>
              {[20, 50, 100].map((item) => (
                <IconButton
                  key={item}
                  colorScheme={perPage === item ? "secondary" : "gray"}
                  variant={perPage === item ? "solid" : "ghost"}
                  _focus={{}}
                  size="sm"
                  icon={<Text>{item}</Text>}
                  aria-label="left"
                />
              ))}
            </HStack>
            <HStack alignItems="center">
              <Text userSelect="none" fontSize="sm" fontWeight="medium">
                {numeral(total).format("0,0")} Items
              </Text>
              <Divider height="6" width="1px" border="1px" bgColor="gray.400" />
              <IconButton
                variant="ghost"
                _focus={{}}
                size="sm"
                icon={<ChevronsLeft size="1.25rem" />}
                aria-label="left"
                isDisabled={currentPage === 1}
                onClick={() => {
                  onClickButton && onClickButton(firstPageUrl);
                }}
              />
              <IconButton
                variant="ghost"
                _focus={{}}
                size="sm"
                icon={<ChevronLeft size="1.25rem" />}
                aria-label="left"
                isDisabled={currentPage === 1}
                onClick={() => {
                  onClickButton && onClickButton(prevPageUrl);
                }}
              />
              <IconButton
                variant="unstyled"
                _focus={{}}
                size="sm"
                icon={
                  <Text>
                    {numeral(currentPage).format("0,0")} -{" "}
                    {numeral(totalPages).format("0,0")}
                  </Text>
                }
                aria-label="left"
              />
              {/* {links.map((item) => {
            const { isActive } = item;
            return (
              <IconButton
                key={item.url}
                variant={isActive ? "solid" : "ghost"}
                _focus={{}}
                size="sm"
                icon={<Text>{item.label}</Text>}
                aria-label="left"
                colorScheme={isActive ? "secondary" : "gray"}
              />
            );
          })} */}
              <IconButton
                variant="ghost"
                _focus={{}}
                size="sm"
                icon={<ChevronRight size="1.25rem" />}
                aria-label="right"
                onClick={() => {
                  onClickButton && onClickButton(nextPageUrl);
                }}
              />
              <IconButton
                variant="ghost"
                _focus={{}}
                size="sm"
                icon={<ChevronsRight size="1.25rem" />}
                aria-label="right"
                onClick={() => {
                  onClickButton && onClickButton(lastPageUrl);
                }}
              />
            </HStack>
          </HStack>
        </Card>
      </Box>
    </div>
  );
};
