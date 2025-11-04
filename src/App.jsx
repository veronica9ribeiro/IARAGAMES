import React, { useState } from 'react'
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
          </div>
        )}
        
        {currentPage === 'cep' && (
          <div>
            <h2>Consulta de CEP</h2>
            <p>Digite um CEP para buscar o endereco.</p>
            {/* Componente CepSearch sera adicionado aqui */}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
