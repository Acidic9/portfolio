import React from 'react'

export interface WebpSupportedInterface {
  webpSupported: boolean | null
}

export const WebpSupportedContext = React.createContext<WebpSupportedInterface>(
  {} as WebpSupportedInterface
)

export default WebpSupportedContext
