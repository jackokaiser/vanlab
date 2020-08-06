import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import { useContext } from 'preact/hooks';
import { TranslateContext } from '@denysvuika/preact-translate';

const Header = (props) => {
	const { setLang, t, lang } = useContext(TranslateContext);

	return (
		<header>
			<nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark justify-content-between">
				<Link class={ style.lobster + " navbar-brand" } href="/">Vanlab</Link>
				{/* { lang=='en' && <img onClick={() => setLang('fr')} src="/assets/fr.svg" width="30"/> }
						{ lang=='fr' && <img onClick={() => setLang('en')} src="/assets/us.svg" width="30"/> } */}
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
