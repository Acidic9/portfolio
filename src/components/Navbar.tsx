import React, { useCallback } from 'react'
import AriSeyhunLogoSmall from '../images/ari-seyhun-logo-small.svg'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

interface Props {
  navItems: string[]
  activeItem?: number
  visible?: boolean
  scrollbarWidth: number
  fixed?: boolean
  onClick?: (index: number) => void
  onLogoClick?: () => void
}

const Navbar: React.FunctionComponent<Props> = ({
  navItems,
  activeItem,
  visible,
  scrollbarWidth,
  fixed,
  onClick,
  onLogoClick,
}) => {
  const onNavClick = useCallback(
    (index: number) => {
      if (onClick) {
        onClick(index)
      }
    },
    [onClick]
  )

  const isExternalPage =
    typeof window === 'undefined' ? false : window.location.pathname !== '/'

  return (
    <div
      className={
        (fixed !== false ? 'fixed' : 'absolute') +
        ' top-0 left-0 z-20 flex flex-col md:flex-row justify-between items-center bg-black-to-light-down w-full py-6 px-8 md:px-14 transition-opacity transition-250 transition-ease ' +
        (visible ? 'opacity-100' : 'hidden opacity-0')
      }
      style={{
        marginRight: scrollbarWidth,
        width: `calc(100% - ${scrollbarWidth}px)`,
      }}
    >
      {isExternalPage ? (
        <AniLink fade to="/" duration={0.2}>
          <img
            className="mb-4 md:mb-0 cursor-pointer"
            src={AriSeyhunLogoSmall}
            width={120}
            onClick={onLogoClick}
          />
        </AniLink>
      ) : (
        <img
          className="mb-4 md:mb-0 cursor-pointer"
          src={AriSeyhunLogoSmall}
          width={120}
          onClick={onLogoClick}
        />
      )}

      <div className="flex items-center text-white text-sm uppercase tracking-wide">
        {navItems.map((navItem, index) => {
          const link = (
            <span
              key={index}
              className={
                'cursor-pointer ' +
                (index < navItems.length - 1 ? 'mr-8' : '') +
                (activeItem !== index ? ' opacity-50' : '')
              }
              onClick={() => {
                onNavClick(index)
              }}
            >
              {navItem}
            </span>
          )

          if (isExternalPage) {
            const hashes = ['#case-studies', '#contact']
            return (
              <AniLink fade to={`/${hashes[index]}`} duration={0.2} key={index}>
                {link}
              </AniLink>
            )
          } else {
            return link
          }
        })}
      </div>
    </div>
  )
}

export default Navbar
