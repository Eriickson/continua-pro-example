import React, { FC } from "react";

import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { Card, CardContainer } from "@/components";
import { ContinuaProIcon } from "@/assets";
import { useRouter } from "next/router";

interface EditorPreviewHeadProps {
  onSave(): void;
}

export const EditorPreviewHead: FC<EditorPreviewHeadProps> = ({ onSave }) => {
  const { query, push } = useRouter();

  return (
    <div>
      <Card>
        <CardContainer>
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Box w="64">
                <ContinuaProIcon />
              </Box>
            </Box>
            <HStack>
              <Button variant="ghost" onClick={() => push(`/campaigns/mailing/${query.id}/settings-view`)}>
                Cancelar
              </Button>
              <Button colorScheme="primary" onClick={onSave}>
                Guardar Cambios
              </Button>
            </HStack>
          </Flex>
        </CardContainer>
      </Card>
    </div>
  );
};
