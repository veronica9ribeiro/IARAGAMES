import React from 'react'
import './Games.css'

const Games = () => {
  const featuredGames = [
    {
      id: 1,
      name: "Jogo da Memória",
      description: "Teste sua memória com este jogo clássico",
      
    },
    {
      id: 2,
      name: "Quebra-Cabeça",
      description: "Monte peças para formar imagens incríveis",
   
    },
    {
      id: 3,
      name: "Jogo da Velha",
      description: "Desafie seus amigos neste jogo estratégico",
 
    }
  ]

  return (
    <div className="games-page">
      <div className="container">
        <section className="hero">
          <h2>Bem-vindo à IARA GAMES!</h2>
          <p>Descubra jogos incríveis e divirta-se</p>
        </section>

        <section className="featured-games">
          <h3>Jogos em Destaque</h3>
          <div className="games-grid">
            {featuredGames.map(game => (
              <div key={game.id} className="game-card">
                <div className="game-image">
                  <span className="game-emoji">{game.emoji}</span>
                </div>
                <div className="game-info">
                  <h4>{game.name}</h4>
                  <p>{game.description}</p>
                  <button className="play-btn">Jogar Agora</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="quick-actions">
          <h3>Funcionalidades Rápidas</h3>
          <div className="actions-grid">
            <div className="action-card">
              <h4> Jogos</h4>
              <p>Acesse nossa coleção completa de jogos</p>
            </div>
            <div className="action-card">
              <h4> Consulta CEP</h4>
              <p>Encontre endereços rapidamente</p>
            </div>
            <div className="action-card">
              <h4> Ranking</h4>
              <p>Veja os melhores jogadores</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Games
