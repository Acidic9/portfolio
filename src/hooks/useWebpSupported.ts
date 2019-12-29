import { useState, useEffect } from 'react'
import isWebpSupported from '../utils/webpSupported'

export default () => {
  const [webpSupported, setWebpSupported] = useState<boolean | null>(null)

  useEffect(() => {
    setWebpSupported(isWebpSupported())
  }, [])

  return {
    webpSupported,
  }
}
