import React from 'react'
import CaseStudySlide from '../CaseStudySlide'
import Sine from '../../images/sine.jpg'

export default () => (
  <div className="h-screen bg-blue-sine">
    <CaseStudySlide
      title="Visitor Check-in"
      paragraph="A WordPress website built from the ground up with over 25+ pages."
      image={Sine}
      backgroundColor="blue-sine"
      textColor="white"
    />
  </div>
)
