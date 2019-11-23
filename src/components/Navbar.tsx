import React from 'react'
import AlihanSeyhunLogoSmall from '../images/alihan-seyhun-logo-small.svg'

interface Props {
  visible?: boolean
  activeNav?: number
  scrollbarWidth: number
}

const Navbar: React.FunctionComponent<Props> = props => {
  return (
    <div
      className={
        'fixed top-0 left-0 z-20 flex justify-between items-center bg-black-to-light w-full py-6 px-14 transition-opacity transition-250 transition-ease ' +
        (props.visible ? 'opacity-100' : 'opacity-0')
      }
      style={{
        marginRight: props.scrollbarWidth,
        width: `calc(100% - ${props.scrollbarWidth}px)`,
      }}
    >
      <img src={AlihanSeyhunLogoSmall} width={120} />

      <div className="flex items-center text-white text-sm uppercase tracking-wide">
        <a
          href="#"
          className={'mr-8' + (props.activeNav !== 0 ? ' opacity-50' : '')}
        >
          Case Studies
        </a>
        <a href="#" className={props.activeNav !== 1 ? ' opacity-50' : ''}>
          Get in Touch
        </a>
      </div>
    </div>
  )
}

export default Navbar
