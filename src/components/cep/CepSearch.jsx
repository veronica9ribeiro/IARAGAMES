import React, { useState } from 'react'
import './CepSearch.css'

const CepSearch = () => {
  const [cep, setCep] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (cep.length === 8) {
      setResult('Funcionalidade de CEP em desenvolvimento...')
    }
  }

  return (
    <div className='cep-search'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={cep}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
          placeholder='Digite o CEP'
          maxLength='8'
        />
        <button type='submit'>Consultar CEP</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  )
}

export default CepSearch
