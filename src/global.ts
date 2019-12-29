export type ImageTypes = { [key: number]: { [key: string]: string } }

export interface Project {
  title: string
  description: string
  screenshot: ImageTypes
  banner: ImageTypes
  technologies: Technology[]
  disableBlog: boolean
}

export enum Technology {
  Docker,
  GoogleCloudPlatform,
  Gulp,
  Netlify,
  NodeJS,
  Nunjucks,
  PHP,
  ReactJS,
  SASS,
  Shopify,
  Twig,
  TypeScript,
  VueJS,
  Webpack,
  Wordpress,
}
