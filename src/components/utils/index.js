import { usePrerenderData as OriginalUsePrerenderData } from '@preact/prerender-data-provider'
import { Component } from 'preact'


const refreshFacebook = () => {
  if (typeof FB !== 'undefined' && FB.XFBML) {
	FB.XFBML.parse()
  }
}

const usePrerenderData = (props) => {
  const url = props.url.split('?')[0]
  return OriginalUsePrerenderData({ url })
}

function callToAction() {
  return (
	<div>
	  <h1 class="pageTitle">Follow our trip</h1>
	  <div class="d-flex justify-content-around mb-4 mt-4">
		<a target="_blank" class="btn btn-primary mx-1" href="https://0b681449.sibforms.com/serve/MUIEAHTk6cldrZ6rX0d-kn6z8h6IU8aTHBHGIO-ULxrtt4Yw8R6BBzXUP5mvcPDdrCgvbtsC5cZzV9SODogur8IRXQ8dp7lCo26IP_Vx617oC2hsFSjrgmOWTBoi3baHd5pVtus4MLiqw2ZpWXOjOS3jT-5_soRXhSihO6LzcpDVSOYM6G0ADFfw08bsqGPnR8I29t5aKxavRWNc"><i class="fa fa-envelope"></i> Newsletter</a>
		<a target="_blank" class="btn btn-primary mx-1" href="https://www.instagram.com/vanderfool.fr"><i class="fab fa-instagram"></i> Instagram</a>
		<a target="_blank" class="btn btn-primary mx-1" href="https://www.facebook.com/vanderfool.fr"><i class="fab fa-facebook"></i> Facebook</a>
	  </div>

	</div>
  )
}

export { refreshFacebook, usePrerenderData, callToAction }
