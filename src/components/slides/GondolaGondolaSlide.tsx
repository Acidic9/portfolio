import React from 'react'
import CaseStudySlide from '../CaseStudySlide'
import GondolaGondola from '../../images/projects/gondola-gondola.jpg'
import { Technology } from '../TechnologyItem'

export default () => (
  <div className="h-screen bg-red-gondola-gondola">
    <CaseStudySlide
      title="Gondola Gondola"
      paragraph="Adelaide-based famous restaurant website."
      image={GondolaGondola}
      // blogUrl="/blog/gondola-gondola"
      technlologies={[
        Technology.Netlify,
        Technology.Nunjucks,
        Technology.Webpack,
      ]}
    />
  </div>
)
