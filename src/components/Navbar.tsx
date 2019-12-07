import React, { useCallback } from 'react'
import AlihanSeyhunLogoSmall from '../images/alihan-seyhun-logo-small.svg'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

interface Props {
  visible?: boolean
  activeNav?: number
  scrollbarWidth: number
  fixed?: boolean
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

  const navItems = ['Case Studies', 'Get in Touch']

  return (
    <div
      className={
        (props.fixed !== false ? 'fixed' : 'absolute') +
        ' top-0 left-0 z-20 flex flex-col md:flex-row justify-between items-center bg-black-to-light w-full py-6 px-8 md:px-14 transition-opacity transition-250 transition-ease ' +
        (props.visible ? 'opacity-100' : 'opacity-0')
      }
      style={{
        marginRight: props.scrollbarWidth,
        width: `calc(100% - ${props.scrollbarWidth}px)`,
      }}
    >
      <AniLink fade to="/" duration={0.2}>
        <img className="mb-4 md:mb-0" src={AlihanSeyhunLogoSmall} width={120} />
      </AniLink>

      <div className="flex items-center text-white text-sm uppercase tracking-wide">
        {navItems.map((navItem, index) => (
          <a
            href="#"
            key={index}
            className={
              (index < navItems.length - 1 ? 'mr-8' : '') +
              (props.activeNav !== index ? ' opacity-50' : '')
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
