import { Project, Technology } from './global'

import NauticusScreenshot from './images/projects/nauticus.png'
import NauticusScreenshotBlurred from './images/projects/nauticus-blurred.jpg'

import PirateLifeScreenshot from './images/projects/pirate-life.jpg'
import PirateLifeScreenshotBlurred from './images/projects/pirate-life-blurred.jpg'

import PirateLifeStoreScreenshot from './images/projects/pirate-life-store.jpg'
import PirateLifeStoreScreenshotBlurred from './images/projects/pirate-life-store-blurred.jpg'

import SineScreenshot from './images/projects/sine.jpg'
import SineScreenshotBlurred from './images/projects/sine-blurred.jpg'

import SkyFoundryScreenshot from './images/projects/sky-foundry.jpg'
import SkyFoundryScreenshotBlurred from './images/projects/sky-foundry-blurred.jpg'

import AppliquetteScreenshot from './images/projects/appliquette.jpg'
import AppliquetteScreenshotBlurred from './images/projects/appliquette-blurred.jpg'

import GondolaGondolaScreenshot from './images/projects/gondola-gondola.jpg'
import GondolaGondolaScreenshotBlurred from './images/projects/gondola-gondola-blurred.jpg'

import FTXBattleRoyaleScreenshot from './images/projects/ftx-battle-royale.jpg'
import FTXBattleRoyaleScreenshotBlurred from './images/projects/ftx-battle-royale-blurred.jpg'

const projects: { [key: string]: Project } = {
  nauticus: {
    title: 'Nauticus',
    description:
      'A global crypto-currency exchange app built with a team across the world using a huge variety of technologies.',
    screenshot: NauticusScreenshot,
    banner: NauticusScreenshotBlurred,
    technologies: [
      Technology.GoogleCloudPlatform,
      Technology.Gulp,
      Technology.Netlify,
      Technology.NodeJS,
      Technology.Nunjucks,
      Technology.ReactJS,
      Technology.SASS,
      Technology.VueJS,
      Technology.Webpack,
    ],
  },

  'pirate-life': {
    title: 'Pirate Life',
    description:
      'Completely custom WordPress website for the Australian based beer brewery Pirate Life.',
    screenshot: PirateLifeScreenshot,
    banner: PirateLifeScreenshotBlurred,
    technologies: [
      Technology.Docker,
      Technology.GoogleCloudPlatform,
      Technology.NodeJS,
      Technology.ReactJS,
      Technology.PHP,
      Technology.Twig,
      Technology.Webpack,
      Technology.Wordpress,
    ],
    disableBlog: true,
  },

  'pirate-life-store': {
    title: 'Pirate Life Store',
    description:
      'Completely custom Shopify website selling merchandise for the PirateLife Beer Brewery.',
    screenshot: PirateLifeStoreScreenshot,
    banner: PirateLifeStoreScreenshotBlurred,
    technologies: [Technology.ReactJS, Technology.Shopify, Technology.Webpack],
    disableBlog: true,
  },

  sine: {
    title: 'Sine',
    description:
      'A WordPress website built from the ground up with over 25+ pages.',
    screenshot: SineScreenshot,
    banner: SineScreenshotBlurred,
    technologies: [
      Technology.Docker,
      Technology.GoogleCloudPlatform,
      Technology.PHP,
      Technology.ReactJS,
      Technology.Twig,
      Technology.Webpack,
      Technology.Wordpress,
    ],
    disableBlog: true,
  },

  'sky-foundry': {
    title: 'Sky Foundry',
    description: 'A website built for Sky Foundry agency using a custom CMS.',
    screenshot: SkyFoundryScreenshot,
    banner: SkyFoundryScreenshotBlurred,
    technologies: [
      Technology.Netlify,
      Technology.NodeJS,
      Technology.VueJS,
      Technology.Webpack,
    ],
    disableBlog: true,
  },

  appliquette: {
    title: 'Appliquette',
    description:
      'A custom WordPress site developed for the Adelaide based app development agency.',
    screenshot: AppliquetteScreenshot,
    banner: AppliquetteScreenshotBlurred,
    technologies: [
      Technology.Docker,
      Technology.GoogleCloudPlatform,
      Technology.PHP,
      Technology.Twig,
      Technology.Webpack,
      Technology.Wordpress,
    ],
    disableBlog: true,
  },

  'gondola-gondola': {
    title: 'Gondola Gondola',
    description: 'Adelaide-based famous restaurant website.',
    screenshot: GondolaGondolaScreenshot,
    banner: GondolaGondolaScreenshotBlurred,
    technologies: [Technology.Netlify, Technology.Nunjucks, Technology.Webpack],
    disableBlog: true,
  },

  'ftx-battle-royale': {
    title: 'FTX Battle Royale',
    description:
      'A marketing website presenting a Battle Royale event for FTX.',
    screenshot: FTXBattleRoyaleScreenshot,
    banner: FTXBattleRoyaleScreenshotBlurred,
    technologies: [
      Technology.Netlify,
      Technology.NodeJS,
      Technology.Nunjucks,
      Technology.TypeScript,
      Technology.Webpack,
    ],
    disableBlog: true,
  },
}

export default projects
