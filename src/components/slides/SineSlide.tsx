import React from 'react'
import CaseStudySlide from '../CaseStudySlide'
import Sine from '../../images/projects/sine.jpg'
import { Technology } from '../TechnologyItem'

export default () => (
  <div className="h-screen bg-blue-sine">
    <CaseStudySlide
      title="Sine"
      paragraph="A WordPress website built from the ground up with over 25+ pages."
      image={Sine}
      blogUrl="/blog/sine"
      technlologies={[
        Technology.Docker,
        Technology.GoogleCloudPlatform,
        Technology.PHP,
        Technology.ReactJS,
        Technology.Twig,
        Technology.Webpack,
        Technology.Wordpress,
      ]}
    />
  </div>
)
