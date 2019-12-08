import React from 'react'
import CaseStudySlide from '../CaseStudySlide'
import Appliquette from '../../images/appliquette.jpg'

export default () => (
  <div className="h-screen bg-pink-appliquette">
    <CaseStudySlide
      title="App Development Agency"
      paragraph="A custom WordPress site developed for the Adelaide based app development agency."
      image={Appliquette}
    />
  </div>
)
