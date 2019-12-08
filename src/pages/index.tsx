import React, { useState, useEffect, useCallback } from 'react'
import '../styles/styles.css'

import { easeQuadInOut } from 'd3-ease'

// Components
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Navbar from '../components/Navbar'
import SlideNavigation from '../components/SlideNavigation'

// Slides
import IntroSlide from '../components/IntroSlide'
import NauticusSlide from '../components/slides/NauticusSlide'
import PirateLifeSlide from '../components/slides/PirateLifeSlide'
import PirateLifeStoreSlide from '../components/slides/PirateLifeStoreSlide'
import SineSlide from '../components/slides/SineSlide'
import SkyFoundrySlide from '../components/slides/SkyFoundrySlide'
import AppliquetteSlide from '../components/slides/AppliquetteSlide'
import GondolaGondolaSlide from '../components/slides/GondolaGondolaSlide'

export default () => {
  const [parallaxRef, setParallaxRef] = useState<any | null>(null)
  const [parallaxProjectsRef, setParallaxProjectsRef] = useState<any | null>(
    null
  )
  const [showNavbar, setShowNavbar] = useState<boolean>(false)
  const [activeNavIndex, setActiveNavIndex] = useState<number | undefined>()
  const [scrollbarWidth, setScrollbarWidth] = useState<number>(0)

  useEffect(() => {
    if (!parallaxRef) return

    setScrollbarWidth(
      Math.abs(
        parallaxRef.container.clientWidth - parallaxRef.container.offsetWidth
      )
    )

    parallaxRef.container.addEventListener('scroll', (ev: Event) => {
      if ((ev.target! as HTMLDivElement).scrollTop >= window.innerHeight - 10) {
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

  const slideTo = useCallback(
    (index: number) => {
      if (!parallaxRef) return

      parallaxRef.scrollTo(index)
    },
    [parallaxRef]
  )

  const slides = [
    NauticusSlide,
    PirateLifeSlide,
    PirateLifeStoreSlide,
    SineSlide,
    SkyFoundrySlide,
    AppliquetteSlide,
    GondolaGondolaSlide,
  ]

  return (
    <div className="font-roboto">
      <Navbar
        navItems={['Case Studies', 'Get in Touch']}
        activeItem={activeNavIndex}
        visible={showNavbar}
        scrollbarWidth={scrollbarWidth}
        onClick={index => slideTo(index + 1)}
        onLogoClick={() => slideTo(0)}
      />

      <Parallax
        pages={3}
        scrolling={false}
        ref={(ref: any) => setParallaxRef(ref)}
        config={{ duration: 700, easing: easeQuadInOut }}
      >
        <ParallaxLayer offset={0} speed={0}>
          <IntroSlide onNextSlide={() => slideTo(1)} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <Parallax
            pages={slides.length}
            horizontal={true}
            scrolling={false}
            ref={(ref: any) => setParallaxProjectsRef(ref)}
          >
            {slides.map((slide, index) => (
              <ParallaxLayer offset={index} speed={0} key={index}>
                {React.createElement(slide)}
              </ParallaxLayer>
            ))}
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
              slideCount={slides.length}
              onChange={onSlideChange}
            />
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0}>
          <div className="h-screen bg-gray-900 pt-24">
            <AniLink fade to="/blog/nauticus" duration={0.2}>
              Hello
            </AniLink>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
