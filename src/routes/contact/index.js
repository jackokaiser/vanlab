import { h } from 'preact';
import style from './style';

const photographs = (props) => {
	return (
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>Contact</h1>
			<h2>Who we are:</h2>
			<ul>
				<li>Camille</li>
				<li>Jacques</li>
			</ul>
		</div>
	);
};

export default photographs;
