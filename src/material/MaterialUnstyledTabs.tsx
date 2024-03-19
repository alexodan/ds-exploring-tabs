import * as React from 'react'
import Box from '@mui/material/Box'
import { Tab } from '@mui/base/Tab'
import { Tabs } from '@mui/base/Tabs'
import { TabsList } from '@mui/base/TabsList'
import { TabPanel } from '@mui/base/TabPanel'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs() {
  const [value] = React.useState(1)

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue)
  // }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            defaultValue={value}
            // onChange={handleChange}
            aria-label="basic tabs example"
          >
            <TabsList>
              <Tab value={1} {...a11yProps(0)}>
                Item 1
              </Tab>
              <Tab value={2} {...a11yProps(1)}>
                Item 2
              </Tab>
              <Tab value={3} {...a11yProps(2)}>
                Item 3
              </Tab>
            </TabsList>
            <TabPanel value={1}>Item One</TabPanel>
            <TabPanel value={2}>Item Two</TabPanel>
            <TabPanel value={3}>Item Three</TabPanel>
          </Tabs>
        </Box>
      </Box>
    </>
  )
}
