import React, { useState } from 'react'
import './CepSearch.css'

const CepSearch = () => {
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState(null)
  const [loading, setLoading] = useState(false)

  const searchCep = async (cep) => {
    try {
      const response = await fetch('https://viacep.com.br/ws/' + cep + '/json/')
      const data = await response.json()
      return data
    } catch (error) {
      throw new Error('Erro ao consultar CEP')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!cep || cep.length !== 8) {
      alert('Por favor, digite um CEP válido com 8 dígitos')
      return
    }

    setLoading(true)
    
    try {
      const data = await searchCep(cep)
      
      if (data.erro) {
        alert('CEP não encontrado')
        setAddress(null)
      } else {
        setAddress(data)
      }
    } catch (err) {
      alert('Erro ao buscar o CEP. Tente novamente.')
      setAddress(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='cep-search'>
      <form onSubmit={handleSubmit} className='cep-form'>
        <div className='input-group'>
          <input
            type='text'
            value={cep}
            onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
            placeholder='Digite o CEP (apenas números)'
            maxLength='8'
            className='cep-input'
          />
          <button type='submit' disabled={loading} className='search-btn'>
            {loading ? 'Buscando...' : 'Consultar CEP'}
          </button>
        </div>
      </form>

      {address && (
        <div className='result-section'>
          <h3>Endereco Encontrado</h3>
          <div className='address-card'>
            <p><strong>CEP:</strong> {address.cep}</p>
            <p><strong>Logradouro:</strong> {address.logradouro}</p>
            <p><strong>Bairro:</strong> {address.bairro}</p>
            <p><strong>Cidade:</strong> {address.localidade}</p>
            <p><strong>Estado:</strong> {address.uf}</p>
            {address.complemento && (
              <p><strong>Complemento:</strong> {address.complemento}</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default CepSearch
