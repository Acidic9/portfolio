import { useEffect, useState } from 'react'

export default (images: { [width: number]: string }) => {
  const [activeImage, setActiveImage] = useState<string>()

  useEffect(() => {
    if (typeof window === 'undefined') {
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

      setActiveImage(images[widths[imageIndex]])
    }

    handler()

    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [images])

  return activeImage
}
