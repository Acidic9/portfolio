import React, { useState, useContext } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import TechnologyItem from './TechnologyItem'
import projects from '../projects'
import hyphenCase from '../utils/hyphen-case'
import useResponsiveImage from '../hooks/useResponsiveImage'
import WebpSupportedContext from '../context/WebpSupportedContext'

interface Props {
  project: string
}

const CaseStudySlide: React.FunctionComponent<Props> = ({
  project: projectID,
}) => {
  const {
    title,
    description,
    screenshot,
    technologies,
    disableBlog,
  } = projects[projectID]

  const screenshotImage = useResponsiveImage(screenshot)

  return (
    <div className={'h-screen bg-project-' + projectID}>
      <div className="px-8 md:px-14">
        <div className="relative flex flex-col lg:flex-row items-center justify-center md:px-8 mx-auto w-full h-screen">
          <div className="lg:w-1/3 lg:mr-20 mb-8 lg:mb-0 text-left left-0 text-gray-200">
            <h2 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider leading-none uppercase">
              {title}
            </h2>
            <p className={'tracking-wide' + (technologies ? ' mb-5' : '')}>
              {description}
            </p>
            {technologies && (
              <div className="flex flex-wrap flex-1 items-center mb-2">
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
            {disableBlog !== true && (
              <AniLink fade to={`/blog/${projectID}`} duration={0.2}>
                <span className="text-md hover:underline">Read More</span>
              </AniLink>
            )}
          </div>

          <div className="bg-gray-900 p-2 w-full lg:w-2/3">
            <div
              style={{
                backgroundImage: `url(${screenshotImage})`,
                paddingBottom: '47%',
              }}
              className="bg-center bg-contain bg-no-repeat w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudySlide
