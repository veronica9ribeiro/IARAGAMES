import React from 'react'
import CepSearch from '../components/cep/CepSearch'
import './CepFinder.css'

const CepFinder = () => {
  return (
    <div className="cep-finder">
      <div className="container">
        <section className="cep-hero">
          <h2> Consulta de CEP</h2>
          <p>Encontre endereços de forma rápida enquanto espera seus jogos carregarem</p>
        </section>
        
        <CepSearch />
        
        <section className="cep-info">
          <h3>Como funciona?</h3>
          <div className="info-cards">
            <div className="info-card">
              <span>1</span>
              <p>Digite o CEP com 8 dígitos</p>
            </div>
            <div className="info-card">
              <span>2</span>
              <p>Clique em 'Consultar CEP'</p>
            </div>
            <div className="info-card">
              <span>3</span>
              <p>Veja o endereço completo</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CepFinder
