import React from 'react'
import AlihanSeyhunLogo from '../../images/alihan-seyhun-logo.svg'

export default () => (
  <div className="h-screen">
    <div className="flex flex-col justify-center items-center h-full text-center">
      <img src={AlihanSeyhunLogo} className="w-1/5 mb-12" />
      <div className="text-xl font-bold tacking-wide">
        <span>
          Developer<span className="text-red-500">.</span>
        </span>
        <span className="mx-6">
          Designer<span className="text-red-500">.</span>
        </span>
        <span>
          Entrepreneur<span className="text-red-500">.</span>
        </span>
      </div>
    </div>
  </div>
)
