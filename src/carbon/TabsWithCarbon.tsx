import { Tab, TabPanel, TabPanels, Tabs, TabList } from '@carbon/react'
import './carbon.scss'

export default function MyComponent() {
  return (
    <>
      <h2>Tabs with Carbon (IBM)</h2>
      <Tabs>
        <TabList aria-label="List of tabs">
          <Tab>Dashboard</Tab>
          <Tab>Monitoring</Tab>
          <Tab>Activity</Tab>
          <Tab disabled>Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Tab Panel 1</TabPanel>
          <TabPanel>Tab Panel 2</TabPanel>
          <TabPanel>Tab Panel 3</TabPanel>
          <TabPanel>Tab Panel 4</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
