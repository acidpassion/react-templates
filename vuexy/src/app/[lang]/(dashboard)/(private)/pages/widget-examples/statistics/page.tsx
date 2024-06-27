// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import StatisticsCard from '@views/pages/widget-examples/statistics/StatisticsCard'
import Square from '@views/pages/widget-examples/statistics/Square'
import DistributedBarChartOrder from '@/views/pages/widget-examples/statistics/DistributedBarChartOrder'
import LineAreaYearlySalesChart from '@views/pages/widget-examples/statistics/LineAreaYearlySalesChart'
import LineChartProfit from '@views/pages/widget-examples/statistics/LineChartProfit'
import BarChartSessionsWithNegativeValues from '@views/pages/widget-examples/statistics/BarChartSessionsWithNegativeValues'
import RadialBarChart from '@views/pages/widget-examples/statistics/RadialBarChart'
import LineChartImpression from '@views/pages/widget-examples/statistics/LineChartImpression'
import Horizontal from '@views/pages/widget-examples/statistics/Horizontal'
import CardStatsLineAreaCharts from '@views/pages/widget-examples/statistics/CardStatsLineAreaCharts'
import LineAreaDailySalesChart from '@views/pages/widget-examples/statistics/LineAreaDailySalesChart'
import SalesOverview from '@views/pages/widget-examples/statistics/SalesOverview'
import BarChartDailyTraffic from '@views/pages/widget-examples/statistics/BarChartDailyTraffic'
import SubscribersOrders from '@views/pages/widget-examples/statistics/SubscribersOrders'
import Vertical from '@views/pages/widget-examples/statistics/Vertical'
import BarChartRevenueGrowth from '@views/pages/widget-examples/statistics/BarChartRevenueGrowth'
import DonutChartGeneratedLeads from '@views/pages/widget-examples/statistics/DonutChartGeneratedLeads'
import HorizontalStatisticsCard from '@views/pages/widget-examples/statistics/HorizontalStatisticsCard'
import CustomerStatisticsCard from '@views/pages/widget-examples/statistics/CustomerStatisticsCard'
import LogisticsStatisticsCard from '@views/apps/logistics/dashboard/LogisticsStatisticsCard'
import UserListCards from '@views/pages/widget-examples/statistics/UserListCards'

// Data Imports
import { getStatisticsData } from '@/app/server/actions'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/pages/widget-examples` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */

/* const getStatisticsData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/widget-examples`)

  if (!res.ok) {
    throw new Error('Failed to fetch statistics data')
  }

  return res.json()
} */

const Statistics = async () => {
  // Vars
  const statsData = await getStatisticsData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8}>
        <StatisticsCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <Square data={statsData.statsSquare} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <DistributedBarChartOrder />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <LineAreaYearlySalesChart />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <LineChartProfit />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <BarChartSessionsWithNegativeValues />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <RadialBarChart />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <LineChartImpression />
      </Grid>
      <Grid item xs={12}>
        <LogisticsStatisticsCard data={statsData?.statsHorizontalWithBorder} />
      </Grid>
      <Grid item xs={12}>
        <UserListCards />
      </Grid>
      <Grid item xs={12}>
        <Horizontal data={statsData.statsHorizontal} />
      </Grid>
      <Grid item xs={12}>
        <CardStatsLineAreaCharts data={statsData.statsWithAreaChart} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <LineAreaDailySalesChart />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <SalesOverview />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <BarChartDailyTraffic />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <SubscribersOrders />
      </Grid>
      <Grid item xs={12}>
        <HorizontalStatisticsCard data={statsData?.statsHorizontalWithAvatar} />
      </Grid>
      <Grid item xs={12}>
        <CustomerStatisticsCard customerStatData={statsData?.customerStats} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Vertical data={statsData.statsVertical} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BarChartRevenueGrowth />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <DonutChartGeneratedLeads />
      </Grid>
    </Grid>
  )
}

export default Statistics
