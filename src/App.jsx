import React, { useState } from 'react'
import CepSearch from './components/cep/CepSearch'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('games')

  return (
    <div className='app'>
      <header className='header'>
        <h1>IARA GAMES</h1>
        <nav className='nav'>
          <button 
            onClick={() => setCurrentPage('games')}
            className={currentPage === 'games' ? 'active' : ''}
          >
            Jogos
          </button>
          <button 
            onClick={() => setCurrentPage('cep')}
            className={currentPage === 'cep' ? 'active' : ''}
          >
            Consulta CEP
          </button>
        </nav>
      </header>

      <main className='main'>
        {currentPage === 'games' && (
          <div>
            <h2>Jogos em Destaque</h2>
            <p>Bem-vindo a plataforma IARA GAMES!</p>
            <div style={{marginTop: '2rem'}}>
              <h3>Em breve:</h3>
              <ul>
                <li>Jogo da Memoria</li>
                <li>Quebra-cabeca</li>
                <li>Jogo da Velha</li>
              </ul>
            </div>
          </div>
        )}
        
        {currentPage === 'cep' && (
          <div>
            <h2>Consulta de CEP</h2>
            <p>Encontre enderecos de forma rapida e facil</p>
            <CepSearch />
          </div>
        )}
      </main>
    </div>
  )
}

export default App
