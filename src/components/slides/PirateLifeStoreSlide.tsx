import React from 'react'
import CaseStudySlide from '../CaseStudySlide'
import PirateLifeStore from '../../images/pirate-life-store.jpg'

export default () => (
  <div className="h-screen bg-black">
    <CaseStudySlide
      title="Merch Store"
      paragraph="Completely custom Shopify website selling merchandise for the PirateLife Beer Brewery."
      image={PirateLifeStore}
      backgroundColor="black"
      textColor="white"
    />
  </div>
)
