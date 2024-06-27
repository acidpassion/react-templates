'use client'

// React Imports
import { useState } from 'react'
import type { SyntheticEvent, ReactElement } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'

// Component Imports
import CustomTabList from '@core/components/mui/TabList'

const AccountSettings = ({ tabContentList }: { tabContentList: { [key: string]: ReactElement } }) => {
  // States
  const [activeTab, setActiveTab] = useState('account')

  const handleChange = (event: SyntheticEvent, value: string) => {
    setActiveTab(value)
  }

  return (
    <TabContext value={activeTab}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <CustomTabList onChange={handleChange} variant='scrollable' pill='true'>
            <Tab label='Account' icon={<i className='tabler-users' />} iconPosition='start' value='account' />
            <Tab label='Security' icon={<i className='tabler-lock' />} iconPosition='start' value='security' />
            <Tab
              label='Billing & Plans'
              icon={<i className='tabler-bookmark' />}
              iconPosition='start'
              value='billing-plans'
            />
            <Tab
              label='Notifications'
              icon={<i className='tabler-bell' />}
              iconPosition='start'
              value='notifications'
            />
            <Tab label='Connections' icon={<i className='tabler-link' />} iconPosition='start' value='connections' />
          </CustomTabList>
        </Grid>
        <Grid item xs={12}>
          <TabPanel value={activeTab} className='p-0'>
            {tabContentList[activeTab]}
          </TabPanel>
        </Grid>
      </Grid>
    </TabContext>
  )
}

export default AccountSettings
