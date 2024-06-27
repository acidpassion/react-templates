// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import EarningReports from '@views/pages/widget-examples/charts/EarningReports'
import SupportTracker from '@views/pages/widget-examples/charts/SupportTracker'
import Sales from '@views/pages/widget-examples/charts/Sales'
import RevenueReport from '@views/pages/widget-examples/charts/RevenueReport'
import ProjectStatus from '@views/pages/widget-examples/charts/ProjectStatus'
import EarningReportsWithTabs from '@views/pages/widget-examples/charts/EarningReportsWithTabs'
import TotalEarning from '@views/pages/widget-examples/charts/TotalEarning'
import CarrierPerformance from '@views/pages/widget-examples/charts/CarrierPerformance'
import DeliveryExceptions from '@views/pages/widget-examples/charts/DeliveryExceptions'
import VehicleOverview from '@views/pages/widget-examples/charts/VehicleOverview'
import InterestedTopics from '@views/pages/widget-examples/charts/InterestedTopics'

const Charts = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <EarningReports />
      </Grid>
      <Grid item xs={12} md={6}>
        <SupportTracker />
      </Grid>
      <Grid item xs={12} md={4}>
        <Sales />
      </Grid>
      <Grid item xs={12} md={8}>
        <RevenueReport />
      </Grid>
      <Grid item xs={12} md={4}>
        <ProjectStatus />
      </Grid>
      <Grid item xs={12} md={8}>
        <EarningReportsWithTabs />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <TotalEarning />
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <CarrierPerformance />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <DeliveryExceptions />
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <VehicleOverview />
      </Grid>
      <Grid item xs={12}>
        <InterestedTopics />
      </Grid>
    </Grid>
  )
}

export default Charts
