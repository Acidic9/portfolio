import React from 'react'
import CaseStudySlide from '../CaseStudySlide'
import PirateLife from '../../images/projects/pirate-life.jpg'
import { Technology } from '../TechnologyItem'

export default () => (
  <div className="h-screen bg-gray-pirate-life">
    <CaseStudySlide
      title="Pirate Life"
      paragraph="Completely custom WordPress website for the Australian based beer brewery Pirate Life."
      image={PirateLife}
      // blogUrl="/blog/pirate-life"
      technlologies={[
        Technology.Docker,
        Technology.GoogleCloudPlatform,
        Technology.NodeJS,
        Technology.ReactJS,
        Technology.PHP,
        Technology.Twig,
        Technology.Webpack,
        Technology.Wordpress,
      ]}
    />
  </div>
)
