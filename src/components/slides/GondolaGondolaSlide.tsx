import React from 'react'
import CaseStudySlide from '../CaseStudySlide'
import GondolaGondola from '../../images/projects/gondola-gondola.jpg'

export default () => (
  <div className="h-screen bg-red-gondola-gondola">
    <CaseStudySlide
      title="Gondola Gondola"
      paragraph="Adelaide-based famous restaurant website prodiving a custom CMS."
      image={GondolaGondola}
      blogUrl="/blog/gondola-gondola"
    />
  </div>
)
