import { h } from 'preact'
import { useEffect } from 'preact/hooks'
import { Suspense } from 'preact/compat'
import { usePrerenderData, refreshFacebook, callToAction } from '../../components/utils'
import Markdown from 'markdown-to-jsx'
import { FormattedCodeBlock } from './formatted-code-block'

import style from './style'

const Blog = (props) => {
  const [data, isLoading] = usePrerenderData(props)
  if (!isLoading) {
    useEffect(refreshFacebook)
  }

  return (
    <>
      {callToAction()}
      <article class={`container-fluid p-0 ${style.blogcontainer}`}>
        {getBlogBody(props, data, isLoading)}
      </article>
      {callToAction()}
    </>
  )
}

function CodeBlock (props) {
  const fallback = <pre><code>{props.children}</code></pre>
  if (typeof window === 'undefined') {
    return (fallback)
  }
  return (
    <Suspense fallback={fallback}>
      <FormattedCodeBlock {...props} />
    </Suspense>
  )
}

function InlineImage ({ alt, title, src }) {
  return (
    <div class={style.inlineImageContainer}>
      <a native href={src}>
        <img class={style.inlineImage} src={src} alt={alt} />
      </a>
      {title && <span class={style.inlineImageTitle}>{title}</span>}
    </div>
  )
}

function getBlogBody (props, data, isLoading) {
  if (isLoading) {
    return (
      <div class={style.loadingPlaceholder}>
        <h1 class={`${style.blogtitle} loading`}>&nbsp;</h1>
        <caption class={`${style.blogsubtitle} loading`}>&nbsp;</caption>
        <div class={style.blogbody}>
          <div class={`${style.loadingBody} loading`} />
          <div class={`${style.loadingBody} loading`} />
          <div class={`${style.loadingBody} loading`} />
        </div>
      </div>
    )
  }

  if (data && data.data) {
    const { details, content } = data.data

    const rawUrl = 'https://vanderfool.com' + props.url.split('?')[0]

    return (
      <div>
        <h1 class={style.blogtitle}>{details.title}</h1>
        <div class='row justify-content-between'>
          {details.date && <caption class={style.blogsubtitle + ' col'}>{details.date}</caption>}
          <span class='fb-like col flex-grow-0' data-href={rawUrl} data-width='' data-layout='button' data-action='like' data-size='small' data-share='true' />
        </div>
        {details.cover &&
          <a href={details.cover} native>
            <img src={details.cover} class={style.cover} />
          </a>}
        <div class={style.blogbody}>
          <Markdown options={{
            overrides: {
              img: {
                component: InlineImage
              },
              code: {
                component: CodeBlock
              }
            }
          }}
          >{content}
          </Markdown>
        </div>
        <div class='d-flex'>
          <span class={`fb-like col-2-md ${style.likealign}`} data-href={rawUrl} data-width='' data-layout='box_count' data-action='like' data-size='small' data-share='true' />
        </div>
      </div>
    )
  }
}

export default Blog
