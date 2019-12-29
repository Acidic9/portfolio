import React, { useState, useEffect } from 'react'
import '../styles/styles.css'

import { Helmet } from 'react-helmet'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Navbar from './Navbar'
import projects from '../projects'
import TechnologyItem from './TechnologyItem'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
} from 'react-share'
import useResponsiveImage from '../hooks/useResponsiveImage'
import useWebpSupported from '../hooks/useWebpSupported'

interface Props {
  project: string
  readMinutes: number
  dateWritten?: string
}

const BlogPage: React.FunctionComponent<Props> = ({
  project: projectID,
  readMinutes,
  dateWritten,
  children,
}) => {
  const { title, description, banner, technologies } = projects[projectID]
  const bannerImage = useResponsiveImage(banner)

  const shareUrl =
    typeof window === 'undefined' ? 'ariseyhun.com' : window.location.href

  return (
    <div className="bg-gray-100 font-roboto">
      <Helmet>
        <title>Ari Seyhun - {title} Blog</title>
        <meta
          name="description"
          content={`Ari Seyhun - Developer • Designer • Entrepreneur - Read the development story about ${title}`}
        ></meta>
        <meta
          name="keywords"
          content={`ari,seyhun,web,developer,designer,ecommerce,wordpress,development,${title.toLowerCase()}`}
        ></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <meta name="language" content="English"></meta>
      </Helmet>

      <Navbar
        navItems={['Case Studies', 'Get in Touch']}
        activeItem={0}
        visible={true}
        scrollbarWidth={0}
        fixed={false}
      />

      <div
        className={
          'pt-32 md:pt-40 pb-6 md:pb-16 px-8 md:px-24 mb-8 md:mb-10 bg-center bg-cover' +
          ` bg-project-${projectID}`
        }
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end text-white">
          <div className="flex flex-col max-w-lg">
            <h1
              className={
                'text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider leading-none uppercase' +
                (description || technologies ? ' mb-5' : '')
              }
            >
              {title}
            </h1>
            {description && (
              <p
                className={'mb-5 tracking-wide' + (technologies ? ' mb-5' : '')}
              >
                {description}
              </p>
            )}
            {technologies && (
              <div className="flex flex-wrap items-center mb-2">
                {technologies
                  .sort((a, b) => a - b)
                  .map(technology => (
                    <div className="mr-4 md:mr-6 mb-3" key={technology}>
                      <TechnologyItem
                        technology={technology}
                        showLabel={false}
                      />
                    </div>
                  ))}
              </div>
            )}
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
        <div className="flex justify-between items-center text-gray-800 text-sm mb-5 md:mb-8">
          <span className="">
            {readMinutes} min read{dateWritten && ` • ${dateWritten}`}
          </span>
          <span className="flex">
            <TwitterShareButton
              className="mr-2"
              url={shareUrl}
              title={`${title} • ${description}\n\n`}
            >
              <TwitterIcon size={24} round={true} />
            </TwitterShareButton>
            <FacebookShareButton
              className="mr-2"
              url={shareUrl}
              quote={`${title} • ${description}\n\n`}
            >
              <FacebookIcon size={24} round={true} />
            </FacebookShareButton>
            <LinkedinShareButton url={shareUrl}>
              <LinkedinIcon size={24} round={true} />
            </LinkedinShareButton>
          </span>
        </div>
        {children}
      </div>
    </div>
  )
}

export default BlogPage
