import './App.css'

const projects = [
  {
    id: 7,
    title: 'Food and Me',
    description: 'Your Personal Food Companion',
    url: 'https://foodandme.ai',
    domain: 'foodandme.ai'
  },
  {
    id: 8,
    title: 'File Sharing',
    description: 'Share Files Across Social Media',
    url: 'https://file.mba',
    domain: 'file.mba'
  },
  {
    id: 1,
    title: 'EconoWorld',
    description: 'Visualizing Economic Data Insights',
    url: 'https://econo.world',
    domain: 'econo.world'
  },
  {
    id: 9,
    title: 'Home Maintenance',
    description: 'Home Maintenance Made Simple',
    url: 'https://myhome.homes',
    domain: 'myhome.homes'
  },
  {
    id: 2,
    title: 'Flight Tracker',
    description: 'Real-time Aircraft Monitoring (US Airspace)',
    url: 'https://flightinfo.today',
    domain: 'flightinfo.today'
  },
  {
    id: 3,
    title: 'Stock Price Watch',
    description: 'Wall Street analytics for everyone',
    url: 'https://stockprice.watch',
    domain: 'stockprice.watch'
  },
  {
    id: 4,
    title: 'Live Car Parking, Bike, and Scooter Share Tracking',
    description: 'Real-Time Micromobility Sharing System',
    url: 'https://sharing.guru',
    domain: 'sharing.guru'
  },
  {
    id: 5,
    title: 'TourPet',
    description: 'Dog lover care and insights, all in one app',
    url: 'https://tour.pet',
    domain: 'tour.pet'
  },
  {
    id: 6,
    title: 'AI Hub',
    description: 'Enterprise AI Integration with Full API Support',
    url: 'https://aihub.mom',
    domain: 'aihub.mom'
  }
]

function ProjectCard({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <span className="project-link">{project.domain}</span>
    </a>
  )
}

