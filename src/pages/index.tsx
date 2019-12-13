import React, { useState, useEffect, useCallback } from 'react'
import '../styles/styles.css'

import { easeQuadInOut } from 'd3-ease'

// Components
import { Helmet } from 'react-helmet'
import { useSwipeable } from 'react-swipeable'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Navbar from '../components/Navbar'
import SlideNavigation from '../components/SlideNavigation'
import IntroSlide from '../components/IntroSlide'
import projects from '../projects'
import CaseStudySlide from '../components/CaseStudySlide'
import GetInTouchSlide from '../components/GetInTouchSlide'

export default () => {
  const [parallaxRef, setParallaxRef] = useState<any | null>(null)
  const [parallaxProjectsRef, setParallaxProjectsRef] = useState<any | null>(
    null
  )
  const [showNavbar, setShowNavbar] = useState<boolean>(false)
  const [activeNavIndex, setActiveNavIndex] = useState<number | undefined>()
  const [scrollbarWidth, setScrollbarWidth] = useState<number>(0)
  const [slideDuration, setSlideDuration] = useState<number>(0)
  const [activeSlide, setActiveSlide] = useState<number>(0)
  const [titleSuffix, setTitleSuffix] = useState<string | null>(null)

  const pageHashes = ['', '#case-studies', '#contact']
  const projectIDs = Object.keys(projects)

  useEffect(() => {
    if (!parallaxRef) return

    if (window.location.hash.length > 1) {
      const hashIndex = pageHashes.findIndex(
        val => val === window.location.hash
      )
      if (hashIndex > 0) {
        parallaxRef.scrollTo(hashIndex)

        switch (hashIndex) {
          case 1:
            setTitleSuffix(
              `${projects[projectIDs[activeSlide]].title} Case Study`
            )
            break

          case 2:
            setTitleSuffix('Get in Touch')
            break
        }
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
      setTitleSuffix(`${projects[projectIDs[index]].title} Case Study`)
    },
    [parallaxProjectsRef]
  )

  const slideTo = useCallback(
    (index: number) => {
      if (!parallaxRef) return

      switch (index) {
        case 0:
          setTitleSuffix(null)
          break

        case 1:
          setTitleSuffix(
            `${projects[projectIDs[activeSlide]].title} Case Study`
          )
          break

        case 2:
          setTitleSuffix('Get in Touch')
          break
      }

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
    [parallaxRef, activeSlide, projectIDs, projects]
  )

  const caseStudySwipe = useCallback(
    (dir: -1 | 1) => {
      if (!parallaxProjectsRef) return

      const newIndex = Math.max(
        0,
        Math.min(projectIDs.length - 1, parallaxProjectsRef.offset + dir)
      )
      parallaxProjectsRef.scrollTo(newIndex)
      setActiveSlide(newIndex)
    },
    [parallaxProjectsRef]
  )

  const handlers = [
    useSwipeable({
      onSwipedUp: () => slideTo(1),
    }),
    useSwipeable({
      onSwipedUp: () => slideTo(2),
      onSwipedDown: () => slideTo(0),
      onSwipedLeft: () => caseStudySwipe(1),
      onSwipedRight: () => caseStudySwipe(-1),
    }),
    useSwipeable({
      onSwipedDown: () => slideTo(1),
    }),
  ]

  return (
    <div className="font-roboto" style={{ touchAction: 'none' }}>
      <Helmet>
        <title>
          Ari Seyhun{titleSuffix != null ? ` - ${titleSuffix}` : ''}
        </title>
        <meta
          name="description"
          content="Ari Seyhun - Developer • Designer • Entrepreneur - Whether your big project idea is an e-commerce store, complex app, or new software - get in touch and we can discuss it further."
        ></meta>
        <meta
          name="keywords"
          content="ari,seyhun,web,developer,designer,ecommerce,wordpress,development"
        ></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <meta name="language" content="English"></meta>
      </Helmet>

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
          <div {...handlers[0]}>
            <IntroSlide onNextSlide={() => slideTo(1)} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <div {...handlers[1]}>
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
          </div>

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
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
              onChange={onSlideChange}
            />
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0}>
          <div {...handlers[2]}>
            <GetInTouchSlide />
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
