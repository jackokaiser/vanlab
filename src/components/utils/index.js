import { usePrerenderData as OriginalUsePrerenderData } from '@preact/prerender-data-provider'
import { Component } from 'preact'
import { useContext } from 'preact/hooks'
import { join } from 'path'
import { Lang, defaultLang } from '../../components/languages'


const refreshFacebook = () => {
  if (typeof FB !== 'undefined' && FB.XFBML) {
	FB.XFBML.parse()
  }
}

const usePrerenderData = (props) => {
  const lang = useContext(Lang)
  const prefix = lang === defaultLang ? '' : lang
  const url = join('/', prefix, props.url.split('?')[0])
  return OriginalUsePrerenderData({ url })
}

function callToAction() {
  return (
	<div>
	  <h1 class="pageTitle">Follow our trip</h1>
	  <div class="d-flex justify-content-around mb-4 mt-4">
		<a target="_blank" class="btn btn-primary mx-1" href="https://docs.google.com/forms/d/e/1FAIpQLSfnkEj_sKi9HEXs9u78t-smyVp9Oua3L7n87GbbnDgTparAYg/viewform?usp=sf_link"><i class="fa fa-envelope"></i> Newsletter</a>
		<a target="_blank" class="btn btn-primary mx-1" href="https://www.instagram.com/vanderfool.fr"><i class="fab fa-instagram"></i> Instagram</a>
		<a target="_blank" class="btn btn-primary mx-1" href="https://www.facebook.com/vanderfool.fr"><i class="fab fa-facebook"></i> Facebook</a>
	  </div>

	</div>
  )
}

export { refreshFacebook, usePrerenderData, callToAction }
