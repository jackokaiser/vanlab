import { h } from 'preact';
import style from './style';
import { usePrerenderData } from '../../components/utils'
import Markdown from 'markdown-to-jsx';

const contact = (props) => {
	const [data, isLoading] = usePrerenderData(props);

	if (isLoading) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}

	if (data && data.data) {
		const { content, details } = data.data;
		return (
			<div class={style.pageContact}>
				<h1 class={style.pageTitle}>Contact</h1>
				<div class="container-fluid mt-3">
					<Markdown>
						{ content }
					</Markdown>
				</div>
			</div>
		);
	}
};

export default contact;
