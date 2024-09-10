// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'
import DirectionalIcon from '@components/DirectionalIcon'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

// Types
type popularArticlesType = {
  title: string
  icon: string
  articles: { title: string }[]
}

// Data
const allArticles: popularArticlesType[] = [
  {
    title: 'Buying',
    icon: 'tabler-shopping-cart',
    articles: [
      { title: 'What are Favourites?' },
      { title: 'How do I purchase an item?' },
      { title: 'How do i add or change my details?' },
      { title: 'How do refunds work?' },
      { title: 'Can I Get A Refund?' },
      { title: "I'm trying to find a specific item" }
    ]
  },
  {
    title: 'Item Support',
    icon: 'tabler-help',
    articles: [
      { title: 'What is Item Support?' },
      { title: 'How to contact an author?' },
      { title: 'Where Is My Purchase Code?' },
      { title: 'Extend or renew Item Support' },
      { title: 'Item Support FAQ' },
      { title: 'Why has my item been removed?' }
    ]
  },
  {
    title: 'Licenses',
    icon: 'tabler-currency-dollar',
    articles: [
      { title: 'Can I use the same license for the...' },
      { title: 'How to contact an author?' },
      { title: "I'm making a test site - it's not for ..." },
      { title: 'which license do I need?' },
      { title: 'I want to make multiple end prod ...' },
      { title: 'For logo what license do I need?' }
    ]
  },
  {
    title: 'Template Kits',
    icon: 'tabler-color-swatch',
    articles: [
      { title: 'Template Kits' },
      { title: 'Elementor Template Kits: PHP Zip ...' },
      { title: 'Template Kits - Imported template ...' },
      { title: 'Troubleshooting Import Problems' },
      { title: 'How to use the WordPress Plugin ...' },
      { title: 'How to use the Template Kit Import ...' }
    ]
  },
  {
    title: 'Account & Password',
    icon: 'tabler-lock-open',
    articles: [
      { title: 'Signing in with a social account' },
      { title: 'Locked Out of Account' },
      { title: "I'm not receiving the verification email" },
      { title: 'Forgotten Username Or Password' },
      { title: 'New password not accepted' },
      { title: 'What is Sign In Verification?' }
    ]
  },
  {
    title: 'Account Settings',
    icon: 'tabler-user',
    articles: [
      { title: 'How do I change my password?' },
      { title: 'How do I change my username?' },
      { title: 'How do I close my account?' },
      { title: 'How do I change my email address?' },
      { title: 'How can I regain access to my a ...' },
      { title: 'Are RSS feeds available on Market?' }
    ]
  }
]

const KnowledgeBase = () => {
  return (
    <section className={classnames('flex flex-col gap-6 md:plb-[100px] plb-[50px]', frontCommonStyles.layoutSpacing)}>
      <Typography variant='h4' className='text-center'>
        Knowledge Base
      </Typography>
      <Grid container spacing={6}>
        {allArticles.map((article, index) => {
          return (
            <Grid item xs={12} lg={4} key={index}>
              <Card>
                <CardContent className='flex flex-col items-start gap-6 text-center'>
                  <div className='flex gap-3 items-center'>
                    <CustomAvatar skin='light' variant='rounded' color='primary' size={32}>
                      <i className={classnames('text-xl', article.icon)} />
                    </CustomAvatar>
                    <Typography variant='h5'>{article.title}</Typography>
                  </div>
                  <div className='flex flex-col gap-2 is-full'>
                    {article.articles.map((data, index) => {
                      return (
                        <div key={index} className='flex justify-between items-center gap-2'>
                          <Typography
                            color='text.primary'
                            component={Link}
                            href='/front-pages/help-center/article/how-to-add-product-in-cart'
                            className='truncate'
                          >
                            {data.title}
                          </Typography>
                          <DirectionalIcon
                            ltrIconClass='tabler-chevron-right text-textDisabled text-xl'
                            rtlIconClass='tabler-chevron-left text-textDisabled text-xl'
                          />
                        </div>
                      )
                    })}
                  </div>
                  <Link
                    href='/front-pages/help-center/article/how-to-add-product-in-cart'
                    className='flex items-center gap-x-2 text-primary'
                  >
                    <span className='font-medium'>See all 6 articles</span>
                    <DirectionalIcon
                      className='text-lg'
                      ltrIconClass='tabler-arrow-right'
                      rtlIconClass='tabler-arrow-left'
                    />
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </section>
  )
}

export default KnowledgeBase
