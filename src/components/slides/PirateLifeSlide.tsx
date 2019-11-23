import React from 'react'
import CaseStudySlide from '../CaseStudySlide'
import PirateLife from '../../images/pirate-life.jpg'

export default () => (
  <div className="h-screen bg-gray-pirate-life">
    <CaseStudySlide
      title="Beer Brewery"
      paragraph="Completely custom WordPress website for the Australian based beer brewery Pirate Life."
      image={PirateLife}
      backgroundColor="gray-pirate-life"
      textColor="white"
    />
  </div>
)
