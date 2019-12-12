import React from 'react'
import '../styles/styles.css'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Navbar from './Navbar'
import projects from '../projects'

interface Props {
  project: string
}

const BlogPage: React.FunctionComponent<Props> = ({
  project: projectID,
  children,
}) => {
  const { title, description, banner } = projects[projectID]

  return (
    <div className="bg-gray-100 font-roboto">
      <Navbar
        navItems={['Case Studies', 'Get in Touch']}
        activeItem={0}
        visible={true}
        scrollbarWidth={0}
        fixed={false}
      />

      <div
        className={
          'pt-32 md:pt-40 pb-6 md:pb-16 px-8 md:px-24 mb-10 bg-center bg-cover' +
          ` bg-project-${projectID}`
        }
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end text-white">
          <div className="flex flex-col max-w-lg">
            <h1
              className={
                'text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider leading-none uppercase' +
                (description ? ' mb-5' : '')
              }
            >
              {title}
            </h1>
            {description && <p className="mb-5 tracking-wide">{description}</p>}
          </div>

          <div>
            <AniLink fade to="/#case-studies" duration={0.2}>
              <span className="flex items-center text-xs tracking-wide hover:underline">
                Browse More Projects
              </span>
            </AniLink>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-2xl pb-8 px-8 text-md md:text-lg tracking-wide leading-relaxed">
        {children}
      </div>
    </div>
  )
}

export default BlogPage
