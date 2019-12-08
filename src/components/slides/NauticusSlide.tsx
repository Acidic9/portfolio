import React from 'react'
import CaseStudySlide from '../CaseStudySlide'
import Nauticus from '../../images/projects/nauticus.png'

export default () => (
  <div className="h-screen bg-blue-nauticus">
    <div className="absolute left-1/2 -translate-1/2-full inline-block px-8 font-semibold text-black text-sm tracking-wide">
      <span className="inline-block mb-4">Favourite Projects</span>
      <div className="mx-auto w-px h-4 bg-black"></div>
    </div>

    <CaseStudySlide
      title="Nauticus"
      paragraph="A global crypto-currency exchange app
      built with a team across the world
      using a huge variety of technologies."
      image={Nauticus}
      blogUrl="/blog/nauticus"
    />
  </div>
)
