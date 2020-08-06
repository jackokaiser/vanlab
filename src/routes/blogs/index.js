import { h } from 'preact';
import { Link } from 'preact-router';
import { usePrerenderData } from '@preact/prerender-data-provider';
import style from './style';

const blogs = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	return (
		<div class={style.pageBlogs}>
			<h1 class={style.pageTitle}>Van Building Diary</h1>
			{ getBlogsListing(data, isLoading) }
		</div>
	);
};

function getBlogsListing(data, isLoading) {
	if (isLoading) {
		return (
			<article class={style.loadingPlaceholder}>
				<h2 class={`${style.blogtitle} loading`}>&nbsp;</h2>
				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
			</article>
		);
	}
	if (data && data.data) {
		const { data: blogs } = data;
		return (
			<>
				{blogs.edges.map(blog => (
					<Link href={`/post/${blog.id}`}>
						<article>
							<h2>{blog.details.title}</h2>
							<p class={style.preview}>
								{blog.preview}
							</p>
							<div>
								<span class={style.tag}>{ blog.details.date }</span>
							</div>
						</article>
					</Link>
				))}
			</>
		);
	}
}

export default blogs;
