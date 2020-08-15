import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = (props) => {
	return (
		<header>
			<nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark justify-content-between">
				<Link class={`${style.lobster} navbar-brand`} href="/">Vanderfool</Link>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<Link data-toggle="collapse" class="nav-link" activeClassName="active" href="/">Home</Link>
						</li>
						<li class="nav-item">
							<Link data-toggle="collapse" class="nav-link" activeClassName="active" href="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
