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
  return (
    <div className="container">
      <h1>PostSea Owns These Services</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default App
