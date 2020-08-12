import { h } from 'preact';
import { Link } from 'preact-router';
import { usePrerenderData, FacebookComponent } from '../../components/utils'
import style from './style';

class Blogs extends FacebookComponent {
	render(props) {
		const [data, isLoading] = usePrerenderData(props);

		return (
			<div class={style.pageBlogs}>
				<h1 class={style.pageTitle}>Van Building Diary</h1>
				{ getBlogsListing(data, isLoading) }
			</div>
		);
	}
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
						<article class="container-fluid">
							<div class="row">
								<div class="col-md-6 no">
									<h2>{blog.details.title}</h2>
									<p class={style.preview}>
										{blog.preview}
									</p>
									<div class="d-flex justify-content-between">
										<span class={style.tag}>{ blog.details.date }</span>
										<span class="fb-like" data-href={`vanderfool.com/post/${blog.id}`} data-width="" data-layout="button_count" data-action="like" data-size="small" data-share="true"></span>
									</div>
								</div>
								{ blog.details.cover && <img src={blog.details.cover} class={style.cover + " col-md-6"} /> }
							</div>
						</article>
					</Link>
				))}
			</>
		);
	}
}

export default Blogs;
