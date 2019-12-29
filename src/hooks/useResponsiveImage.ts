import { useEffect, useState, useContext } from 'react'
import { ImageTypes } from '../global'
import WebpSupportedContext from '../context/WebpSupportedContext'

export default (images: ImageTypes) => {
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const { webpSupported } = useContext(WebpSupportedContext)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (webpSupported == null) {
      return
    }

    const widths = Object.keys(images)
      .map(key => Number(key))
      .sort((a, b) => a - b)

    const handler = () => {
      const windowWidth = window.innerWidth

      let imageIndex = widths.findIndex(width => {
        return width > windowWidth
      })
      if (imageIndex === -1) {
        imageIndex = widths.length - 1
      }

      const extension = webpSupported ? 'webp' : 'jpg'
      setActiveImage(images[widths[imageIndex]][extension])
    }

    handler()

    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [images, webpSupported])

  return activeImage
}
