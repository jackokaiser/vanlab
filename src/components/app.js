import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from '@preact/prerender-data-provider';
import Header from './header';
import Footer from './footer';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Blogs from '../routes/blogs';
import Blog from '../routes/blog';
import Contact from '../routes/contact';
import ContactSuccess from '../routes/contact-success';
import NotFoundPage from '../routes/notfound';
import PrivacyPolicy from '../routes/privacy-policy';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render(props) {
		return (
			<Provider value={props}>
				<div id="app">
					<Header />
					<div class="pagewrap">
						<div class="main container clear-top">
							<Router onChange={this.handleRoute}>
								<Blogs path="/" />
								<Blog path="/post/:name" />
								<Contact path="/contact/" />
								<PrivacyPolicy path="/privacy-policy/" />
								<NotFoundPage type="404" default />
							</Router>
						</div>
					</div>
					<Footer />
				</div>
			</Provider>
		);
	}
}
