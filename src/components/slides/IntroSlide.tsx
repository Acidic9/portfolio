import React from 'react'
import AlihanSeyhunLogo from '../../images/alihan-seyhun-logo.svg'

export default () => (
  <div className="h-screen">
    <div className="flex flex-col justify-center items-center h-full text-center">
      <img
        src={AlihanSeyhunLogo}
        className="w-3/5 sm:w-2/5 md:w-2/6 lg:w-1/5 mb-8 sm:mb-10 md:mb-12"
      />
      <div className="flex flex-row text-lg sm:text-xl font-bold tacking-wide">
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
)
