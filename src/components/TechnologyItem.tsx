import React, { useState, useEffect } from 'react'

import DockerLogo from '../images/technlogies/docker.svg'
import GoogleCloudPlatformLogo from '../images/technlogies/google-cloud-platform.svg'
import GulpLogo from '../images/technlogies/gulp.svg'
import NetlifyLogo from '../images/technlogies/netlify.svg'
import NodeJSLogo from '../images/technlogies/nodejs.svg'
import NunjucksLogo from '../images/technlogies/nunjucks.svg'
import PHPLogo from '../images/technlogies/php.svg'
import ReactJSLogo from '../images/technlogies/reactjs.svg'
import SASSLogo from '../images/technlogies/sass.svg'
import ShopifyLogo from '../images/technlogies/shopify.svg'
import TwigLogo from '../images/technlogies/twig.svg'
import TypeScriptLogo from '../images/technlogies/typescript.svg'
import VueJSLogo from '../images/technlogies/vuejs.svg'
import WebpackLogo from '../images/technlogies/webpack.svg'
import WordpressLogo from '../images/technlogies/wordpress.svg'

const technlogies = [
  ['Docker', DockerLogo],
  ['Google Cloud Platform', GoogleCloudPlatformLogo],
  ['Gulp', GulpLogo],
  ['Netlify', NetlifyLogo],
  ['NodeJS', NodeJSLogo],
  ['Nunjucks', NunjucksLogo],
  ['PHP', PHPLogo],
  ['ReactJS', ReactJSLogo],
  ['SASS', SASSLogo],
  ['Shopify', ShopifyLogo],
  ['Twig', TwigLogo],
  ['TypeScript', TypeScriptLogo],
  ['VueJS', VueJSLogo],
  ['Webpack', WebpackLogo],
  ['WordPress', WordpressLogo],
]

interface Props {
  technology: Technology
  showLabel: boolean
}

const TechnologyItem: React.FunctionComponent<Props> = ({
  technology,
  showLabel,
}) => {
  const [logo, setLogo] = useState<string>()
  const [label, setLabel] = useState<string>()

  useEffect(() => {
    setLabel(technlogies[technology][0])
    setLogo(technlogies[technology][1])
  }, [technology])

  if (logo == null || label == null) return null

  return (
    <div className="flex" title={label}>
      <img
        className={'w-4 md:w-5' + (showLabel === false ? '' : ' mr-1')}
        src={logo}
      />
      {showLabel !== false && <span className="text-sm">{label}</span>}
    </div>
  )
}

export default TechnologyItem
