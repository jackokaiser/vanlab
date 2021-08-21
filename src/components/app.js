import { h, Component } from 'preact'
import { useState } from 'preact/hooks';
import { Router, route } from 'preact-router'
import { Provider } from '@preact/prerender-data-provider'
import { Lang, getLangFromQuery, setLangInQuery } from './languages';
import Header from './header'
import Footer from './footer'

// Code-splitting is automated for routes
import Blogs from '../routes/blogs'
import Blog from '../routes/blog'
import GenericMd from '../routes/generic-md'
import NotFoundPage from '../routes/notfound'

class Redirect extends Component {
  componentWillMount() {
	route(this.props.to, true);
  }

  render() {
	return null;
  }
}

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
	this.currentUrl = e.url
  }

  render (props) {
	const [lang, setLang] = useState(getLangFromQuery())
	const setLangAndUrl = l => {
	  setLang(l)
	  setLangInQuery(l)
	}

	return (
	  <Provider value={props}>
		<Lang.Provider value={lang}>
		  <div id='app'>
			<Header setLang={setLangAndUrl} />
			<div class='pagewrap'>
			  <div class='main container clear-top'>
				<Router onChange={this.handleRoute}>
				  <Blogs path='/' />
				  <Blog path='/post/:name' />
				  <GenericMd path='/contact' />
				  <GenericMd path='/registered' />
				  <GenericMd path='/privacy-policy' />
				  <Redirect path="/defaultsite" to="/" />
				  <NotFoundPage type='404' default />
				</Router>
			  </div>
			</div>
			<Footer />
		  </div>
		</Lang.Provider>
	  </Provider>
	)
  }
}
