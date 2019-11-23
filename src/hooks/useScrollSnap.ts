import ScrollSnap from 'scroll-snap'
import React, { useState } from 'react'

const snapConfig = {
  scrollSnapDestination: '0% 100%', // *REQUIRED* scroll-snap-destination css property, as defined here: https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-destination
  scrollTimeout: 100, // *OPTIONAL* (default = 100) time in ms after which scrolling is considered finished
  scrollTime: 500, // *OPTIONAL* (default = 300) time in ms for the smooth snap
}

export default (el: HTMLElement) => {
  const snapObject = new ScrollSnap(el, snapConfig)
  snapObject.bind(() => {
    console.log('hello')
  })

  return snapObject
}
