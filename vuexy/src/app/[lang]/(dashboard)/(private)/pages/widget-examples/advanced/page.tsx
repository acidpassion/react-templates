// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import MonthlyCampaignState from '@views/pages/widget-examples/advanced/MonthlyCampaignState'
import ActiveProjects from '@views/pages/widget-examples/advanced/ActiveProjects'
import SourceVisits from '@views/pages/widget-examples/advanced/SourceVisits'
import SalesByCountries from '@views/pages/widget-examples/advanced/SalesByCountries'
import EarningReports from '@views/pages/widget-examples/advanced/EarningReports'
import BrowserStates from '@views/pages/widget-examples/advanced/BrowserStates'
import Orders from '@views/pages/widget-examples/advanced/Orders'
import Transactions from '@views/pages/widget-examples/advanced/Transactions'
import PopularProducts from '@views/pages/widget-examples/advanced/PopularProducts'
import TopCourses from '@views/pages/widget-examples/advanced/TopCourses'
import UpcomingWebinar from '@views/pages/widget-examples/advanced/UpcomingWebinar'
import AssignmentProgress from '@views/pages/widget-examples/advanced/AssignmentProgress'
import DeliveryPerformance from '@views/pages/widget-examples/advanced/DeliveryPerformance'
import VehicleCondition from '@views/pages/widget-examples/advanced/VehicleCondition'
import PopularInstructors from '@views/pages/widget-examples/advanced/PopularInstructors'
import LastTransaction from '@views/pages/widget-examples/advanced/LastTransaction'
import ActivityTimeline from '@views/pages/widget-examples/advanced/ActivityTimeline'
import WebsiteAnalyticsSlider from '@views/pages/widget-examples/advanced/WebsiteAnalyticsSlider'
import Congratulations from '@/views/pages/widget-examples/advanced/Congratulations'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const Advanced = () => {
  // Vars
  const serverMode = getServerMode()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6} lg={4}>
        <MonthlyCampaignState />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ActiveProjects />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SourceVisits />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SalesByCountries />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <EarningReports />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BrowserStates />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Orders />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Transactions />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <PopularProducts />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TopCourses />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <UpcomingWebinar />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <AssignmentProgress />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <DeliveryPerformance />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <VehicleCondition />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <PopularInstructors />
      </Grid>
      <Grid item xs={12} md={6}>
        <LastTransaction serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} md={6}>
        <ActivityTimeline />
      </Grid>
      <Grid item xs={12} md={6}>
        <WebsiteAnalyticsSlider />
      </Grid>
      <Grid item xs={12} md={6}>
        <Congratulations />
      </Grid>
    </Grid>
  )
}

export default Advanced
