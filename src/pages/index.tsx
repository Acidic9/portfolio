import React, { useState, useEffect, useCallback } from 'react'
import '../styles/styles.css'

import { easeQuadInOut } from 'd3-ease'

// Components
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Navbar from '../components/Navbar'
import SlideNavigation from '../components/SlideNavigation'
import IntroSlide from '../components/IntroSlide'
import projects from '../projects'
import CaseStudySlide from '../components/CaseStudySlide'

export default () => {
  const [parallaxRef, setParallaxRef] = useState<any | null>(null)
  const [parallaxProjectsRef, setParallaxProjectsRef] = useState<any | null>(
    null
  )
  const [showNavbar, setShowNavbar] = useState<boolean>(false)
  const [activeNavIndex, setActiveNavIndex] = useState<number | undefined>()
  const [scrollbarWidth, setScrollbarWidth] = useState<number>(0)
  const [slideDuration, setSlideDuration] = useState<number>(0)

  const pageHashes = ['', '#case-studies', '#contact']

  useEffect(() => {
    if (!parallaxRef) return

    if (window.location.hash.length > 1) {
      const hashIndex = pageHashes.findIndex(
        val => val === window.location.hash
      )
      if (hashIndex > 0) {
        parallaxRef.scrollTo(hashIndex)
      } else {
        history.pushState(
          '',
          document.title,
          window.location.pathname + window.location.search
        )
      }
    }

    setSlideDuration(700)
  }, [parallaxRef])

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

      parallaxProjectsRef.scrollTo(index)
    },
    [parallaxProjectsRef]
  )

  const slideTo = useCallback(
    (index: number) => {
      if (!parallaxRef) return

      if (pageHashes[index] === '') {
        history.pushState(
          '',
          document.title,
          window.location.pathname + window.location.search
        )
      } else {
        window.location.hash = pageHashes[index]
      }

      setTimeout(() => {
        parallaxRef.scrollTo(index)
      }, 10)
    },
    [parallaxRef]
  )

  // const slides = [
  //   NauticusSlide,
  //   PirateLifeSlide,
  //   PirateLifeStoreSlide,
  //   SineSlide,
  //   SkyFoundrySlide,
  //   AppliquetteSlide,
  //   GondolaGondolaSlide,
  //   FTXBattleRoyaleSlide,
  // ]

  const projectIDs = Object.keys(projects)

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
        config={{ duration: slideDuration, easing: easeQuadInOut }}
      >
        <ParallaxLayer offset={0} speed={0}>
          <IntroSlide onNextSlide={() => slideTo(1)} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <Parallax
            pages={projectIDs.length}
            horizontal={true}
            scrolling={false}
            ref={(ref: any) => setParallaxProjectsRef(ref)}
          >
            {projectIDs.map((projectID, index) => (
              <ParallaxLayer offset={index} speed={0} key={index}>
                <CaseStudySlide project={projectID} />
              </ParallaxLayer>
            ))}

            {/* {slides.map((slide, index) => (
              <ParallaxLayer offset={index} speed={0} key={index}>
                {React.createElement(slide)}
              </ParallaxLayer>
            ))} */}
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
              slideCount={projectIDs.length}
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

export const onRouteUpdate = ({ location, prevLocation }: any) => {
  console.log('new pathname', location.pathname)
  console.log('old pathname', prevLocation ? prevLocation.pathname : null)
}
