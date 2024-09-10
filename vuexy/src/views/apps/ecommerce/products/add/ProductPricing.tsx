// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'

// Component Imports
import Form from '@components/Form'
import CustomTextField from '@core/components/mui/TextField'

const ProductPricing = () => {
  return (
    <Card>
      <CardHeader title='Pricing' />
      <CardContent>
        <Form>
          <CustomTextField fullWidth label='Base Price' placeholder='Enter Base Price' className='mbe-6' />
          <CustomTextField fullWidth label='Discounted Price' placeholder='$499' className='mbe-6' />
          <FormControlLabel control={<Checkbox defaultChecked />} label='Charge tax on this product' />
          <Divider className='mlb-2' />
          <div className='flex items-center justify-between'>
            <Typography>In stock</Typography>
            <Switch defaultChecked />
          </div>
        </Form>
      </CardContent>
    </Card>
  )
}

export default ProductPricing
