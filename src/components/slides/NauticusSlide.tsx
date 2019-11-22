import React from 'react'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import CaseStudySlide from '../CaseStudySlide'
import Nauticus from '../../images/nauticus.png'

export default () => (
  <div className="h-screen bg-blue-nauticus">
    <div className="absolute left-1/2 -translate-1/2-full inline-block px-8 font-semibold text-black text-sm tracking-wide">
      <span className="inline-block mb-4">Favourite Projects</span>
      <div className="mx-auto w-px h-4 bg-black"></div>
    </div>

    <CaseStudySlide
      title="Multi-Crypto Currency Exchange"
      paragraph="A year long development experience working with a team around the world."
      image={Nauticus}
      backgroundColor="blue-nauticus"
      textColor="white"
    />
  </div>
)
