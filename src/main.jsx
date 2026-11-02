import React from 'react'
import ReactDOM from 'react-dom/client'
import { routeFor } from './routes.js'
import './index.css'

const path = window.location.pathname.replace(/\/+$/, '') || '/'
const { component: Page } = routeFor(path)
const root = document.getElementById('root')
const tree = (
  <React.StrictMode>
    <Page />
  </React.StrictMode>
)

// Production pages arrive pre-rendered; attach to that HTML when it is for this page.
if (root.dataset.route === path) {
  ReactDOM.hydrateRoot(root, tree)
} else {
  ReactDOM.createRoot(root).render(tree)
}
