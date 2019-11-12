import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/core";
import BlogsPageContainer from "./BlogsPageContainer";
import EntriesPageContainer from "./EntriesPageContainer";

const TabMenu = () => (
  <Tabs variant="enclosed-colored">
    <TabList>
      <Tab>Blogs</Tab>
      <Tab>Entries</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <BlogsPageContainer />
      </TabPanel>
      <TabPanel>
        <EntriesPageContainer />
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export default TabMenu;
