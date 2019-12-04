import React, { useEffect, useState } from 'react'
import { ParallaxLayer } from 'react-spring/renderprops-addons'

interface Props {
  title: string
  paragraph: string
  image: string
  backgroundColor?: string
  textColor?: string
}

const CaseStudySlide: React.FunctionComponent<Props> = props => {
  const MAX_HEIGHT = 0.75 // 75%
  const MAX_WIDTH = 0.66 // 66%

  const [imageSize, setImageSize] = useState<[number, number] | null>(null)
  const [imageWidth, setImageWidth] = useState<number | null>(null)
  const [imageHeight, setImageHeight] = useState<number | null>(null)

  useEffect(() => {
    // Calculate image ratio
    var img = new Image()
    img.src = props.image
    img.onload = function() {
      setImageSize([img.naturalWidth, img.naturalHeight])
    }
  }, [props.image])

  useEffect(() => {
    if (imageSize == null) return

    const maxWindowWidth = window.innerWidth * MAX_WIDTH - 32
    const maxWindowHeight = window.innerHeight * MAX_HEIGHT - 32

    // Check width
    const scaleToMeetWidth = imageSize[0] / maxWindowWidth
    const potentialImageHeight = imageSize[1] * scaleToMeetWidth
    let scale = 1
    if (potentialImageHeight > maxWindowHeight) {
      // Use height constraint (set image to max height)
      scale = maxWindowHeight / imageSize[1]
    } else {
      // Use width constraint (set image to max width)
      scale = maxWindowWidth / imageSize[0]
      alert('based on width')
    }

    setImageWidth(imageSize[0] * scale)
    setImageHeight(imageSize[1] * scale)
  }, [imageSize])

  return (
    <div className="px-8 md:px-14">
      <div
        className={
          'relative flex flex-col md:flex-row items-center justify-center md:px-8 mx-auto w-full h-screen' +
          ' bg-' +
          (props.backgroundColor || 'white')
        }
      >
        {/* <ParallaxLayer offset={0.6} speed={0.08}> */}
        <div
          className={
            'md:w-1/3 md:mr-20 mb-8 md:mb-0 text-left left-0 text-' +
            (props.textColor || 'black')
          }
        >
          <h2 className="mb-5 text-5xl font-bold tracking-wider leading-none uppercase">
            {props.title}
          </h2>
          <p className="mb-5 tracking-wide">{props.paragraph}</p>
          <a href="#" className="text-md hover:underline">
            Read More
          </a>
        </div>
        {/* </ParallaxLayer> */}

        {imageWidth != null && imageHeight != null && (
          // <ParallaxLayer offset={0.5} speed={0.1}>
          <div className="bg-gray-900 p-2 w-full md:w-2/3">
            <div
              style={{
                backgroundImage: `url(${props.image})`,
                paddingBottom: '47%',
              }}
              className="bg-center bg-contain bg-no-repeat w-full"
            />
          </div>
          // </ParallaxLayer>
        )}
      </div>
    </div>
  )
}

export default CaseStudySlide
