import './App.css'

const projects = [
  {
    id: 1,
    title: 'EconoWorld',
    description: 'Visualizing Economic Data Insights',
    url: 'https://econo.world',
    domain: 'econo.world'
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
        <p className="subtitle">Discover Our Exclusive Suite: Proprietary, Curated Modern Web Applications</p>
        <nav className="toc" aria-label="Table of contents">
          <a href="#econoworld" className="toc-chip">EconoWorld</a>
          <a href="#flight-tracker" className="toc-chip">Flight Tracker</a>
          <a href="#sharing-guru" className="toc-chip">Sharing Guru</a>
          <a href="#stock-price-watch" className="toc-chip">Stock Price Watch</a>
        </nav>
      </header>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="details">
        <section className="section" id="econoworld">
          <h2>
            <a href="https://econo.world" target="_blank" rel="noopener noreferrer">EconoWorld — Visualizing Economic Data Insights</a>
          </h2>
          <p>
            A comprehensive web application for visualizing global economic data from FRED, World Bank, United Nations, IMF, Central Banks & National Agencies, OECD & Eurostat — featuring 800,000+ economic time series from 100+ sources.
          </p>
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

        <section className="section" id="flight-tracker">
          <h2>
            <a href="https://flightinfo.today" target="_blank" rel="noopener noreferrer">Flight Tracker — Real-time Aircraft Monitoring (US Airspace)</a>
          </h2>
          <p>
            A modern live aircraft tracker for US airspace. Monitor thousands of flights in real time with updates every 15 seconds, interactive maps, altitude-based color coding, and detailed flight information.
          </p>
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
      </div>
      <footer className="footer" role="contentinfo">
        <p>© {year} PostSea. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
