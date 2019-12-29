import generateProject from './utils/generateProject'
import { Technology, Project } from './global'

const projects: { [key: string]: Project } = {
  nauticus: generateProject(
    'nauticus',
    'Nauticus',
    'A global crypto-currency exchange app built with a team across the world using a huge variety of technologies.',
    [
      Technology.GoogleCloudPlatform,
      Technology.Gulp,
      Technology.Netlify,
      Technology.NodeJS,
      Technology.Nunjucks,
      Technology.ReactJS,
      Technology.SASS,
      Technology.VueJS,
      Technology.Webpack,
    ]
  ),

  'pirate-life': generateProject(
    'pirate-life',
    'Pirate Life',
    'Completely custom WordPress website for the Australian based beer brewery Pirate Life.',
    [
      Technology.Docker,
      Technology.GoogleCloudPlatform,
      Technology.NodeJS,
      Technology.ReactJS,
      Technology.PHP,
      Technology.Twig,
      Technology.Webpack,
      Technology.Wordpress,
    ],
    true
  ),

  'pirate-life-store': generateProject(
    'pirate-life-store',
    'Pirate Life Store',
    'Completely custom Shopify website selling merchandise for the PirateLife Beer Brewery.',
    [Technology.ReactJS, Technology.Shopify, Technology.Webpack],
    true
  ),

  sine: generateProject(
    'sine',
    'Sine',
    'A WordPress website built from the ground up with over 25+ pages.',
    [
      Technology.Docker,
      Technology.GoogleCloudPlatform,
      Technology.PHP,
      Technology.ReactJS,
      Technology.Twig,
      Technology.Webpack,
      Technology.Wordpress,
    ],
    true
  ),

  'sky-foundry': generateProject(
    'sky-foundry',
    'Sky Foundry',
    'A website built for Sky Foundry agency using a custom CMS.',
    [
      Technology.Netlify,
      Technology.NodeJS,
      Technology.VueJS,
      Technology.Webpack,
    ],
    true
  ),

  appliquette: generateProject(
    'appliquette',
    'Appliquette',
    'A custom WordPress site developed for the Adelaide based app development agency.',
    [
      Technology.Docker,
      Technology.GoogleCloudPlatform,
      Technology.PHP,
      Technology.Twig,
      Technology.Webpack,
      Technology.Wordpress,
    ],
    true
  ),

  'gondola-gondola': generateProject(
    'gondola-gondola',
    'Gondola Gondola',
    'Adelaide-based famous restaurant website.',
    [Technology.Netlify, Technology.Nunjucks, Technology.Webpack],
    true
  ),

  'ftx-battle-royale': generateProject(
    'ftx-battle-royale',
    'FTX Battle Royale',
    'A marketing website presenting a Battle Royale event for FTX.',
    [
      Technology.Netlify,
      Technology.NodeJS,
      Technology.Nunjucks,
      Technology.TypeScript,
      Technology.Webpack,
    ],
    true
  ),
}

export default projects
