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
        <a target="_blank" class="btn btn-primary" href="https://0b681449.sibforms.com/serve/MUIEADjvySQ69eBzC3AquxbHiR868AoKmptTpfjKlKrlj1mkupioN-HLNznI9_8pqKcG7TPDj9nAX_yL5egkK-yglPw5zCGe4mBGrqo5sGZkMmPtV8_cYEK47ys3jl97rY2-kpT52xYbptFfgZ_z956l5EaRzC5bOoaNtZ7cPeYFqRrqQaCIbxDYcGeALLb-HCHptE4OaU7IasGh"><i class="fa fa-envelope"></i> Register to the newsletter</a>
        <a target="_blank" class="btn btn-primary" href="https://www.instagram.com/vanderfool.fr"><i class="fab fa-instagram"></i> Follow us on instagram</a>
      </div>
    </div>
  )
}

export { refreshFacebook, usePrerenderData, callToAction }
