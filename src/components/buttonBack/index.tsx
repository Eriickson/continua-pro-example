import React, { FC } from "react";

import { useRouter } from "next/router";

import { Button } from "@chakra-ui/react";
import { ArrowLeft } from "react-feather";

interface ButtonBackProps {
  pathname: string;
}

export const ButtonBack: FC<ButtonBackProps> = ({ pathname }) => {
  const { push } = useRouter();
  return (
    <div>
      <Button
        colorScheme="secondary"
        pl="3"
        variant="ghost"
        _focus={{}}
        leftIcon={<ArrowLeft size="1.25rem" />}
        onClick={() => push({ pathname /* query: { main_tabbar: 3 } */ })}
      >
        Regresar
      </Button>
    </div>
  );
};
