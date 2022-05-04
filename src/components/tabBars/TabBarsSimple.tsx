import React, { FC, ReactElement } from "react";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  TabsProps,
} from "@chakra-ui/react";
import { TabBarItems } from "./TabBarItem";
import { Card } from "../cards/Card";

interface TabBarsSimpleProps {
  items: TabBarItems[];
  rightComponent?: ReactElement;
  tabsProps?: Omit<TabsProps, "children">;
}

export const TabBarsSimple: FC<TabBarsSimpleProps> = ({
  items,
  rightComponent,
  tabsProps,
}) => {
  return (
    <Tabs {...tabsProps}>
      <Card>
        <Flex /* maxW="81vw"  */
          alignItems="flex-end"
          borderColor="gray.400"
          justifyContent="space-between"
          overflowX="auto"
          overflowY="hidden"
          pr="2"
        >
          <TabList border="none" w="max-content">
            {items.map((item, i) => (
              <Tab
                py="3.5"
                _selected={{
                  borderColor: "orange.500",
                  color: "black",
                }}
                _focus={{ ring: "none" }}
                key={i}
                color="gray.400"
                fontWeight="medium"
                _active={{ bgColor: "yellow.50" }}
                w="max-content"
                mb="0"
              >
                {item.label}
              </Tab>
            ))}
          </TabList>
          <Box mb="2">{rightComponent}</Box>
        </Flex>
      </Card>
      <TabPanels>
        {items.map(({ PanelComponent }, i) => (
          <TabPanel py="2" px="0" key={i}>
            {PanelComponent && <PanelComponent />}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
