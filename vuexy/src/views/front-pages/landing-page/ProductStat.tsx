// React Imports
import type { ReactNode } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// SVG Imports
import Check from '@assets/svg/front-pages/landing-page/Check'
import User from '@assets/svg/front-pages/landing-page/User'
import LaptopCharging from '@assets/svg/front-pages/landing-page/LaptopCharging'
import Diamond from '@assets/svg/front-pages/landing-page/Diamond'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

// Type
type StatData = {
  title: string
  value: string
  svg: ReactNode
  color: string
  isHover: boolean
}

// Data
const statData: StatData[] = [
  {
    title: 'Support Tickets Resolved',
    value: '7.1k+',
    svg: <LaptopCharging color='var(--mui-palette-primary-main)' />,
    color: 'var(--mui-palette-primary-darkerOpacity)',
    isHover: false
  },
  {
    title: 'Join creatives community',
    value: '50k+',
    svg: <User color='var(--mui-palette-success-main)' />,
    color: 'var(--mui-palette-success-darkerOpacity)',
    isHover: false
  },
  {
    title: 'Highly Rated Products',
    value: '4.8/5',
    svg: <Diamond color='var(--mui-palette-info-main)' />,
    color: 'var(--mui-palette-info-darkerOpacity)',
    isHover: false
  },
  {
    title: 'Money Back Guarantee',
    value: '100%',
    svg: <Check color='var(--mui-palette-warning-main)' />,
    color: 'var(--mui-palette-warning-darkerOpacity)',
    isHover: false
  }
]

const ProductStat = () => {
  return (
    <section className='plb-[64px] bg-backgroundPaper'>
      <div className={frontCommonStyles.layoutSpacing}>
        <Grid container spacing={6}>
          {statData.map((stat, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <div
                className='flex flex-col items-center justify-center gap-y-4 border p-6 rounded'
                style={{
                  borderColor: stat.color
                }}
              >
                {stat.svg}
                <div className='text-center'>
                  <Typography variant='h3' className='font-medium'>
                    {stat.value}
                  </Typography>
                  <Typography className='font-medium' color='text.secondary'>
                    {stat.title}
                  </Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  )
}

export default ProductStat
