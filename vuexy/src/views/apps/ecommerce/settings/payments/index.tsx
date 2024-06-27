// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import PaymentProviders from './PaymentProviders'
import SupportedMethods from './SupportedMethods'
import ManualMethods from './ManualMethods'

const Payments = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <PaymentProviders />
      </Grid>
      <Grid item xs={12}>
        <SupportedMethods />
      </Grid>
      <Grid item xs={12}>
        <ManualMethods />
      </Grid>
    </Grid>
  )
}

export default Payments
