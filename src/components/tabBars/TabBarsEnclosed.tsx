import React, { FC, ReactElement } from "react";

import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Box } from "@chakra-ui/react";
import { TabBarItems } from "./TabBarItem";
import { Card } from "../cards/Card";

interface TabBarsSimpleProps {
  items: TabBarItems[];
  rightComponent?: ReactElement;
}

export const TabBarsEnclosed: FC<TabBarsSimpleProps> = ({ items, rightComponent }) => {
  return (
    <Tabs variant="enclosed">
      <Box mb={["2"]}>
        <Card>
          <Flex p="2" alignItems="center" borderColor="gray.400" justifyContent="space-between">
            <TabList margin="0" border="none">
              {items.map((tab, i) => (
                <Tab
                  mr="1"
                  px={["2", null, "4"]}
                  roundedTop="sm"
                  bgColor="gray.100"
                  color="gray.600"
                  borderWidth="1px"
                  borderColor="gray.200"
                  _selected={{
                    borderColor: "orange.100",
                    color: "orange.600",
                    bgColor: "orange.50",
                  }}
                  _focus={{ ring: "none" }}
                  key={i}
                  fontWeight="medium"
                  fontSize={"sm"}
                  w="max-content"
                >
                  {tab.label}
                </Tab>
              ))}
            </TabList>
            <Box>{rightComponent}</Box>
          </Flex>
        </Card>
      </Box>
      <TabPanels>
        {items.map(({ PanelComponent }, i) => (
          <TabPanel p="0" key={i}>
            {PanelComponent && <PanelComponent />}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
