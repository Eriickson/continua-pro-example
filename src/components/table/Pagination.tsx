import { Button, HStack, IconButton } from "@chakra-ui/react";
import React, { FC } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { CardContainer } from "../cards/CardContainer";

interface TableProps {
  nextPage(): void;
  prevPage(): void;
}

export const Pagination: FC<TableProps> = ({ nextPage, prevPage }) => {
  return (
    <CardContainer>
      <HStack justifyContent="flex-end">
        <IconButton
          size="sm"
          rounded="sm"
          variant="outline"
          aria-label="pagination prev"
          onClick={prevPage}
        >
          <ChevronLeft />
        </IconButton>
        {[1, 2, 3, 4, 5].map((item) => (
          <Button
            rounded="sm"
            variant={item === 1 ? "solid" : "outline"}
            fontWeight="normal"
            colorScheme={item === 1 ? "primary" : "gray"}
            key={item}
            size="sm"
          >
            {item}
          </Button>
        ))}
        <IconButton
          size="sm"
          rounded="sm"
          variant="outline"
          aria-label="pagination next"
          onClick={nextPage}
        >
          <ChevronRight />
        </IconButton>
      </HStack>
    </CardContainer>
  );
};