function App() {
  const year = new Date().getFullYear()
  return (
    <div className="container">
      <header className="hero">
        <h1>PostSea Services</h1>
        <p className="subtitle">Discover Our Exclusive Suite: Proprietary, Curated Modern Applications</p>
        <nav className="toc" aria-label="Table of contents">
          <a href="#food-and-me" className="toc-chip">Food and Me</a>
          <a href="#file-sharing" className="toc-chip">File Sharing</a>
          <a href="#econoworld" className="toc-chip">EconoWorld</a>
          <a href="#home-maintenance" className="toc-chip">Home Maintenance</a>
          <a href="#flight-tracker" className="toc-chip">Flight Tracker</a>
          <a href="#sharing-guru" className="toc-chip">Sharing Guru</a>
          <a href="#stock-price-watch" className="toc-chip">Stock Price Watch</a>
          <a href="#tourpet" className="toc-chip">TourPet</a>
        </nav>
      </header>
      <div className="details">
        <section className="section" id="food-and-me">
          <h2>
            <a href="https://foodandme.ai" target="_blank" rel="noopener noreferrer">Food and Me — Your Personal Food Companion</a>
          </h2>
          <p>
            Snap. Discover. Enjoy. Food and Me turns the ingredients you already have into personalized meal ideas. Photograph what's in your kitchen and get tailored recipe recommendations — tackling ingredient waste, meal planning uncertainty, and tedious nutrition logging.
          </p>
          <a href="https://foodandme.ai" target="_blank" rel="noopener noreferrer">
            <img src="/images/foodAndMe.png" alt="Food and Me app showing AI ingredient recognition and personalized recipe suggestions from a kitchen photo" className="section-screenshot-half" />
          </a>
          <h3>Smart Ingredient Recognition</h3>
          <ul>
            <li>AI-powered photo analysis identifies foods in your kitchen automatically</li>
            <li>Turn a quick snapshot into a list of usable ingredients</li>
          </ul>
          <h3>Personalized Recipes</h3>
          <ul>
            <li>Recipe suggestions based on identified ingredients and personal preferences</li>
            <li>Dietary customization: set allergies, dietary restrictions, and preferences</li>
            <li>Recipe bookmarking: save favorite recipes for quick retrieval</li>
          </ul>
          <h3>Nutrition Tracking</h3>
          <ul>
            <li>Monitor daily calories, macros, and nutritional content</li>
            <li>Reduce tedious manual logging</li>
          </ul>
          <h3>Community</h3>
          <ul>
            <li>Social sharing: share your creations and discover meals from others</li>
            <li>Free core features, with a premium tier in development</li>
          </ul>
        </section>

        <section className="section" id="file-sharing">
          <h2>
            <a href="https://file.mba" target="_blank" rel="noopener noreferrer">File Sharing — Share Files Across Social Media</a>
          </h2>
          <p>
            A cloud-based file sharing platform that lets you upload, organize, and share your files seamlessly. Generate shareable links in seconds and distribute files across social networks and other platforms — without technical complexity.
          </p>
          <a href="https://file.mba" target="_blank" rel="noopener noreferrer">
            <img src="/images/fileMba.png" alt="File Sharing app showing drag-and-drop file uploads and instant shareable link generation for social media" className="section-screenshot-half" />
          </a>
          <h3>File Management</h3>
          <ul>
            <li>Drag-and-drop uploading supporting files up to 2GB</li>
            <li>Compatible with images, documents, videos, and various file types</li>
            <li>Folder and subfolder organization capabilities</li>
          </ul>
          <h3>Sharing Capabilities</h3>
          <ul>
            <li>Rapid shareable link generation for multiple platforms</li>
            <li>Optional password protection on shared files</li>
            <li>Customizable expiration dates for access control</li>
            <li>Optimized for Twitter, Facebook, LinkedIn, and similar networks</li>
          </ul>
          <h3>Security</h3>
          <ul>
            <li>OAuth authentication via Google or Microsoft accounts</li>
            <li>Password-protected sharing options</li>
          </ul>
          <h3>Performance</h3>
          <ul>
            <li>Quick file uploads with instant link generation</li>
            <li>Minimal processing delays</li>
          </ul>
        </section>

        <section className="section" id="econoworld">
          <h2>
            <a href="https://econo.world" target="_blank" rel="noopener noreferrer">EconoWorld — Visualizing Economic Data Insights</a>
          </h2>
          <p>
            A comprehensive web application for visualizing global economic data from FRED, World Bank, United Nations, IMF, Central Banks & National Agencies, OECD & Eurostat — featuring 800,000+ economic time series from 100+ sources.
          </p>
          <a href="https://econo.world" target="_blank" rel="noopener noreferrer">
            <img src="/images/econoWorld.png" alt="EconoWorld Interactive Data Explorer showing interest rates across multiple countries" className="section-screenshot-half" />
          </a>
          <h3>Data categories</h3>
          <ul>
            <li>Money, Banking & Finance: Interest rates, monetary aggregates, financial market indicators (SOFR, AMERIBOR, SONIA, central bank rates)</li>
            <li>GDP & National Accounts: GDP, inflation, trade balances, current accounts from World Bank, Eurostat, IMF, OECD</li>
            <li>Labor Markets: Employment, unemployment, participation, wages</li>
            <li>Prices & Inflation: CPI and PPI across dozens of countries</li>
            <li>Exchange Rates: Historical and current rates among major currencies</li>
            <li>International Trade: Imports/exports, balance of payments, FDI flows</li>
          </ul>
          <h3>Visualization types</h3>
          <ul>
            <li>Line charts with interactive tooltips</li>
            <li>Area charts for cumulative data</li>
            <li>Bar charts for YoY comparisons</li>
            <li>Multi-series charts on the same canvas</li>
          </ul>
          <h3>Features</h3>
          <ul>
            <li>Search 800,000+ economic series</li>
            <li>Responsive design for desktop, tablet, and mobile</li>
            <li>Automatic dark/light theme</li>
            <li>Robust error handling with retries</li>
            <li>Skeleton loading states</li>
          </ul>
        </section>

        <section className="section" id="home-maintenance">
          <h2>
            <a href="https://myhome.homes" target="_blank" rel="noopener noreferrer">Home Maintenance — Home Maintenance Made Simple</a>
          </h2>
          <p>
            A digital platform that connects homeowners with vetted local handymen. Submit repair requests, schedule appointments, track job progress, and pay securely — all from a single interface.
          </p>
          <a href="https://myhome.homes" target="_blank" rel="noopener noreferrer">
            <img src="/images/myHome.png" alt="Home Maintenance platform connecting homeowners with vetted local handymen for repair requests, scheduling, and secure payments" className="section-screenshot-half" />
          </a>
          <h3>For Homeowners</h3>
          <ul>
            <li>Easy request submission: snap a photo, describe your issue, and submit in under a minute</li>
            <li>Flexible scheduling: book appointments with reminders to prevent missed visits</li>
            <li>Transparent pricing: upfront estimates with secure online payment options</li>
            <li>Vetted professionals: all handymen are background-checked and insured</li>
            <li>Honest reviews: read customer feedback to find the right service provider</li>
            <li>Multiple properties: manage maintenance across all your properties from one dashboard</li>
          </ul>
          <h3>For Handymen</h3>
          <ul>
            <li>Local lead generation and job connections</li>
            <li>Schedule management tools</li>
            <li>Digital invoicing capabilities</li>
            <li>Expense tracking functionality</li>
          </ul>
        </section>

        <section className="section" id="flight-tracker">
          <h2>
            <a href="https://flightinfo.today" target="_blank" rel="noopener noreferrer">Flight Tracker — Real-time Aircraft Monitoring (US Airspace)</a>
          </h2>
          <p>
            A modern live aircraft tracker for US airspace. Monitor thousands of flights in real time with updates every 15 seconds, interactive maps, altitude-based color coding, and detailed flight information.
          </p>
          <a href="https://flightinfo.today" target="_blank" rel="noopener noreferrer">
            <img src="/images/flightinfoToday.png" alt="Flight Tracker real-time aircraft monitoring dashboard showing live flights over US airspace" className="section-screenshot-half" />
          </a>
          <h3>Real-time tracking</h3>
          <ul>
            <li>Live updates every 15 seconds (configurable 15–60s)</li>
            <li>Free data source via Airplanes.live (no API key)</li>
            <li>Dark-themed map centered on the continental USA</li>
            <li>Heading-aware markers with altitude-based colors</li>
            <li>US focus: 24.5°N–49°N, 125°W–66°W</li>
            <li>Smart rate limiting (1 req/s)</li>
          </ul>
          <h3>Advanced controls</h3>
          <ul>
            <li>Smart search: callsign or ICAO24</li>
            <li>Altitude filters: 0–50,000 ft</li>
            <li>Speed filters: 0–1,000 knots</li>
            <li>Status filters: airborne vs grounded</li>
            <li>Auto-refresh toggle and interval control</li>
          </ul>
          <h3>Modern UI/UX</h3>
          <ul>
            <li>Dark theme and glassmorphism panels</li>
            <li>Responsive design (desktop and tablet)</li>
            <li>Smooth animations and polished transitions</li>
            <li>Color-coded markers for quick reference</li>
          </ul>
        </section>

        <section className="section" id="sharing-guru">
          <h2>
            <a href="https://sharing.guru" target="_blank" rel="noopener noreferrer">Sharing Guru — Live Car Parking, Bike, and Scooter Share Tracking</a>
          </h2>
          <p>
            A real-time dashboard for monitoring car parking, bike, and scooter sharing systems using GBFS data across multiple operators and cities.
          </p>
          <a href="https://sharing.guru" target="_blank" rel="noopener noreferrer">
            <img src="/images/sharingGuru.png" alt="Sharing Guru real-time dashboard showing bike and scooter share availability across multiple cities" className="section-screenshot-half" />
          </a>
          <h3>Features</h3>
          <ul>
            <li>Real-time availability updates every 30 seconds</li>
            <li>Multiple operators supported, including: Citi Bike (NYC), Bay Wheels (SF), Bluebikes (Boston), Divvy (Chicago), Capital Bikeshare (DC), BIXI Montréal, Bike Share Toronto, and more</li>
            <li>Interactive map of stations and free-floating vehicles</li>
            <li>Station details: bikes, scooters, docks in real time</li>
            <li>Battery information for electric vehicles</li>
            <li>Search and filter by station or location</li>
            <li>Operator selection and multi-source aggregation</li>
            <li>Responsive design across devices</li>
          </ul>
        </section>

        <section className="section" id="stock-price-watch">
          <h2>
            <a href="https://stockprice.watch" target="_blank" rel="noopener noreferrer">Stock Price Watch — Wall Street analytics for everyone</a>
          </h2>
          <p>
            A financial intelligence platform combining real-time market data, advanced technical analysis, smart notifications, and a modern UI for traders and investors.
          </p>
          <a href="https://stockprice.watch" target="_blank" rel="noopener noreferrer">
            <img src="/images/stockpriceWatch.png" alt="Stock Price Watch financial intelligence platform showing real-time market data and technical analysis" className="section-screenshot-30" />
          </a>
          <h3>Key highlights</h3>
          <ul>
            <li>Zero setup; no API keys for core features</li>
            <li>Intelligent fallback for timely news</li>
            <li>Technical indicators: RSI, MACD, Bollinger Bands, Moving Averages</li>
            <li>Auto theme (dark/light) and responsive layouts</li>
            <li>Fast search with smart caching</li>
            <li>Smart notifications with deduplication</li>
          </ul>
          <h3>Real-time market data</h3>
          <ul>
            <li>Live quotes with comprehensive market information</li>
            <li>Interactive charts: 1D, 5D, 1M, 3M, 6M, 1Y, 5Y, MAX</li>
            <li>Yahoo Finance autocomplete with fuzzy matching</li>
            <li>Volume analysis with averages</li>
            <li>Trending stocks section</li>
          </ul>
          <h3>User experience</h3>
          <ul>
            <li>Responsive layouts across devices</li>
            <li>Watchlist management with persistence</li>
            <li>Market heatmap for sector performance</li>
          </ul>
          <h3>Customization</h3>
          <ul>
            <li>Chart settings (types, colors, grid)</li>
            <li>Notification preferences and frequency</li>
            <li>Data persistence for preferences</li>
          </ul>
        </section>

        <section className="section" id="tourpet">
          <h2>
            <a href="https://tour.pet" target="_blank" rel="noopener noreferrer">TourPet — Dog lover care and insights, all in one app</a>
          </h2>
          <p>
            A comprehensive web application for dog lovers, providing community dog care services (sitting and walking) alongside an extensive knowledge base covering breeds, behavior, care tips, nutrition, and more.
          </p>
          <a href="https://tour.pet" target="_blank" rel="noopener noreferrer">
            <img src="/images/tourPet.png" alt="TourPet app showing dog care services, interactive tools, and comprehensive knowledge base for dog lovers" className="section-screenshot-half" />
          </a>
          <h3>Dog Care Services</h3>
          <ul>
            <li>Dog Sitting: Professional in-home or overnight care with flexible scheduling</li>
            <li>Dog Walking: Daily walks with customizable duration (30 or 60 minutes)</li>
            <li>Easy Booking System: User-friendly booking interface with calendar integration</li>
            <li>Calendar System: Providers set availability for easy scheduling</li>
            <li>Communication System: Automated emails connect providers and pet owners</li>
            <li>Localization Support: Available in multiple languages, including English, French, and Mandarin</li>
          </ul>
          <h3>Interactive Tools</h3>
          <ul>
            <li>Dog Age Calculator: Convert dog years to human years (accounts for size differences)</li>
            <li>Calorie Calculator: Determine daily calorie needs based on weight and activity level</li>
            <li>Body Condition Guide: Visual guide to assess if your dog is at a healthy weight</li>
            <li>Quick Reference: Vaccination schedules, vet visit frequency, emergency signs</li>
          </ul>
          <h3>Comprehensive Knowledge Base</h3>
          <ul>
            <li>Dog Breeds Encyclopedia</li>
            <li>Behavior Guide</li>
            <li>Care Tips</li>
            <li>Nutrition Guide</li>
            <li>FAQ</li>
          </ul>
        </section>

        <section className="section" id="ai-hub">
          <h2>
            <a href="https://aihub.mom" target="_blank" rel="noopener noreferrer">AI Hub — Enterprise AI Integration with Full API Support</a>
          </h2>
          <p>
            AI Hub mom is the all-in-one platform that brings your AI tools, infrastructure, and teams together. Instead of juggling vendors and scattered dashboards, you get a single, trustworthy view of how AI drives your product—what it delivers, what it costs, and where to improve. With sensible guardrails and clear insights, product teams move faster while security and finance stay confidently in control.
          </p>
          <a href="https://aihub.mom" target="_blank" rel="noopener noreferrer">
            <img src="/images/aiHub.png" alt="Control, monitor, and optimize your entire AI infrastructure from a single dashboard. Track usage, manage billing, and deploy with confidence" className="section-screenshot-half" />
          </a>
          <h3>Features</h3>
          <ul>
            <li>Unified AI tool management: Connect and control tools like ChatGPT, Claude, and Google Gemini from one place</li>
            <li>Real-time observatory: See usage, performance, and cost trends across tools in real time</li>
            <li>Smart billing: Track spend by tool and team; transparent usage-based pricing</li>
            <li>Infrastructure management: Deploy and manage AI infra on AWS, Vercel, or your cloud</li>
            <li>One-click deployments: Ship updates instantly with built-in CI/CD pipelines</li>
            <li>Enterprise security: access, audit logs, and SOC 2–friendly practices</li>
          </ul>
        </section>
      </div>
      <footer className="footer" role="contentinfo">
        <p>© {year} PostSea. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
