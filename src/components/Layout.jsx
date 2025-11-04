import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

const Layout = ({ children }) => {
  const location = useLocation()

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <h1>🎮 IARA GAMES</h1>
          <nav className="nav">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Jogos
            </Link>
            <Link 
              to="/cep" 
              className={location.pathname === '/cep' ? 'nav-link active' : 'nav-link'}
            >
              Consulta CEP
            </Link>
          </nav>
        </div>
      </header>

      <main className="main">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 IARA GAMES - Plataforma de Entretenimento</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
