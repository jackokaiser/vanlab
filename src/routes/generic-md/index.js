import { h } from 'preact'
import { usePrerenderData } from '../../components/utils'
import Markdown from 'markdown-to-jsx'

const genericMd = (props) => {
  const [data, isLoading] = usePrerenderData(props)

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (data && data.data) {
    console.log(data)
    const content = data.data.content
    const title = data.data.metadata.title
    return (
      <div>
        <h1 class="pageTitle">{title}</h1>
        <div>
          <Markdown>
            {content}
          </Markdown>
        </div>
      </div>
    )
  }
}

export default genericMd
