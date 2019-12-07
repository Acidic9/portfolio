import React, { useState, useEffect, useCallback, useRef } from 'react'
import '../styles/styles.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Navbar from '../components/Navbar'
import IntroSlide from '../components/slides/IntroSlide'
import NauticusSlide from '../components/slides/NauticusSlide'
import PirateLifeSlide from '../components/slides/PirateLifeSlide'
import PirateLifeStoreSlide from '../components/slides/PirateLifeStoreSlide'
import SineSlide from '../components/slides/SineSlide'
import SkyFoundrySlide from '../components/slides/SkyFoundrySlide'
import AppliquetteSlide from '../components/slides/AppliquetteSlide'
import GondolaGondolaSlide from '../components/slides/GondolaGondolaSlide'
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
  const [scrollTo, setScrollTo] = useState<((index: number) => void) | null>(
    null
  )
  const [snapObject, setSnapObject] = useState<any | null>(null)

  // Start on slide based on # in url
  useEffect(() => {
    if (parallaxRef && parallaxRef.container) {
      switch (window.location.hash) {
        case '#case-studies':
          parallaxRef.container.scrollTop = window.innerHeight
          break

        case '#contact':
          parallaxRef.container.scrollTop = window.innerHeight * 2
          break

        default:
          break
      }

      const { snapObject: snpObj, scrollTo: sctlTo } = useScrollSnap(
        parallaxRef.container
      )
      setScrollTo(sctlTo)
      setSnapObject(snpObj)
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

  const changeNav = useCallback(
    (index: number) => {
      if (snapObject) {
        if (snapObject.animationFrame) {
          clearTimeout(snapObject.animationFrame)
        }

        if (snapObject.scrollHandlerTimer) {
          // we only want to call a timeout once after scrolling..
          clearTimeout(snapObject.scrollHandlerTimer)
        } else {
          snapObject.scrollStart = {
            y: snapObject.target.scrollTop,
            x: snapObject.target.scrollLeft,
          }
        }

        snapObject.speedDeltaX = 0
        snapObject.speedDeltaY = 1

        snapObject.target.removeEventListener(
          'scroll',
          snapObject.startAnimation,
          false
        )
        snapObject.animating = true

        const snapPoint = { x: 0, y: window.innerHeight * (index + 1) }

        snapObject.smoothScroll(snapObject.target, snapPoint, () => {
          snapObject.animating = false
          snapObject.target.addEventListener(
            'scroll',
            snapObject.startAnimation,
            false
          )
          snapObject.onAnimationEnd()
        })

        if (!isNaN(snapPoint.x) || !isNaN(snapPoint.y)) {
          snapObject.scrollStart = snapPoint
        }
      }
    },
    [snapObject]
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
        visible={showNavbar}
        activeNav={activeNavIndex}
        scrollbarWidth={scrollbarWidth}
        onClick={changeNav}
      />

      <Parallax
        pages={3}
        scrolling={false}
        ref={(ref: any) => setParallaxRef(ref)}
      >
        {/* <div> */}
        <ParallaxLayer offset={0} speed={0.3}>
          <IntroSlide />
        </ParallaxLayer>
        {/* </div> */}

        {/* <div> */}
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
              inverseColors={slideNavInvertColors}
              onChange={onSlideChange}
            />
          </ParallaxLayer>
        </ParallaxLayer>
        {/* </div> */}

        {/* <div> */}
        <ParallaxLayer offset={2} speed={0}>
          <div className="h-screen bg-gray-900 pt-24">
            <AniLink fade to="/blog/nauticus" duration={0.2}>
              Hello
            </AniLink>
          </div>
        </ParallaxLayer>
        {/* </div> */}
      </Parallax>
    </div>
  )
}
