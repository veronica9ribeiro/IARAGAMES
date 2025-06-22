// Função para carregar os dados do jogo
function loadGameData() {
    // Obter o ID do jogo da URL
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    

    const games = {
        '1': {
            title: 'Kaze and the Wild Masks',
            synopsis: 'Reviva suas lembranças de infância dos clássicos jogos de plataforma com a alta qualidade de um pixel art quadro a quadro.',
            price: 'R$ 37,99',
            images: [
                 '../images/game1-4.png',
                '../images/game1-1.png',
                '../images/game1-2.png',
                '../images/game1-3.png'
            ],
            specs: [
                'Plataforma: PC, PS5, Xbox Series X',
                'Gênero:  Ação, Aventura, Casual, Indie',
                'Modos: Single-player',
                'Requisitos: Intel Core i3 M380, 4 GB de RAM, Intel HD 5000'
            ],
            description: '<p>Kaze and the Wild Masks é um jogo que redefine o gênero RPG com seu mundo aberto massivo e sistemas de jogo profundos. Explore vastos continentes, enfrente criaturas lendárias e decida o destino do reino com suas escolhas.</p><p>Com mais de 100 horas de conteúdo principal e centenas de missões secundárias, este é um jogo que vai te manter engajado por meses.</p>'
        },
        '2': {
            title: 'Space Warriors',
            synopsis: 'Um shooter espacial em primeira pessoa com batalhas intensas e gráficos futuristas.',
            price: 'R$ 149,90',
            images: [
                '../assets/images/game2-1.jpg',
                '../assets/images/game2-2.jpg',
                '../assets/images/game2-3.jpg'
            ],
            specs: [
                'Plataforma: PC, PS5, Xbox Series X',
                'Gênero: FPS, Ação, Sci-Fi',
                'Modos: Multiplayer, Campanha',
                'Requisitos: CPU i3, 6GB RAM, GTX 960'
            ],
            description: '<p>Space Warriors coloca você no meio de uma guerra intergaláctica entre facções rivais. Com armas futuristas e veículos espaciais, cada batalha é uma experiência única.</p><p>O jogo oferece mais de 20 mapas diferentes e um sistema de progressão detalhado que permite personalizar seu guerreiro espacial.</p>'
        }
    };
    
    // Verificar se o jogo existe
    if (!games[gameId]) {
        window.location.href = '../index.html';
        return;
    }
    
    const game = games[gameId];
    
    // Preencher os dados na página
    document.getElementById('game-title').textContent = game.title;
    document.getElementById('game-synopsis').textContent = game.synopsis;
    document.getElementById('game-price').textContent = game.price;
    document.getElementById('game-description').innerHTML = game.description;
    
    // Preencher especificações técnicas
    const specsList = document.getElementById('game-specs');
    game.specs.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        specsList.appendChild(li);
    });
    
    // Preencher carrossel de imagens
    const carouselInner = document.querySelector('.carousel-inner');
    game.images.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        
        const img = document.createElement('img');
        img.src = image;
        img.className = 'd-block w-100';
        img.alt = game.title;
        
        item.appendChild(img);
        carouselInner.appendChild(item);
    });
    
    // Carregar comentários (simulado)
    loadComments(gameId);
}

// Função para carregar comentários
function loadComments(gameId) {
    // Simulação de comentários - na prática, buscaria de um banco de dados
    const comments = {
        '1': [
            { user: 'João Silva', text: 'Jogo incrível! A história é muito envolvente.', date: '10/05/2023' },
            { user: 'Maria Souza', text: 'Os gráficos são de outro mundo. Recomendo!', date: '15/05/2023' }
        ],
        '2': [
            { user: 'Carlos Oliveira', text: 'Multiplayer muito divertido!', date: '20/05/2023' }
        ]
    };
    
    const container = document.getElementById('comments-container');
    
    // Limpar container
    container.innerHTML = '';
    
    if (!comments[gameId] || comments[gameId].length === 0) {
        container.innerHTML = '<div class="alert alert-info">Nenhum comentário ainda. Seja o primeiro a comentar!</div>';
        return;
    }
    
    // Adicionar cada comentário
    comments[gameId].forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'card mb-3';
        
        commentDiv.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${comment.user}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${comment.date}</h6>
                <p class="card-text">${comment.text}</p>
            </div>
        `;
        
        container.appendChild(commentDiv);
    });
}

// Manipulador do formulário de comentários
document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const commentText = document.getElementById('comment-text').value;
    
    // Simular envio do comentário
    alert('Comentário enviado com sucesso! (simulação)');
    document.getElementById('comment-text').value = '';
    
    // Recarregar comentários
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    loadComments(gameId);
});

// Carregar dados quando a página estiver pronta
document.addEventListener('DOMContentLoaded', loadGameData);