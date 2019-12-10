import React from 'react'
import CaseStudySlide from '../CaseStudySlide'
import Appliquette from '../../images/projects/appliquette.jpg'
import { Technology } from '../TechnologyItem'

export default () => (
  <div className="h-screen bg-pink-appliquette">
    <CaseStudySlide
      title="Appliquette"
      paragraph="A custom WordPress site developed for the Adelaide based app development agency."
      image={Appliquette}
      blogUrl="/blog/appliquette"
      technlologies={[
        Technology.Docker,
        Technology.GoogleCloudPlatform,
        Technology.PHP,
        Technology.Twig,
        Technology.Webpack,
        Technology.Wordpress,
      ]}
    />
  </div>
)
