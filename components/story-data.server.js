import { transform } from '../lib/get-item'
import Story from '../components/story.client'

import fetchData from '../lib/fetch-data'
import useData from '../lib/use-data'

export default function StoryWithData({ id }) {
  const data = useData(`s-${id}`, () => fetchData(`item/${id}`).then(transform))
  return <Story {...data} />
}