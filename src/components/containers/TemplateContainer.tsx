import { Box, Flex, List, ListItem, Text, VStack, Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarIcon,
  ContiunaProIsotype,
  GridIcon,
  ListItemsIcon,
  MailsIcon,
  SettingsIcon,
  UsersArrowsIcon,
} from "../../assets";
import { StatisticsIcon } from "../../assets/icons/Statistics";
import { colors } from "../../themes/color";
import { MainHeader } from "../headers/MainHeader";
import { Users } from "react-feather";

interface TemplateContainerProps {
  title: string;
  subtitle?: string;
}

export const TemplateContainer: FC<TemplateContainerProps> = ({ children, title, subtitle }) => {
  const { pathname, push } = useRouter();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [menuItems] = useState([
    {
      label: "Dashboard",
      icon: GridIcon,
      pathname: "/dashboard",
    },
    {
      label: "Cuentas",
      icon: () => (
        <Box>
          <Users size="1.25rem" />
        </Box>
      ),
      pathname: "/accounts",
    },
    {
      label: "Reportes",
      icon: StatisticsIcon,
      pathname: "/administrative-reports",
    },
    {
      label: "Marketplace",
      icon: CalendarIcon,
      pathname: "/marketplace",
    },
    {
      label: "Plan Manager",
      icon: ListItemsIcon,
      pathname: "/plans-manager",
    },
    {
      label: "Notificaciones",
      icon: MailsIcon,
      pathname: "/notificacions",
    },
    {
      label: "Clientes",
      icon: UsersArrowsIcon,
      pathname: "/customers",
    },
    {
      label: "Configuración",
      icon: SettingsIcon,
      pathname: "/configuration",
    },
  ]);

  function openDrawer(currentPathname: string) {
    pathname === currentPathname ? setIsOpenDrawer(!isOpenDrawer) : push(currentPathname);
  }

  return (
    <Box h="100vh">
      <Box pos="relative" display="flex">
        <Box h="100vh" pos="fixed" zIndex="100" borderRight="1px" borderColor="gray.200" bgColor="white">
          <VStack w="full" justifyContent="space-between" h="full" pt="4" pb="16">
            <Flex w="full" p="0" alignItems="flex-start" flexDir="column">
              <Flex pl={["3", null, "3.5"]} justifyContent="center" mb="10">
                <ContiunaProIsotype />
              </Flex>
              <List spacing="8">
                {menuItems.map((menuItem) => (
                  <ListItem key={menuItem.label}>
                    <Flex alignItems="center" justifyContent="flex-start">
                      <Flex px={["6", null, "6"]} pos="relative">
                        <Tooltip
                          display={isOpenDrawer ? "none" : "block"}
                          hasArrow
                          label={menuItem.label}
                          placement="right-end"
                          fontSize="md"
                          openDelay={500}
                        >
                          <Box onClick={() => openDrawer(menuItem.pathname)} p="0.5" cursor="pointer">
                            <menuItem.icon
                              color={pathname.includes(menuItem.pathname) ? colors.primary["500"] : undefined}
                            />
                          </Box>
                        </Tooltip>
                        {pathname.includes(menuItem.pathname) && (
                          <Box
                            pos="absolute"
                            top="55%"
                            right="0"
                            w="1"
                            h="10"
                            bgColor="secondary.500"
                            rounded="full"
                            transform="translateY(-50%)"
                          />
                        )}
                      </Flex>
                      <Box overflow="hidden" h="6">
                        <AnimatePresence>
                          {isOpenDrawer && (
                            <motion.div
                              initial={{ width: 0, opacity: 0 }}
                              animate={{
                                width: "max-content",
                                transition: { ease: "easeOut" },
                                opacity: 1,
                              }}
                              exit={{ width: 0, opacity: 0 }}
                              style={{ overflow: "hidden" }}
                            >
                              <Text
                                onClick={() => openDrawer(menuItem.pathname)}
                                cursor="pointer"
                                userSelect="none"
                                color={pathname.includes(menuItem.pathname) ? "primary.500" : "gray.600"}
                                fontWeight="medium"
                                ml="2.5"
                                pr={"14"}
                                width="max-content"
                              >
                                {menuItem.label}
                              </Text>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Box>
                    </Flex>
                  </ListItem>
                ))}
              </List>
            </Flex>
          </VStack>
        </Box>
        <Box minHeight="100vh" bgColor="gray.100" flex="1" pl="16">
          <MainHeader title={title} subtitle={subtitle} />
          <Box px={["1", null, "4"]} pt={["1", null, "2"]}>
            <Box pos="relative">
              {children}
              <AnimatePresence>
                {isOpenDrawer && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ zIndex: 100 }}
                  >
                    <Box
                      opacity="0.5"
                      zIndex="2"
                      pos="fixed"
                      w="full"
                      inset="0"
                      bgColor="black"
                      cursor="pointer"
                      onClick={() => setIsOpenDrawer(false)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
