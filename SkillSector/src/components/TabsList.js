import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


class TabsList extends React.Component  {
    render() {
     return(
        <div>
        <Tabs>
      <TabList>
        <Tab>Profile</Tab>
        <Tab>Edit</Tab>
      </TabList>
      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
    </div>
    );
}
}
export default TabsList;
