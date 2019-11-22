import React from 'react'
import '../styles/styles.css'

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import IntroSlide from '../components/slides/IntroSlide'
import NauticusSlide from '../components/slides/NauticusSlide'
import PirateLifeSlide from '../components/slides/PirateLifeSlide'
import PirateLifeStoreSlide from '../components/slides/PirateLifeStoreSlide'
import SineSlide from '../components/slides/SineSlide'

export default () => {
  return (
    <div className="font-roboto">
      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={0.3}>
          <IntroSlide />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <NauticusSlide />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0}>
          <PirateLifeSlide />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0}>
          <PirateLifeStoreSlide />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0}>
          <SineSlide />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
