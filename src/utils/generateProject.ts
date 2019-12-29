import { Project } from '../global'

export default (
  id: string,
  title: Project['title'],
  description: Project['description'],
  technologies: Project['technologies'],
  disableBlog?: Project['disableBlog']
) => {
  const screenshotSizes = [640, 1280, 1526]
  const bannerSizes = [640, 768, 1024, 1280]

  const screenshots: Project['screenshot'] = {}
  screenshotSizes.forEach(size => {
    const jpg = require(`../images/projects/screenshots/${size}/${id}.jpg`)
    const webp = require(`../images/projects/screenshots/${size}/${id}.webp`) // TODO: Replace with .webp
    screenshots[size] = {
      jpg,
      webp,
    }
  })

  const banners: Project['banner'] = {}
  bannerSizes.forEach(size => {
    const jpg = require(`../images/projects/banners/${size}/${id}-blurred.jpg`)
    const webp = require(`../images/projects/banners/${size}/${id}-blurred.webp`) // TODO: Replace with .webp
    banners[size] = {
      jpg,
      webp,
    }
  })

  return {
    title,
    description,
    screenshot: screenshots,
    banner: banners,
    technologies,
    disableBlog: disableBlog == null ? false : disableBlog,
  }
}
