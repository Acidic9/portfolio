import React from 'react'
import CaseStudySlide from '../CaseStudySlide'
import FTXBattleRoyale from '../../images/projects/ftx-battle-royale.jpg'
import { Technology } from '../TechnologyItem'

export default () => (
  <div className="h-screen bg-blue-ftx-battle-royale">
    <CaseStudySlide
      title="FTX Battle Royale"
      paragraph="A marketing presenting a Battle Royale event for FTX."
      image={FTXBattleRoyale}
      blogUrl="/blog/ftx-battle-royale"
      technlologies={[
        Technology.Netlify,
        Technology.NodeJS,
        Technology.Nunjucks,
        Technology.TypeScript,
        Technology.Webpack,
      ]}
    />
  </div>
)
