import { h } from 'preact'
import style from './style'
import { usePrerenderData } from '../../components/utils'
import Markdown from 'markdown-to-jsx'

const PrivacyPolicy = (props) => {
  const [data, isLoading] = usePrerenderData(props)
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  if (data && data.data) {
    const { content, details } = data.data
    return (
      <div class={style.pagePrivacy}>
        <h1>Privacy Policy</h1>
        <Markdown>
          {content}
        </Markdown>
        <a href='/'><h4>Back to Home</h4></a>
      </div>
    )
  }
}

export default PrivacyPolicy
