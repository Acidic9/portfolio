import React, { useState, useEffect, useCallback, useRef } from 'react'
import '../styles/styles.css'

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Navbar from '../components/Navbar'
import IntroSlide from '../components/slides/IntroSlide'
import NauticusSlide from '../components/slides/NauticusSlide'
import PirateLifeSlide from '../components/slides/PirateLifeSlide'
import PirateLifeStoreSlide from '../components/slides/PirateLifeStoreSlide'
import SineSlide from '../components/slides/SineSlide'
import SkyFoundrySlide from '../components/slides/SkyFoundrySlide'
import SlideNavigation from '../components/SlideNavigation'
import useScrollSnap from '../hooks/useScrollSnap'

export default () => {
  const [parallaxRef, setParallaxRef] = useState<any | null>(null)
  const [parallaxProjectsRef, setParallaxProjectsRef] = useState<any | null>(
    null
  )
  const [showNavbar, setShowNavbar] = useState<boolean>(false)
  const [activeNavIndex, setActiveNavIndex] = useState<number | undefined>()
  const [scrollbarWidth, setScrollbarWidth] = useState<number>(0)
  const [slideNavInvertColors, setSlideNavInvertColors] = useState<boolean>(
    false
  )

  useEffect(() => {
    if (parallaxRef && parallaxRef.container) {
      useScrollSnap(parallaxRef.container)
    }
  }, [parallaxRef])

  useEffect(() => {
    if (!parallaxRef) return

    setScrollbarWidth(
      Math.abs(
        parallaxRef.container.clientWidth - parallaxRef.container.offsetWidth
      )
    )

    parallaxRef.container.addEventListener('scroll', (ev: Event) => {
      if ((ev.target! as HTMLDivElement).scrollTop >= window.innerHeight) {
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
      }

      setActiveNavIndex(
        Math.floor(
          (ev.target! as HTMLDivElement).scrollTop / window.innerHeight
        ) - 1
      )
    })
  }, [parallaxRef])

  const onSlideChange = useCallback(
    index => {
      if (!parallaxProjectsRef) return

      // if (index === 3) {
      //   setSlideNavInvertColors(true)
      // } else {
      //   setSlideNavInvertColors(false)
      // }

      parallaxProjectsRef.scrollTo(index)

      // if (parallaxRef) {
      // parallaxRef.scrollTo(1)
      // }
    },
    [parallaxProjectsRef]
  )

  return (
    <div className="font-roboto">
      <Navbar
        visible={showNavbar}
        activeNav={activeNavIndex}
        scrollbarWidth={scrollbarWidth}
      />

      <Parallax pages={3} ref={(ref: any) => setParallaxRef(ref)}>
        {/* <div> */}
        <ParallaxLayer offset={0} speed={0.3}>
          <IntroSlide />
        </ParallaxLayer>
        {/* </div> */}

        {/* <div> */}
        <ParallaxLayer offset={1} speed={0}>
          <Parallax
            pages={4}
            horizontal={true}
            scrolling={false}
            ref={(ref: any) => setParallaxProjectsRef(ref)}
          >
            <ParallaxLayer offset={0} speed={0}>
              <NauticusSlide />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0}>
              <PirateLifeSlide />
            </ParallaxLayer>

            {/* <ParallaxLayer offset={2} speed={0}>
              <PirateLifeStoreSlide />
            </ParallaxLayer> */}

            <ParallaxLayer offset={2} speed={0}>
              <SineSlide />
            </ParallaxLayer>

            <ParallaxLayer offset={3} speed={0}>
              <SkyFoundrySlide />
            </ParallaxLayer>
          </Parallax>

          <ParallaxLayer
            offset={0}
            speed={0}
            style={{
              height: 'auto',
              bottom: 56,
              width: '100% !important',
            }}
          >
            <SlideNavigation
              slideCount={4}
              inverseColors={slideNavInvertColors}
              onChange={onSlideChange}
            />
          </ParallaxLayer>
        </ParallaxLayer>
        {/* </div> */}

        {/* <div> */}
        <ParallaxLayer offset={2} speed={0}>
          <div className="h-screen bg-red-500">Hello</div>
        </ParallaxLayer>
        {/* </div> */}
      </Parallax>
    </div>
  )
}
