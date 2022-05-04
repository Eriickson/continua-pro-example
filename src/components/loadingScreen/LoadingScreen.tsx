import { Box, Center, Heading } from "@chakra-ui/react";
import React, { FC } from "react";
import { colors } from "../../themes/color";
import { TailSpin } from "react-loader-spinner";
import { AnimatePresence, motion } from "framer-motion";
export interface LoadingScreenProps {
  isLoading: boolean;
  label?: string;
}

export const LoadingScreen: FC<LoadingScreenProps> = ({ isLoading, label }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Box
            zIndex="100"
            h="100vh"
            w="100vw"
            pos="fixed"
            inset="0"
            bgColor="black"
            opacity={0.6}
          ></Box>
          <Center
            flexDir="column"
            zIndex="100"
            h="100vh"
            w="100vw"
            pos="fixed"
            inset="0"
          >
            <Box mb="10">
              <TailSpin
                width="100"
                color={colors.secondary["500"]}
                ariaLabel="loading-indicator"
              />
            </Box>
            <Heading fontWeight="medium" color="white">
              {label}
            </Heading>
          </Center>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

LoadingScreen.defaultProps = {
  label: "Cargando...",
  isLoading: false,
};
