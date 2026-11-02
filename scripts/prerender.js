// Turns the built single-page app into static HTML for each route, so the
// PostSea name and the Privacy/Terms links are visible without JavaScript
// (needed for Google OAuth branding verification and search crawlers).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, routes } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

for (const [route, { title, description }] of Object.entries(routes)) {
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace('<!--meta-description-->', `<meta name="description" content="${escape(description)}" />`)
    .replace('<div id="root"></div>', `<div id="root" data-route="${route}">${render(route)}</div>`)

  // /privacy -> dist/privacy.html, served at /privacy via Vercel "cleanUrls".
  const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`
  fs.writeFileSync(path.join(dist, file), html)
  console.log(`prerendered ${route}`)
}

fs.rmSync(ssrDir, { recursive: true, force: true })
