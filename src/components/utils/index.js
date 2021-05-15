import { usePrerenderData as OriginalUsePrerenderData } from '@preact/prerender-data-provider'
import { Component } from 'preact'

const refreshFacebook = () => {
  if (FB && FB.XFBML) {
    FB.XFBML.parse()
  }
}

const usePrerenderData = (props) => {
  const url = props.url.split('?')[0]
  return OriginalUsePrerenderData({ url })
}

export { refreshFacebook, usePrerenderData }
