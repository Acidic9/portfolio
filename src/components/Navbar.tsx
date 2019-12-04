import React, { useCallback } from 'react'
import AlihanSeyhunLogoSmall from '../images/alihan-seyhun-logo-small.svg'

interface Props {
  visible?: boolean
  activeNav?: number
  scrollbarWidth: number
  onClick?: (index: number) => void
}

const Navbar: React.FunctionComponent<Props> = props => {
  const onNavClick = useCallback(
    (index: number) => {
      if (props.onClick) {
        props.onClick(index)
      }
    },
    [props.onClick]
  )

  return (
    <div
      className={
        'fixed top-0 left-0 z-20 flex justify-between items-center bg-black-to-light w-full py-6 px-8 md:px-14 transition-opacity transition-250 transition-ease ' +
        (props.visible ? 'opacity-100' : 'opacity-0')
      }
      style={{
        marginRight: props.scrollbarWidth,
        width: `calc(100% - ${props.scrollbarWidth}px)`,
      }}
    >
      <img src={AlihanSeyhunLogoSmall} width={120} />

      <div className="flex items-center text-white text-sm uppercase tracking-wide">
        {['Case Studies', 'Get in Touch'].map((navItem, index) => (
          <a
            href="#"
            key={index}
            className={
              'mr-8' + (props.activeNav !== index ? ' opacity-50' : '')
            }
            onClick={() => {
              onNavClick(index)
            }}
          >
            {navItem}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
