export type Project = {
  slug: string
  name: string
  description: string
  techStack: string[]
  date: string
  type: string
  client?: string
  url?: string
  images: { src: string; alt: string }[]
}

export const projects: Project[] = [
  {
    slug: 'polygram',
    name: 'Polygram',
    description: 'Polymarket integrated Telegram Bot - WIP',
    techStack: ['JavaScript', 'Telegram Bot API', 'PostgreSQL'],
    date: '2025',
    type: 'Telegram Bot',
    client: 'Personal',
    url: 'https://github.com/flvckz/polygram',
    images: [
      { src: '/polygram-banner.png', alt: 'Polygram preview' },
    ],
  },
  {
    slug: 'asterstrategy',
    name: 'AsterStrategy',
    description: 'Web3 Token Treasury and Yield Platform',
    techStack: ['Docs', 'Gitbook', 'Web3', 'React', 'MERN', 'Solidity'],
    date: '2025',
    type: 'Web3 Project',
    client: 'AsterStrategy',
    url: 'https://aster-strategy.gitbook.io/asterstrategy-docs/WJ8wnrTo3CVgyulPgXC6',
    images: [
      { src: '/asterstrategy-landing.png', alt: 'AsterStrategy Landing 1' },
      { src: '/asterstrategy-landing-data.png', alt: 'AsterStrategy Landing 2' },
      { src: '/asterstrategy-treasury-dashboard.png', alt: 'AsterStrategy Treasury Dashboard' },
    ],
  },
  {
    slug: 'park-it',
    name: 'Park-It',
    description: 'Native Android App for Parking Spots',
    techStack: ['Kotlin', 'SQL', 'Android'],
    date: '2021–2022',
    type: 'Mobile Android App',
    client: 'ORT Labs',
    url: 'https://github.com/flvckz/park-it-finalversion',
    images: [
      { src: '/parkit-screens.png', alt: 'Park-It screen 1' },
      { src: '/parkit-usage.png', alt: 'Park-It screen 2' },
    ],
  },
  {
    slug: 'placey',
    name: 'Placey',
    description: 'Web3 Lands Space and NFT Marketplace backed by Decentraland',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Solidity','Figma', 'Product Design', 'Web3'],
    date: '2022–2023',
    type: 'Web3 Project',
    client: 'Placey',
    url: 'https://www.figma.com/proto/5mwdl5uOm7aQ02IeK4ZwzD/Placey-Landing-Page?node-id=0-1&p=f&t=G8VvS7LUYFBpoLse-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    images: [
      { src: '/placey-landing.png', alt: 'Placey preview 1' },
      { src: '/placey-market-landing.png', alt: 'Placey preview 2' },
      { src: '/placey-lands.png', alt: 'Placey preview 3' },
      { src: '/placey-assets.png', alt: 'Placey preview 4' },
    ],
  },
  {
    slug: 're-landing',
    name: 'Real State Landing',
    description: 'Landing Page for RE Business @ Aptimia',
    techStack: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'Node.js', 'Figma', 'UI/UX'],
    date: '2023',
    type: 'Web Landing Page',
    client: 'Aptimia',
    url: 'https://www.figma.com/proto/nu0yPkjvf4tCbseICysLHD/Real-Estate-Landing-1?node-id=3-27&starting-point-node-id=3%3A27&t=XOTOC5cGIl8twJrp-1',
    images: [
      { src: '/re-landing1.png', alt: 'RE Landing preview 1' },
      { src: '/re-landing2.png', alt: 'RE Landing preview 2' },
      { src: '/re-landing3.png', alt: 'RE Landing preview 3' },
      { src: '/re-landing4.png', alt: 'RE Landing preview 4' },
    ],
  },
  {
    slug: 'unique-bikes',
    name: 'Nazko Unique Bikes',
    description: 'Landing for Nazo Unique Bikes @ Aptimia',
    techStack: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'Node.js', 'Figma', 'UI/UX', 'Shopify'],
    date: '2023',
    type: 'Web Landing Page integrated with Shopify',
    client: 'Aptimia',
    url: 'https://www.figma.com/proto/hDeftHJnAYJON0EqC1Zvxr/UNIQUE-BIKES--Community-?node-id=1-1038&p=f&t=RUdNptxxAFTT1Ib9-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A519',
    images: [
      { src: '/nazko-landing1.png', alt: 'Unique Bikes preview 1' },
      { src: '/nazko-landing2.png', alt: 'Unique Bikes preview 2' },
      { src: '/nazko-landing3.png', alt: 'Unique Bikes preview 3' },
      { src: '/nazko-landing4.png', alt: 'Unique Bikes preview 4' },
      { src: '/nazko-landing5.png', alt: 'Unique Bikes preview 5' },
    ],
  },
  {
    slug: 'adopt-a-dog',
    name: 'Adopt-a-Dog',
    description: 'Native Android App for Adopting Dogs',
    techStack: ['Kotlin', 'API', 'Android'],
    date: '2023',
    type: 'Mobile Android App',
    client: 'ORT Labs',
    url: 'https://github.com/flvckz/parcial-tp3',
    images: [
      { src: '/adopt1.png', alt: 'Adopt-a-Dog preview 1' },
      { src: '/adopt2.png', alt: 'Adopt-a-Dog preview 2' },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug.toLowerCase() === slug.toLowerCase())
}

export function getNextProjectSlug(slug: string): string | undefined {
  const index = projects.findIndex((p) => p.slug.toLowerCase() === slug.toLowerCase())
  if (index === -1) return undefined
  const nextIndex = (index + 1) % projects.length
  return projects[nextIndex].slug
}