import { h, Component } from 'preact'
import { Router, route } from 'preact-router'
import { Provider } from '@preact/prerender-data-provider'
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
	return (
	  <Provider value={props}>
		<div id='app'>
		  <Header />
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
	  </Provider>
	)
  }
}
