'use client'

// React Imports
import { useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

// Components Imports
import CustomIconButton from '@core/components/mui/IconButton'
import CustomTextField from '@core/components/mui/TextField'

const ProductVariants = () => {
  // States
  const [count, setCount] = useState(1)

  const deleteForm = (e: SyntheticEvent) => {
    e.preventDefault()

    // @ts-ignore
    e.target.closest('.repeater-item').remove()
  }

  return (
    <Card>
      <CardHeader title='Product Variants' />
      <CardContent>
        <Grid container spacing={6}>
          {Array.from(Array(count).keys()).map((item, index) => (
            <Grid key={index} item xs={12} className='repeater-item'>
              <Grid container spacing={6}>
                <Grid item xs={12} md={4}>
                  <CustomTextField select fullWidth label='Options' defaultValue='Size'>
                    <MenuItem value='Size'>Size</MenuItem>
                    <MenuItem value='Color'>Color</MenuItem>
                    <MenuItem value='Weight'>Weight</MenuItem>
                    <MenuItem value='Smell'>Smell</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item xs={12} md={8} alignSelf='end'>
                  <div className='flex items-center gap-6'>
                    <CustomTextField fullWidth placeholder='Enter Variant Value' />
                    <CustomIconButton onClick={deleteForm} className='min-is-fit'>
                      <i className='tabler-x' />
                    </CustomIconButton>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button variant='contained' onClick={() => setCount(count + 1)} startIcon={<i className='tabler-plus' />}>
              Add Another Option
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ProductVariants
