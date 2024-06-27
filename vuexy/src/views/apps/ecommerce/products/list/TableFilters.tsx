// React Imports
import { useState, useEffect } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import MenuItem from '@mui/material/MenuItem'

// Type Imports
import type { ProductType } from '@/types/apps/ecommerceTypes'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

type ProductStockType = { [key: string]: boolean }

// Vars
const productStockObj: ProductStockType = {
  'In Stock': true,
  'Out of Stock': false
}

const TableFilters = ({
  setData,
  productData
}: {
  setData: (data: ProductType[]) => void
  productData?: ProductType[]
}) => {
  // States
  const [category, setCategory] = useState<ProductType['category']>('')
  const [stock, setStock] = useState('')
  const [status, setStatus] = useState<ProductType['status']>('')

  useEffect(
    () => {
      const filteredData = productData?.filter(product => {
        if (category && product.category !== category) return false
        if (stock && product.stock !== productStockObj[stock]) return false
        if (status && product.status !== status) return false

        return true
      })

      setData(filteredData ?? [])
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [category, stock, status, productData]
  )

  return (
    <CardContent>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            select
            fullWidth
            id='select-status'
            value={status}
            onChange={e => setStatus(e.target.value)}
            SelectProps={{ displayEmpty: true }}
          >
            <MenuItem value=''>Select Status</MenuItem>
            <MenuItem value='Scheduled'>Scheduled</MenuItem>
            <MenuItem value='Published'>Publish</MenuItem>
            <MenuItem value='Inactive'>Inactive</MenuItem>
          </CustomTextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            select
            fullWidth
            id='select-category'
            value={category}
            onChange={e => setCategory(e.target.value)}
            SelectProps={{ displayEmpty: true }}
          >
            <MenuItem value=''>Select Category</MenuItem>
            <MenuItem value='Accessories'>Accessories</MenuItem>
            <MenuItem value='Home Decor'>Home Decor</MenuItem>
            <MenuItem value='Electronics'>Electronics</MenuItem>
            <MenuItem value='Shoes'>Shoes</MenuItem>
            <MenuItem value='Office'>Office</MenuItem>
            <MenuItem value='Games'>Games</MenuItem>
          </CustomTextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            select
            fullWidth
            id='select-stock'
            value={stock}
            onChange={e => setStock(e.target.value as string)}
            SelectProps={{ displayEmpty: true }}
          >
            <MenuItem value=''>Select Stock</MenuItem>
            <MenuItem value='In Stock'>In Stock</MenuItem>
            <MenuItem value='Out of Stock'>Out of Stock</MenuItem>
          </CustomTextField>
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default TableFilters
