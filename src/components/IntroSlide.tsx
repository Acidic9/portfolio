import React from 'react'
import AriSeyhunLogo from '../images/ari-seyhun-logo.svg'
import ChevronLeftSolid from '../images/chevron-left-solid-black.svg'

interface Props {
  onNextSlide?: () => void
}

const IntroSlide: React.FunctionComponent<Props> = ({ onNextSlide }) => {
  return (
    <div className="relative h-screen">
      <div className="flex flex-col justify-center items-center h-full text-center">
        <div className="flex flex-col justify-center items-center text-center -translate-y-4screen">
          <img
            src={AriSeyhunLogo}
            className="w-40 md:w-48 mb-8 sm:mb-10 md:mb-12"
          />
          <div className="flex flex-row text-sm md:text-md lg:text-lg font-bold tacking-wide">
            <span>
              Developer<span className="text-red-500">.</span>
            </span>
            <span className="mx-3 md:mx-6">
              Designer<span className="text-red-500">.</span>
            </span>
            <span>
              Entrepreneur<span className="text-red-500">.</span>
            </span>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 flex flex-col justify-center items-center w-full pt-4 md:pt-8 lg:pt-10 pb-8 md:pb-16 lg:pb-20 cursor-pointer group"
        onClick={onNextSlide}
      >
        <div className="absolute w-full h-3/4 bottom-0 left-0 bg-black-to-light-up opacity-0 transition-opacity transition-250 transition-ease group-hover:opacity-50"></div>
        <span className="mb-3 md:mb-4 text-md md:text-lg font-medium group-hover:translate-y-test transition-transform transition-250">
          View Projects
        </span>
        <img
          className="w-3 md:w-4 rotate-270 group-hover:translate-y-test2 transition-transform transition-250"
          src={ChevronLeftSolid}
        />
      </div>
    </div>
  )
}

export default IntroSlide
