import App from './App.jsx'
import { PrivacyPolicy, TermsOfService } from './Legal.jsx'

const description =
  'PostSea Services by POSTSEA LLC: Food and Me, File Sharing, EconoWorld, Home Maintenance, Flight Tracker, Sharing Guru, Stock Price Watch, TourPet, and AI Hub.'

// Each route is pre-rendered to static HTML at build time (see scripts/prerender.js).
export const routes = {
  '/': { component: App, title: 'PostSea Services', description },
  '/privacy': {
    component: PrivacyPolicy,
    title: 'Privacy Policy | PostSea',
    description: 'How POSTSEA LLC collects, uses, and protects personal information across PostSea services.',
  },
  '/terms': {
    component: TermsOfService,
    title: 'Terms of Service | PostSea',
    description: 'The terms that govern use of PostSea websites, apps, and services provided by POSTSEA LLC.',
  },
}

export function routeFor(path) {
  const clean = path.replace(/\/+$/, '') || '/'
  return routes[clean] || routes['/']
}
