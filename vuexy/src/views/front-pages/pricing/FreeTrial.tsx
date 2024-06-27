// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

const FreeTrial = () => {
  return (
    <section className='bg-[var(--mui-palette-primary-lightOpacity)]'>
      <div className={classnames('flex justify-between flex-wrap md:relative', frontCommonStyles.layoutSpacing)}>
        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <div className='flex flex-col gap-11 md:mis-2 items-center md:items-start justify-center plb-12'>
              <div className='flex flex-col gap-2 mis-2 md:mis-0'>
                <Typography variant='h4' color='primary' className='font-medium'>
                  Still not convinced? Start with a 14-day FREE trial!
                </Typography>
                <Typography color='text.secondary'>
                  You will get full access to with all the features for 14 days.
                </Typography>
              </div>
              <Button component={Link} href='/front-pages/payment' variant='contained'>
                Start 14-Days Free Trial
              </Button>
            </div>
          </Grid>
          <Grid xs={12} md={6}>
            <div className='md:absolute md:inline-end-[90px] xl:inline-end-[2%] flex justify-center block-end-[-1px]'>
              <img src='/images/illustrations/characters/4.png' alt='girl with laptop' className='bs-[270px]' />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default FreeTrial
