import React from 'react'
import CaseStudySlide from '../CaseStudySlide'
import Sine from '../../images/projects/sine.jpg'

export default () => (
  <div className="h-screen bg-blue-sine">
    <CaseStudySlide
      title="Sine"
      paragraph="A WordPress website built from the ground up with over 25+ pages."
      image={Sine}
      blogUrl="/blog/sine"
    />
  </div>
)
