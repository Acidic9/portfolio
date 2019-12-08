import React, { useState, useEffect, useCallback } from 'react'
import ChevronLeftSolid from '../images/chevron-left-solid.svg'

interface Props {
  slideCount: number
  onChange?: (index: number) => void
}

const SlideNavigation: React.FunctionComponent<Props> = ({
  slideCount,
  onChange,
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0)
  const [dots, setDots] = useState<JSX.Element[]>([])

  useEffect(() => {
    if (onChange) {
      onChange(activeSlide)
    }
  }, [activeSlide])

  useEffect(() => {
    setDots(
      new Array(slideCount).fill(null).map((_, index) => {
        let isActive = false
        if (index === activeSlide) {
          isActive = true
        }

        return (
          <div
            className="cursor-pointer mx-2 p-2"
            key={index}
            onClick={() => setActiveSlide(index)}
          >
            <div
              className={
                'select-none w-1 h-1 rounded-full transition-opacity transition-250 bg-white' +
                (isActive ? '' : ' opacity-25')
              }
            ></div>
          </div>
        )
      })
    )
  }, [activeSlide])

  const previousSlide = useCallback(() => {
    if (activeSlide <= 0) return

    setActiveSlide(activeSlide - 1)
  }, [activeSlide])

  const nextSlide = useCallback(() => {
    if (activeSlide >= slideCount - 1) return

    setActiveSlide(activeSlide + 1)
  }, [activeSlide])

  return (
    <div className="flex items-center mx-auto w-screen">
      <img
        src={ChevronLeftSolid}
        className={
          'select-none h-6 ml-auto mr-4 transition-opacity transition-100' +
          (activeSlide <= 0 ? ' opacity-0' : ' opacity-100 cursor-pointer')
        }
        onClick={previousSlide}
      />
      {dots}
      <img
        src={ChevronLeftSolid}
        className={
          'select-none h-6 mr-auto ml-4 transition-opacity transition-100 rotate-180' +
          (activeSlide >= slideCount - 1
            ? ' opacity-0'
            : ' opacity-100 cursor-pointer')
        }
        onClick={nextSlide}
      />
    </div>
  )
}

export default SlideNavigation
