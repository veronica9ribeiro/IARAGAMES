// Função para carregar os dados do jogo
function loadGameData() {
    // Obter o ID do jogo da URL
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    

    const games = {
        '1': {
            title: 'Kaze and the Wild Masks',
            synopsis: 'Plataforma brasileiro inspirado nos clássicos dos anos 90.',
            price: 'Gratuito',
            images: [
                '../images/1.png',
                '../images/game1-1.png',
                '../images/game1-2.png',
                '../images/game1-3.png',
                '../images/game1-4.png'
            ],
            specs: [
                'Plataforma: PC, PS5, Xbox Series X',
                'Gênero: Plataforma',
                'Modos: Single-player',
                'Desenvolvedor: PixelHive'
            ],
            description: '<p>Kaze and the Wild Masks é um jogo de plataforma brasileiro com visual colorido e jogabilidade clássica. Enfrente desafios, colete máscaras e salve seu mundo!</p>',
            comments: [
                { user: 'João Silva', text: 'Jogo incrível! A história é muito envolvente.', date: '10/05/2023' },
                { user: 'Maria Souza', text: 'Os gráficos são de outro mundo. Recomendo!', date: '15/05/2023' }
            ]
        },
        '2': {
            title: 'Chroma Squad',
            synopsis: 'Um RPG tático brasileiro inspirado em séries de tokusatsu.',
            price: 'R$ 29,99',
            images: [
                '../images/4.png'
            ],
            specs: [
                'Plataforma: PC, PS4, Xbox One',
                'Gênero: RPG Tático',
                'Modos: Single-player',
                'Desenvolvedor: Behold Studios'
            ],
            description: '<p>Chroma Squad é um RPG tático onde você gerencia um estúdio de super sentai, contrata atores e grava episódios cheios de ação!</p>',
            comments: [
                { user: 'Lucas Lima', text: 'Muito divertido, nostalgia pura!', date: '12/06/2023' }
            ]
        },
        '3': {
            title: 'Dandara Trials',
            synopsis: 'Uma aventura brasileira inovadora de plataforma e ação.',
            price: 'R$ 19,99',
            images: [
                '../images/5.png'
            ],
            specs: [
                'Plataforma: PC, Switch',
                'Gênero: Plataforma, Ação',
                'Modos: Single-player',
                'Desenvolvedor: Long Hat House'
            ],
            description: '<p>Dandara Trials traz uma mecânica única de locomoção e desafios em um mundo surreal.</p>',
            comments: [
                { user: 'Ana Paula', text: 'Jogabilidade inovadora, adorei!', date: '20/06/2023' }
            ]
        },
        '4': {
            title: 'Unsighted',
            synopsis: 'Ação frenética e exploração em um mundo pós-apocalíptico.',
            price: 'R$ 37,99',
            images: [
                '../images/7.png'
            ],
            specs: [
                'Plataforma: PC, PS4, Switch',
                'Gênero: Ação, Aventura',
                'Modos: Single-player',
                'Desenvolvedor: Studio Pixel Punk'
            ],
            description: '<p>Em Unsighted, enfrente robôs hostis e salve seus amigos androides antes que o tempo acabe.</p>',
            comments: [
                { user: 'Carlos', text: 'Explosivo e nostálgico!', date: '18/06/2023' }
            ]
        },
        '5': {
            title: 'Au Revoir',
            synopsis: 'Uma jornada emocionante de despedidas e reencontros.',
            price: 'R$ 15,99',
            images: [
                '../images/8.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: RPG, Drama',
                'Modos: Single-player',
                'Desenvolvedor: AuRevoir Studio'
            ],
            description: '<p>Viva uma história tocante sobre amizade, perda e esperança em um mundo fantástico.</p>',
            comments: [
                { user: 'Elisa', text: 'Narrativa emocionante!', date: '10/09/2023' }
            ]
        },
        '6': {
            title: 'Haunted Manor',
            synopsis: 'Explore uma mansão assombrada cheia de mistérios e perigos.',
            price: 'R$ 24,99',
            images: [
                '../images/11.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Terror',
                'Modos: Single-player',
                'Desenvolvedor: Phantom Games'
            ],
            description: '<p>Enfrente seus medos e descubra os segredos da Haunted Manor neste jogo de terror atmosférico.</p>',
            comments: [
                { user: 'Marina', text: 'Levei vários sustos, adorei!', date: '05/07/2023' }
            ]
        },
        '7': {
            title: 'Host 71',
            synopsis: 'Sobreviva a um experimento sinistro em uma estação isolada.',
            price: 'R$ 19,99',
            images: [
                '../images/54.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Terror, Suspense',
                'Modos: Single-player',
                'Desenvolvedor: DarkLab'
            ],
            description: '<p>Host 71 desafia sua coragem em um ambiente claustrofóbico e cheio de mistérios.</p>',
            comments: [
                { user: 'Rafael', text: 'Atmosfera tensa do início ao fim.', date: '10/07/2023' }
            ]
        },
        '8': {
            title: 'Forest of Perdition the School Trip',
            synopsis: 'Uma excursão escolar que se transforma em pesadelo.',
            price: 'R$ 14,99',
            images: [
                '../images/18.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Terror',
                'Modos: Single-player',
                'Desenvolvedor: IndieForest'
            ],
            description: '<p>Descubra o que se esconde na floresta e tente sobreviver até o amanhecer.</p>',
            comments: [
                { user: 'Lucas', text: 'História envolvente e assustadora.', date: '12/07/2023' }
            ]
        },
        '10': {
            title: 'Devil Inside Us',
            synopsis: 'Investigue fenômenos paranormais e enfrente seus próprios demônios.',
            price: 'R$ 17,99',
            images: [
                '../images/25.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Terror',
                'Modos: Single-player',
                'Desenvolvedor: Mr. Skull'
            ],
            description: '<p>Um padre exorcista precisa enfrentar forças malignas em uma casa amaldiçoada.</p>',
            comments: [
                { user: 'Beatriz', text: 'Muito assustador, recomendo jogar à noite!', date: '15/07/2023' }
            ]
        },
        '11': {
            title: 'Teleforum',
            synopsis: 'Um terror psicológico que mistura tecnologia e sobrenatural.',
            price: 'R$ 12,99',
            images: [
                '../images/32.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Terror, Suspense',
                'Modos: Single-player',
                'Desenvolvedor: MindTwist'
            ],
            description: '<p>Receba ligações misteriosas e tente desvendar o enigma por trás do Teleforum.</p>',
            comments: [
                { user: 'Sofia', text: 'Enredo criativo e perturbador.', date: '18/07/2023' }
            ]
        },
        '12': {
            title: 'Immortal Mantis',
            synopsis: 'Misture terror e ação em uma experiência única.',
            price: 'R$ 21,99',
            images: [
                '../images/51.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Terror, Ação',
                'Modos: Single-player',
                'Desenvolvedor: Mantis Studio'
            ],
            description: '<p>Enfrente criaturas aterrorizantes e descubra segredos sombrios.</p>',
            comments: [
                { user: 'Tiago', text: 'Ótima trilha sonora e ambientação.', date: '20/07/2023' }
            ]
        },
        '13': {
            title: 'Phil Alone',
            synopsis: 'A solidão pode ser o maior dos terrores.',
            price: 'R$ 9,99',
            images: [
                '../images/52.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Terror, Drama',
                'Modos: Single-player',
                'Desenvolvedor: PhilDev'
            ],
            description: '<p>Ajude Phil a enfrentar seus medos em uma jornada introspectiva.</p>',
            comments: [
                { user: 'Juliana', text: 'História tocante e sombria.', date: '22/07/2023' }
            ]
        },
        '14': {
            title: 'The Last Door',
            synopsis: 'Um point-and-click de terror com visual pixelado.',
            price: 'R$ 15,99',
            images: [
                '../images/53.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Terror, Aventura',
                'Modos: Single-player',
                'Desenvolvedor: The Game Kitchen'
            ],
            description: '<p>Descubra os mistérios por trás da última porta em uma atmosfera opressora.</p>',
            comments: [
                { user: 'Fernando', text: 'Pixel art incrível e história envolvente.', date: '25/07/2023' }
            ]
        },
        '15': {
            title: 'Darkestville Castle',
            synopsis: 'Aventuras sombrias e muito humor em um castelo peculiar.',
            price: 'R$ 22,99',
            images: [
                '../images/56.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Aventura, Comédia',
                'Modos: Single-player',
                'Desenvolvedor: Epic LLama'
            ],
            description: '<p>Ajude Cid, o demônio travesso, em suas aventuras hilárias e sombrias.</p>',
            comments: [
                { user: 'Gabriel', text: 'Rendeu boas risadas!', date: '28/07/2023' }
            ]
        },
        '16': {
            title: 'Horizon Chase Turbo',
            synopsis: 'Corridas emocionantes com visual retrô e trilha sonora marcante.',
            price: 'R$ 34,99',
            images: [
                '../images/3.png'
            ],
            specs: [
                'Plataforma: PC, PS4, Switch',
                'Gênero: Corrida',
                'Modos: Multiplayer',
                'Desenvolvedor: Aquiris Game Studio'
            ],
            description: '<p>Horizon Chase Turbo traz a nostalgia dos clássicos de corrida com gráficos modernos e jogabilidade viciante.</p>',
            comments: [
                { user: 'Renato', text: 'Ótimo para jogar com amigos!', date: '30/07/2023' }
            ]
        },
        '17': {
            title: 'Sniper Ghost Warrior Contracts 2',
            synopsis: 'Ação tática e precisão em missões de sniper.',
            price: 'R$ 49,99',
            images: [
                '../images/6.png'
            ],
            specs: [
                'Plataforma: PC, PS4, Xbox',
                'Gênero: Tiro, Tático',
                'Modos: Single-player',
                'Desenvolvedor: CI Games'
            ],
            description: '<p>Assuma o papel de um atirador de elite em missões desafiadoras e realistas.</p>',
            comments: [
                { user: 'André', text: 'Jogabilidade precisa e gráficos excelentes.', date: '02/08/2023' }
            ]
        },
        '18': {
            title: 'Menger Shoig Warar',
            synopsis: 'Batalhas estratégicas em arenas geométricas.',
            price: 'R$ 11,99',
            images: [
                '../images/13.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Estratégia, Multiplayer',
                'Modos: Multiplayer',
                'Desenvolvedor: Menger Studio'
            ],
            description: '<p>Enfrente outros jogadores em arenas desafiadoras e conquiste a vitória com estratégia.</p>',
            comments: [
                { user: 'Vitor', text: 'Viciante e competitivo!', date: '05/08/2023' }
            ]
        },
        '19': {
            title: 'Toren',
            synopsis: 'Uma jornada poética de crescimento e autodescoberta.',
            price: 'R$ 19,99',
            images: [
                '../images/16.png'
            ],
            specs: [
                'Plataforma: PC, PS4',
                'Gênero: Aventura',
                'Modos: Single-player',
                'Desenvolvedor: Swordtales'
            ],
            description: '<p>Ajude a Moonchild a escalar a misteriosa torre e enfrentar seus desafios.</p>',
            comments: [
                { user: 'Larissa', text: 'Visual lindo e história tocante.', date: '08/08/2023' }
            ]
        },
        '20': {
            title: 'Relic Hunters Legend',
            synopsis: 'Ação frenética e loot em um universo colorido.',
            price: 'R$ 29,99',
            images: [
                '../images/33.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Ação, RPG',
                'Modos: Multiplayer',
                'Desenvolvedor: Rogue Snail'
            ],
            description: '<p>Junte-se aos Relic Hunters e lute contra patos do mal em missões cooperativas.</p>',
            comments: [
                { user: 'Felipe', text: 'Muito divertido em grupo!', date: '10/08/2023' }
            ]
        },
        '21': {
            title: 'Knights of Pen and Paper 2',
            synopsis: 'RPG de mesa digital com muito humor e nostalgia.',
            price: 'R$ 24,99',
            images: [
                '../images/37.png'
            ],
            specs: [
                'Plataforma: PC, Mobile',
                'Gênero: RPG',
                'Modos: Single-player',
                'Desenvolvedor: Kyy Games'
            ],
            description: '<p>Monte seu grupo e embarque em aventuras hilárias no melhor estilo RPG de mesa.</p>',
            comments: [
                { user: 'Bruno', text: 'Referências nerds a todo momento!', date: '12/08/2023' }
            ]
        },
        '22': {
            title: 'Pocket Bravery',
            synopsis: 'Lutas intensas com personagens carismáticos.',
            price: 'R$ 27,99',
            images: [
                '../images/43.png'
            ],
            specs: [
                'Plataforma: PC, PS4, Xbox',
                'Gênero: Luta',
                'Modos: Multiplayer',
                'Desenvolvedor: Statera Studio'
            ],
            description: '<p>Escolha seu lutador favorito e enfrente adversários em batalhas cheias de estilo.</p>',
            comments: [
                { user: 'Amanda', text: 'Ótimo para jogar com amigos!', date: '15/08/2023' }
            ]
        },
        '23': {
            title: 'One Beat Min',
            synopsis: 'Ritmo e ação em batalhas musicais eletrizantes.',
            price: 'R$ 13,99',
            images: [
                '../images/45.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Música, Ação',
                'Modos: Multiplayer',
                'Desenvolvedor: BeatDev'
            ],
            description: '<p>Sincronize seus movimentos com a batida e vença seus oponentes no ritmo!</p>',
            comments: [
                { user: 'Eduardo', text: 'Trilha sonora viciante!', date: '18/08/2023' }
            ]
        },
        '24': {
            title: 'Soul Gambler',
            synopsis: 'Faça escolhas que mudam seu destino em uma visual novel sombria.',
            price: 'R$ 16,99',
            images: [
                '../images/46.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Visual Novel, Drama',
                'Modos: Single-player',
                'Desenvolvedor: Tlön Studios'
            ],
            description: '<p>Baseado em Fausto, Soul Gambler coloca você diante de decisões morais profundas e consequências inesperadas.</p>',
            comments: [
                { user: 'Diego', text: 'Narrativa envolvente e arte linda!', date: '20/08/2023' }
            ]
        },
        '25': {
            title: 'Super Multiplayer',
            synopsis: 'Diversão garantida em partidas multiplayer rápidas.',
            price: 'R$ 10,99',
            images: [
                '../images/47.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Multiplayer',
                'Modos: Multiplayer',
                'Desenvolvedor: SuperDev'
            ],
            description: '<p>Entre em partidas rápidas e mostre suas habilidades contra outros jogadores.</p>',
            comments: [
                { user: 'Helena', text: 'Rápido e divertido!', date: '22/08/2023' }
            ]
        },
        '26': {
            title: 'Taxidermy',
            synopsis: 'Mistério e suspense em uma trama sombria.',
            price: 'R$ 14,99',
            images: [
                '../images/27.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Suspense',
                'Modos: Single-player',
                'Desenvolvedor: TaxDev'
            ],
            description: '<p>Descubra os segredos de uma pequena cidade marcada por crimes misteriosos.</p>',
            comments: [
                { user: 'Otávio', text: 'Enredo intrigante!', date: '25/08/2023' }
            ]
        },
        '27': {
            title: 'Neve',
            synopsis: 'Sobreviva ao frio e aos perigos de uma nevasca interminável.',
            price: 'R$ 12,99',
            images: [
                '../images/30.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Suspense, Sobrevivência',
                'Modos: Single-player',
                'Desenvolvedor: SnowGames'
            ],
            description: '<p>Enfrente desafios extremos e descubra o que se esconde sob a neve.</p>',
            comments: [
                { user: 'Patrícia', text: 'Clima tenso e imersivo.', date: '28/08/2023' }
            ]
        },
        '28': {
            title: 'Jogo Satanista Para Praticar o Mal',
            synopsis: 'Um jogo polêmico de escolhas sombrias.',
            price: 'R$ 9,99',
            images: [
                '../images/31.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Suspense',
                'Modos: Single-player',
                'Desenvolvedor: DarkChoice'
            ],
            description: '<p>Faça escolhas difíceis e veja as consequências em um universo sombrio.</p>',
            comments: [
                { user: 'Igor', text: 'Narrativa ousada!', date: '30/08/2023' }
            ]
        },
        '29': {
            title: 'I Did Not Buy This Ticket',
            synopsis: 'Mistério e suspense em uma viagem inesperada.',
            price: 'R$ 11,99',
            images: [
                '../images/48.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Suspense',
                'Modos: Single-player',
                'Desenvolvedor: TicketDev'
            ],
            description: '<p>Descubra o que está por trás de um bilhete misterioso e uma viagem sem volta.</p>',
            comments: [
                { user: 'Marta', text: 'Muito criativo!', date: '01/09/2023' }
            ]
        },
        '30': {
            title: 'Asleep',
            synopsis: 'Pesadelos e realidade se misturam neste suspense psicológico.',
            price: 'R$ 8,99',
            images: [
                '../images/49.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Suspense, Terror',
                'Modos: Single-player',
                'Desenvolvedor: DreamDev'
            ],
            description: '<p>Explore o mundo dos sonhos e tente acordar antes que seja tarde demais.</p>',
            comments: [
                { user: 'Luiz', text: 'Assustador e envolvente.', date: '03/09/2023' }
            ]
        },
        '31': {
            title: 'Surrealidade',
            synopsis: 'Uma aventura surreal entre sonhos e realidade.',
            price: 'R$ 13,99',
            images: [
                '../images/50.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Suspense, Aventura',
                'Modos: Single-player',
                'Desenvolvedor: SurrealDev'
            ],
            description: '<p>Viaje por cenários oníricos e resolva enigmas em uma experiência única.</p>',
            comments: [
                { user: 'Simone', text: 'Visual e trilha sonora incríveis.', date: '05/09/2023' }
            ]
        },
        '32': {
            title: 'Lunar Axé',
            synopsis: 'Misture cultura brasileira e ficção científica em uma aventura única.',
            price: 'R$ 17,99',
            images: [
                '../images/55.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Aventura, Ficção Científica',
                'Modos: Single-player',
                'Desenvolvedor: AxéGames'
            ],
            description: '<p>Explore a lua de um ponto de vista brasileiro e descubra seus mistérios.</p>',
            comments: [
                { user: 'Danilo', text: 'Muito criativo e divertido.', date: '07/09/2023' }
            ]
        },
        '33': {
            title: 'Au Revoir',
            synopsis: 'Uma jornada emocionante de despedidas e reencontros.',
            price: 'R$ 15,99',
            images: [
                '../images/8.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: RPG, Drama',
                'Modos: Single-player',
                'Desenvolvedor: AuRevoir Studio'
            ],
            description: '<p>Viva uma história tocante sobre amizade, perda e esperança em um mundo fantástico.</p>',
            comments: [
                { user: 'Elisa', text: 'Narrativa emocionante!', date: '10/09/2023' }
            ]
        },
        '34': {
            title: 'FrostFlame',
            synopsis: 'Aventura épica entre o gelo e o fogo.',
            price: 'R$ 18,99',
            images: [
                '../images/9.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: RPG, Aventura',
                'Modos: Single-player',
                'Desenvolvedor: FrostDev'
            ],
            description: '<p>Enfrente criaturas lendárias e domine os elementos para salvar seu reino.</p>',
            comments: [
                { user: 'Ricardo', text: 'Ótima ambientação!', date: '12/09/2023' }
            ]
        },
        '35': {
            title: 'Mistic Quest the Lost Kingdom',
            synopsis: 'Desvende os mistérios de um reino perdido.',
            price: 'R$ 16,99',
            images: [
                '../images/15.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: RPG, Aventura',
                'Modos: Single-player',
                'Desenvolvedor: MysticDev'
            ],
            description: '<p>Explore ruínas antigas e enfrente desafios mágicos em busca do reino perdido.</p>',
            comments: [
                { user: 'Tatiane', text: 'Exploração divertida!', date: '15/09/2023' }
            ]
        },
        '36': {
            title: 'Tormenta 20',
            synopsis: 'O maior RPG brasileiro em sua versão digital.',
            price: 'R$ 29,99',
            images: [
                '../images/17.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: RPG',
                'Modos: Single-player',
                'Desenvolvedor: Jambô Editora'
            ],
            description: '<p>Monte seu grupo e viva aventuras épicas no universo de Tormenta.</p>',
            comments: [
                { user: 'Marcelo', text: 'Fiel ao sistema de mesa!', date: '18/09/2023' }
            ]
        },
        '37': {
            title: 'Enigma do Medo',
            synopsis: 'Mistérios e enigmas em uma cidade assombrada.',
            price: 'R$ 14,99',
            images: [
                '../images/19.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: RPG, Terror',
                'Modos: Single-player',
                'Desenvolvedor: EnigmaDev'
            ],
            description: '<p>Resolva enigmas e enfrente criaturas sobrenaturais para desvendar o passado da cidade.</p>',
            comments: [
                { user: 'Aline', text: 'Puzzles inteligentes!', date: '20/09/2023' }
            ]
        },
        '38': {
            title: 'Old Dragon',
            synopsis: 'RPG clássico com dragões, masmorras e muita aventura.',
            price: 'R$ 19,99',
            images: [
                '../images/57.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: RPG',
                'Modos: Single-player',
                'Desenvolvedor: OldDragon Studio'
            ],
            description: '<p>Crie seu personagem e embarque em aventuras épicas no melhor estilo old school.</p>',
            comments: [
                { user: 'César', text: 'Nostalgia pura!', date: '22/09/2023' }
            ]
        },
        '39': {
            title: 'Teocida + Estigma',
            synopsis: 'Dois jogos em um: terror e ação surreal.',
            price: 'R$ 21,99',
            images: [
                '../images/28.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: RPG, Terror',
                'Modos: Single-player',
                'Desenvolvedor: TeoStudio'
            ],
            description: '<p>Experimente duas histórias distintas e perturbadoras em um só pacote.</p>',
            comments: [
                { user: 'Milena', text: 'Duas experiências únicas!', date: '25/09/2023' }
            ]
        },
        '40': {
            title: 'RoadOut',
            synopsis: 'Ação e velocidade em corridas explosivas.',
            price: 'R$ 17,99',
            images: [
                '../images/44.png'
            ],
            specs: [
                'Plataforma: PC',
                'Gênero: Corrida, Ação',
                'Modos: Single-player',
                'Desenvolvedor: RoadDev'
            ],
            description: '<p>Corra, lute e sobreviva em pistas cheias de perigos e obstáculos.</p>',
            comments: [
                { user: 'Jonas', text: 'Adrenalina pura!', date: '28/09/2023' }
            ]
        },
        // ...continue para todos os jogos, seguindo o mesmo padrão...
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
    specsList.innerHTML = '';
    game.specs.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        specsList.appendChild(li);
    });
    
    // Preencher carrossel de imagens
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = '';
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