import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PrivacyPolicy, TermsOfService } from './Legal.jsx'
import './index.css'

const routes = {
  '/privacy': PrivacyPolicy,
  '/terms': TermsOfService,
}
const path = window.location.pathname.replace(/\/+$/, '') || '/'
const Page = routes[path] || App

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
)
