import { Suspense } from 'react'

// Shared Components
import Spinner from '../components/spinner'

// Server Components
import SystemInfo from '../components/server-info.server'
import StoryWithData from '../components/story-data.server'

// Client Components
import Page from '../components/page.client'
import Footer from '../components/footer.client'

// Utils
import fetchData from '../lib/fetch-data'
import useData from '../lib/use-data'

function NewsWithData() {
  const storyIds = useData('top', () => fetchData('topstories'))
  return (
    <>
      {storyIds.slice(0, 30).map((id) => {
        return (
          <Suspense fallback={<Spinner />} key={id}>
            <StoryWithData id={id} />
          </Suspense>
        )
      })}
    </>
  )
}

export default function News() {
  return (
    <Page>
      <Suspense fallback={<Spinner />}>
        <NewsWithData />
      </Suspense>
      <Footer />
      <SystemInfo />
    </Page>
  )
}
