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
	  <article class={`container-fluid p-0`}>
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
	const postUrl = data.seo.url

	return (
	  <div>
		<h1 class={style.blogtitle}>{details.title}</h1>
		<div class='row justify-content-between'>
		  {details.date && <caption class={style.blogsubtitle + ' col'}>{new Date(details.date).toDateString()}</caption>}
		  <div class="fb-share-button" data-href={postUrl} data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u={`${encodeURIComponent(postUrl)}&amp;src=sdkpreparse`}" class="fb-xfbml-parse-ignore">Share</a></div>
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
	  </div>
	)
  }
}

export default Blog
