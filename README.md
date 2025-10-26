# Postsea Services

PostSea owns and maintains this collection of simple, modern, and useful web applications.

List of public-facing services and projects maintained by PostSea.

## Live Projects

- [EconoWorld — Visualizing Economic Data Insights](https://econo.world)
- [Flight Tracker — Real-time Aircraft Monitoring (US Airspace)](https://flightinfo.today)
- [Sharing Guru — Live Car Parking, Bike, and Scooter Share Tracking](https://sharing.guru)
- [Stock Price Watch — Wall Street analytics for everyone](https://stockprice.watch)

---

## EconoWorld — Visualizing Economic Data Insights

A comprehensive web application for visualizing global economic data from FRED (Federal Reserve Economic Data), World Bank, United Nations, International Monetary Fund, Central Banks & National Agencies, OECD & Eurostat — featuring 800,000+ economic time series from 100+ regional, national, and international sources.

### Data categories

- Money, Banking & Finance: Interest rates, monetary aggregates, and financial market indicators (SOFR, AMERIBOR, SONIA, central bank rates)
- GDP & National Accounts: Global GDP, inflation, trade balances, and current accounts from World Bank, Eurostat, IMF, and OECD
- Labor Markets: Employment, unemployment, labor force participation, and wage trends
- Prices & Inflation: Consumer Price Indexes (CPI) and Producer Price Indexes (PPI) for dozens of countries
- Exchange Rates: Historical and current exchange rates among major currencies (USD, EUR, JPY, GBP, CNY, etc.)
- International Trade: Import/export values, balance of payments, and foreign direct investment flows

### Visualization types

- Line charts: Time series trends with interactive tooltips
- Area charts: Filled area visualizations for cumulative data
- Bar charts: Year-over-year comparisons and discrete values
- Multi-series charts: Compare multiple economic indicators on the same chart

### Features

- Powerful search: Explore 800,000+ economic series
- Responsive design: Works on desktop, tablet, and mobile
- Dark mode support: Automatic dark/light theme
- Robust error handling with retry capabilities
- Skeleton loading states for smoother UX

---

## Flight Tracker — Real-time Aircraft Monitoring (US Airspace)

A modern, live aircraft tracker for US airspace with zero barriers. Monitor thousands of flights in real time with updates every 15 seconds, featuring interactive maps, altitude-based color coding, and detailed flight information (speed, heading, vertical rate). No API keys, no registration, no costs.

### Real-time tracking

- Live updates: Automatic refresh every 15 seconds (configurable 15–60s)
- Free data source: Powered by Airplanes.live (no API key required)
- Interactive map: Dark-themed map centered on the continental United States
- Aircraft markers: Heading-aware markers with altitude-based color coding
- US focus: Optimized for 24.5°N–49°N, 125°W–66°W
- Smart rate limiting: Respects Airplanes.live's 1 req/s limit

### Advanced controls

- Smart search: Search by callsign or ICAO24 identifier
- Altitude filters: 0–50,000 ft
- Speed filters: 0–1,000 knots
- Status filters: Airborne vs grounded
- Auto-refresh toggle and interval control

### Modern UI/UX

- Dark theme and glassmorphism panels
- Responsive design (desktop and tablet)
- Smooth animations and polished transitions
- Color-coded markers for quick visual reference

---

## Sharing Guru — Live Car Parking, Bike, and Scooter Share Tracking

A real-time dashboard to monitor and analyze car parking, bike, and scooter sharing systems across cities. Uses GBFS (General Bikeshare Feed Specification) data from multiple operators to display availability, vehicle locations, and station status.

### Features

- Real-time data: Availability updates every 30 seconds from GBFS feeds
- Multiple operators supported, including:
  - Citi Bike (NYC)
  - Bay Wheels (San Francisco)
  - Bluebikes (Boston)
  - Divvy (Chicago)
  - Capital Bikeshare (Washington DC)
  - BIXI Montréal
  - Bike Share Toronto
  - And more…
- Interactive map: Stations and free-floating vehicles
- Station details: Real-time bikes, scooters, and docks
- Battery information for electric vehicles
- Search and filter by station or location
- Operator selection and multi-source aggregation
- Responsive design across desktop, tablet, and mobile

---

## Stock Price Watch — Wall Street analytics for everyone

Not just another stock tracker — a comprehensive financial intelligence platform for everyday users, traders, and investors. Combines real-time market data, advanced technical analysis, intelligent notifications, and a modern UI.

### Key highlights

- Zero setup: Works immediately; no API keys required for core features
- Intelligent fallback: Dual-source architecture for timely news
- Advanced analytics: RSI, MACD, Bollinger Bands, Moving Averages
- Adaptive design: Auto theme (dark/light)
- Lightning fast search with smart caching
- Truly responsive: Desktop-first, great on mobile and tablet
- Smart notifications with deduplication

### Real-time market data

- Live stock quotes with comprehensive market info
- Interactive charts: 8 timeframes (1D, 5D, 1M, 3M, 6M, 1Y, 5Y, MAX)
- Smart search: Yahoo Finance autocomplete with fuzzy matching
- Volume analysis: Color-coded bars and average comparisons
- Trending stocks: Top market movers

### User experience

- Auto theme (light/dark/auto)
- Responsive layouts across devices
- Watchlist management with persistence
- Market heatmap for sector performance

### Customization

- Chart settings (types, colors, grid)
- Notification preferences and frequency
- Data persistence for watchlist and preferences

---

## Development

This repository uses [Vite](https://vitejs.dev/) and [React](https://react.dev/).

### Prerequisites

- Node.js 18+ recommended
- npm, pnpm, or yarn

### Scripts

```bash
npm run dev      # Start local dev server
npm run build    # Build for production
npm run preview  # Preview the production build locally
```

---

## Contributing

Issues and pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.