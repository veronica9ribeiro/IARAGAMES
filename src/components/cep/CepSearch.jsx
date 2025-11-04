import React, { useState } from 'react'
import { searchCep } from '../../services/cepApi'
import './CepSearch.css'

const CepSearch = () => {
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!cep || cep.length !== 8 || !/^\d+$/.test(cep)) {
      setError('Por favor, digite um CEP válido com 8 dígitos')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      const data = await searchCep(cep)
      
      if (data.erro) {
        setError('CEP não encontrado')
        setAddress(null)
      } else {
        setAddress(data)
      }
    } catch (err) {
      setError('Erro ao buscar o CEP. Tente novamente.')
      setAddress(null)
    } finally {
      setLoading(false)
    }
  }

  const handleCepChange = (e) => {
    const value = e.target.value.replace(/\D/g, '')
    setCep(value)
    if (error) setError('')
  }

  return (
    <div className=\"cep-search\">
      <div className=\"search-container\">
        <form onSubmit={handleSubmit} className=\"cep-form\">
          <div className=\"input-group\">
            <input
              type=\"text\"
              value={cep}
              onChange={handleCepChange}
              placeholder=\"Digite o CEP (apenas números)\"
              maxLength=\"8\"
              className=\"cep-input\"
            />
            <button 
              type=\"submit\" 
              disabled={loading} 
              className=\"search-btn\"
            >
              {loading ? '🔍 Buscando...' : '🔍 Consultar CEP'}
            </button>
          </div>
        </form>

        {error && (
          <div className=\"error-message\">
            ❌ {error}
          </div>
        )}

        {address && (
          <div className=\"result-section\">
            <h3>✅ Endereço Encontrado</h3>
            <div className=\"address-card\">
              <div className=\"address-field\">
                <strong>📮 CEP:</strong> 
                <span>{address.cep}</span>
              </div>
              <div className=\"address-field\">
                <strong>🏢 Logradouro:</strong> 
                <span>{address.logradouro}</span>
              </div>
              <div className=\"address-field\">
                <strong>🏘️ Bairro:</strong> 
                <span>{address.bairro}</span>
              </div>
              <div className=\"address-field\">
                <strong>🏙️ Cidade:</strong> 
                <span>{address.localidade}</span>
              </div>
              <div className=\"address-field\">
                <strong>📍 Estado:</strong> 
                <span>{address.uf}</span>
              </div>
              {address.complemento && (
                <div className=\"address-field\">
                  <strong>📋 Complemento:</strong> 
                  <span>{address.complemento}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CepSearch
