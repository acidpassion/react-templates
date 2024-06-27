'use client'

// React Imports
import { useState } from 'react'
import type { SyntheticEvent, ReactElement } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import Typography from '@mui/material/Typography'

// Component Imports
import CustomTabList from '@core/components/mui/TabList'

const Settings = ({ tabContentList }: { tabContentList: { [key: string]: ReactElement } }) => {
  // States
  const [activeTab, setActiveTab] = useState('store-details')

  const handleChange = (event: SyntheticEvent, value: string) => {
    setActiveTab(value)
  }

  return (
    <div className='flex flex-col gap-4'>
      <Typography variant='h5'>Getting Started</Typography>
      <TabContext value={activeTab}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <CustomTabList orientation='vertical' onChange={handleChange} className='is-full' pill='true'>
              <Tab
                label='Store Details'
                icon={<i className='tabler-building-store' />}
                iconPosition='start'
                value='store-details'
                className='flex-row justify-start !min-is-full'
              />
              <Tab
                label='Payments'
                icon={<i className='tabler-credit-card' />}
                iconPosition='start'
                value='payments'
                className='flex-row justify-start !min-is-full'
              />
              <Tab
                label='Checkout'
                icon={<i className='tabler-shopping-cart' />}
                iconPosition='start'
                value='checkout'
                className='flex-row justify-start !min-is-full'
              />
              <Tab
                label='Shipping & Delivery'
                icon={<i className='tabler-discount' />}
                iconPosition='start'
                value='shipping-delivery'
                className='flex-row justify-start !min-is-full'
              />
              <Tab
                label='Locations'
                icon={<i className='tabler-map-pin' />}
                iconPosition='start'
                value='locations'
                className='flex-row justify-start !min-is-full'
              />
              <Tab
                label='Notifications'
                icon={<i className='tabler-bell-ringing' />}
                iconPosition='start'
                value='notifications'
                className='flex-row justify-start !min-is-full'
              />
            </CustomTabList>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <TabPanel value={activeTab} className='p-0'>
                  {tabContentList[activeTab]}
                </TabPanel>
              </Grid>
              <Grid item xs={12}>
                <div className='flex justify-end gap-4'>
                  <Button variant='tonal' color='secondary'>
                    Discard
                  </Button>
                  <Button variant='contained'>Save Changes</Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabContext>
    </div>
  )
}

export default Settings
