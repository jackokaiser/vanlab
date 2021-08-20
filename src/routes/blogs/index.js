import { h } from 'preact'
import { useEffect } from 'preact/hooks'
import { Link } from 'preact-router'
import { usePrerenderData, refreshFacebook, callToAction } from '../../components/utils'
import style from './style'

const Blogs = (props) => {
  const [data, isLoading] = usePrerenderData(props)
  if (!isLoading) {
	useEffect(refreshFacebook)
  }

  return (
	<div>
	  {callToAction()}
	  <h1 class="pageTitle">Van Conversion Diary</h1>
	  {getBlogsListing(data, isLoading)}
	  {callToAction()}
	</div>
  )
}

function blogPreview (blog) {
  const postUrl = `https://vanderfool.com/post/${blog.id}`

  return (
	<Link href={`/post/${blog.id}`}>
	  <article class='container-fluid'>
		<div class='row'>
		  <div class='col-md-6 pl-0'>
			<h2>{blog.details.title}</h2>
			<p class={style.preview}>
			  {blog.preview}
			</p>
			<div class={`${style.meta} d-flex justify-content-between`}>
			  <span class={style.tag}>{blog.details.date}</span>
			  <div class="fb-share-button" data-href={postUrl} data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u={`${encodeURIComponent(postUrl)}&amp;src=sdkpreparse`}" class="fb-xfbml-parse-ignore">Share</a></div>
			</div>
	</div>
	{blog.details.cover && <img src={blog.details.cover} class={style.cover + ' col-md-6'} />}
	</div>
	  </article>
	</Link>
  )
}

function getBlogsListing (data, isLoading) {
  if (isLoading) {
	return (
	  <article class={style.loadingPlaceholder}>
		<h2 class={`${style.blogtitle} loading`}>&nbsp;</h2>
		<div class={`${style.loadingBody} loading`}>&nbsp;</div>
		<div class={`${style.loadingBody} loading`}>&nbsp;</div>
		<div class={`${style.loadingBody} loading`}>&nbsp;</div>
	  </article>
	)
  }
  if (data && data.data) {
	const { data: blogs } = data
	return (
	  <>
		{blogs.edges.map(blogPreview)}
	  </>
	)
  }
}

export default Blogs
