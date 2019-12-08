import React from 'react'
import CaseStudySlide from '../CaseStudySlide'
import SkyFoundry from '../../images/projects/sky-foundry.jpg'

export default () => (
  <div className="h-screen bg-red-sky-foundry">
    <CaseStudySlide
      title="Sky Foundry"
      paragraph="A website built for Sky Foundry agency using a custom CMS."
      image={SkyFoundry}
      blogUrl="/blog/sky-foundry"
    />
  </div>
)
