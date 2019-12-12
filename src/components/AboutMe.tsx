import React from 'react'

import Me from '../images/pp.jpg'
import LocationImg from '../images/location.svg'
import EnvelopeImg from '../images/envelope.svg'
import GithubImg from '../images/github.svg'

export default () => (
  <div className="flex flex-row lg:flex-col items-center justify-between lg:justify-center mx-auto">
    <div
      className="w-24 h-24 md:w-32 md:h-32 border-2 border-white bg-cover bg-center bg-no-repeat rounded-full mr-4 sm:mr-8 lg:mr-0 lg:mb-8"
      style={{ backgroundImage: `url(${Me})` }}
    ></div>

    <div className="flex flex-col">
      <div className="flex mb-2 md:mb-3">
        <img src={LocationImg} className="w-5 h-5 md:w-6 md:h-6 mr-4" />
        <span className="text-xs sm:text-sm md:text-base">
          Adelaide, South Australia
        </span>
      </div>
      <a
        className="flex mb-2 md:mb-3 hover:underline"
        href="mailto:ariseyhun@live.com.au"
        target="_blank"
      >
        <img src={EnvelopeImg} className="w-5 h-5 md:w-6 md:h-6 mr-4" />
        <span className="text-xs sm:text-sm md:text-base">
          ariseyhun@live.com.au
        </span>
      </a>
      <a
        className="flex hover:underline"
        href="https://github.com/Acidic9"
        target="_blank"
      >
        <img src={GithubImg} className="w-5 h-5 md:w-6 md:h-6 mr-4" />
        <span className="text-xs sm:text-sm md:text-base">Acidic9</span>
      </a>
    </div>
  </div>
)
