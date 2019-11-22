import React, { useEffect, useState } from 'react'
import { ParallaxLayer } from 'react-spring/renderprops-addons'

interface Props {
  title: string
  paragraph: string
  image: string
  backgroundColor?: string
  textColor?: string
  rtl?: boolean
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
    <div className="px-8">
      <div
        className={
          'relative flex flex-row items-center h-screen' +
          ' bg-' +
          (props.backgroundColor || 'white') +
          (!props.rtl && ' justify-end')
        }
      >
        <ParallaxLayer offset={0.6} speed={0.08}>
          <div
            className={
              'absolute w-4/12 -translate-y-1/2 text-' +
              (props.textColor || 'black') +
              (props.rtl
                ? ' text-right right-0 pr-8'
                : ' text-left left-0 pl-8')
            }
          >
            <h2 className="mb-5 text-6xl font-bold leading-none">
              {props.title}
            </h2>
            <p>{props.paragraph}</p>
          </div>
        </ParallaxLayer>

        {imageWidth != null && imageHeight != null && (
          // <ParallaxLayer offset={0.5} speed={0.1}>
          <div
            className="bg-gray-900 p-4"
            style={{ width: imageWidth + 32, height: imageHeight + 32 }}
          >
            <div
              style={{
                backgroundImage: `url(${props.image})`,
                width: imageWidth,
                height: imageHeight,
              }}
              className="bg-center bg-contain bg-no-repeat"
            />
          </div>
          // </ParallaxLayer>
        )}
      </div>
    </div>
  )
}

export default CaseStudySlide
