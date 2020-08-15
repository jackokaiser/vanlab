import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Footer = (props) => {
	return (
		<footer class={`${style.footer} font-small pt-2 bg-dark text-white-50`}>
			<div class="text-center">© 2020 Copyright:
				<a href="https://vanderfool.com/"> vanderfool.com</a> - <a href="/privacy-policy">privacy policy</a>
			</div>
		</footer>
	);
};

export default Footer;
