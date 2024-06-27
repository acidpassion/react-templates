// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import ProductListTable from '@views/apps/ecommerce/products/list/ProductListTable'
import ProductCard from '@views/apps/ecommerce/products/list/ProductCard'

// Data Imports
import { getEcommerceData } from '@/app/server/actions'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/ecommerce` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */

/* const getEcommerceData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/ecommerce`)

  if (!res.ok) {
    throw new Error('Failed to fetch ecommerce data')
  }

  return res.json()
} */

const eCommerceProductsList = async () => {
  // Vars
  const data = await getEcommerceData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ProductCard />
      </Grid>
      <Grid item xs={12}>
        <ProductListTable productData={data?.products} />
      </Grid>
    </Grid>
  )
}

export default eCommerceProductsList
