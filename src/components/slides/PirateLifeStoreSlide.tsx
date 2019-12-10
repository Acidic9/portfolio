import React from 'react'
import CaseStudySlide from '../CaseStudySlide'
import PirateLifeStore from '../../images/projects/pirate-life-store.jpg'
import { Technology } from '../TechnologyItem'

export default () => (
  <div className="h-screen bg-black">
    <CaseStudySlide
      title="Pirate Life Store"
      paragraph="Completely custom Shopify website selling merchandise for the PirateLife Beer Brewery."
      image={PirateLifeStore}
      // blogUrl="/blog/pirate-life-store"
      technlologies={[
        Technology.ReactJS,
        Technology.Shopify,
        Technology.Webpack,
      ]}
    />
  </div>
)
