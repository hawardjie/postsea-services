import React from 'react'
import { renderToString } from 'react-dom/server'
import { routes } from './routes.js'

export { routes }

export function render(path) {
  const { component: Page } = routes[path]
  return renderToString(
    <React.StrictMode>
      <Page />
    </React.StrictMode>,
  )
}
