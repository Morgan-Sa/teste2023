const { Musica, GerenciadorDeMusicas } = require('./musicas');

describe('GerenciadorDeMusicas - Adicionar Músicas', () => {
    //teste 1
  test('deve adicionar uma música corretamente', () => {
    const gerenciador = new GerenciadorDeMusicas();
    const musica = new Musica('Música A', 'Autor A', 2000, 'Rock');

    gerenciador.adicionarMusica(musica);

    expect(gerenciador.musicas).toHaveLength(1);
    expect(gerenciador.musicas[0]).toBe(musica);
  });
    // teste 2
  test('deve adicionar múltiplas músicas corretamente', () => {
    const gerenciador = new GerenciadorDeMusicas();
    const musica1 = new Musica('Música A', 'Autor A', 2000, 'Rock');
    const musica2 = new Musica('Música B', 'Autor B', 2010, 'Pop');

    gerenciador.adicionarMusica(musica1);
    gerenciador.adicionarMusica(musica2);

    expect(gerenciador.musicas).toHaveLength(2);
    expect(gerenciador.musicas).toContain(musica1);
    expect(gerenciador.musicas).toContain(musica2);
  });

test('não deve adicionar uma música com o mesmo nome de uma música existente', () => {
    const gerenciador = new GerenciadorDeMusicas();
    const musicaExistente = new Musica('Música A', 'Autor A', 2000, 'Rock');
    gerenciador.adicionarMusica(musicaExistente);

    const novaMusica = new Musica('Música A', 'Novo Autor', 2022, 'Pop');
    gerenciador.adicionarMusica(novaMusica);

    const musicasListadas = gerenciador.listarMusicas();

    expect(musicasListadas).toHaveLength(1);
    expect(musicasListadas[0]).toEqual(musicaExistente);
  });

  test('não deve adicionar uma música com o ano maior que 2023', () => {
    const gerenciador = new GerenciadorDeMusicas();
    const novaMusica = new Musica('Música B', 'Autor B', 2024, 'Pop');

    gerenciador.adicionarMusica(novaMusica);

    const musicasListadas = gerenciador.listarMusicas();

    expect(musicasListadas).toHaveLength(0);
  });

  test('não deve adicionar uma música com título vazio', () => {
    const gerenciador = new GerenciadorDeMusicas();
    const novaMusica = new Musica('', 'Autor A', 2000, 'Rock');
  
    gerenciador.adicionarMusica(novaMusica);
  
    const musicasListadas = gerenciador.listarMusicas();
  
    expect(musicasListadas).toHaveLength(0);
  });
  
});

describe('GerenciadorDeMusicas - Listar Músicas', () => {
    // teste 3 
  test('deve listar as músicas corretamente', () => {
    const gerenciador = new GerenciadorDeMusicas();
    const musica1 = new Musica('Música A', 'Autor A', 2000, 'Rock');
    const musica2 = new Musica('Música B', 'Autor B', 2010, 'Pop');

    gerenciador.adicionarMusica(musica1);
    gerenciador.adicionarMusica(musica2);

    const musicasListadas = gerenciador.listarMusicas();

    expect(musicasListadas).toHaveLength(2);
    expect(musicasListadas).toContainEqual(musica1);
    expect(musicasListadas).toContainEqual(musica2);
  });
    // teste 4
  test('deve retornar uma lista vazia se não houver músicas', () => {
    const gerenciador = new GerenciadorDeMusicas();

    const musicasListadas = gerenciador.listarMusicas();

    expect(musicasListadas).toHaveLength(0);
    expect(musicasListadas).toEqual([]);
  });
});

describe('GerenciadorDeMusicas - Remover Músicas', () => {
    //teste 5
    test('deve retornar uma lista vazia se todas as músicas forem removidas', () => {
      const gerenciador = new GerenciadorDeMusicas();
      const musica1 = new Musica('Música A', 'Autor A', 2000, 'Rock');
      const musica2 = new Musica('Música B', 'Autor B', 2010, 'Pop');
  
      gerenciador.adicionarMusica(musica1);
      gerenciador.adicionarMusica(musica2);
      gerenciador.removerMusica(musica1);
      gerenciador.removerMusica(musica2);
  
      const musicasListadas = gerenciador.listarMusicas();
  
      expect(musicasListadas).toHaveLength(0);
      expect(musicasListadas).toEqual([]);
    });
    //teste 6
    test('deve remover uma música corretamente', () => {
    const gerenciador = new GerenciadorDeMusicas();
    const musica1 = new Musica('Música A', 'Autor A', 2000, 'Rock');
    const musica2 = new Musica('Música B', 'Autor B', 2010, 'Pop');

    gerenciador.adicionarMusica(musica1);
    gerenciador.adicionarMusica(musica2);
    gerenciador.removerMusica(musica1);

    expect(gerenciador.musicas).toHaveLength(1);
    expect(gerenciador.musicas).not.toContain(musica1);
    expect(gerenciador.musicas).toContain(musica2);
  });
});
    describe('GerenciadorDeMusicas - Atualizar Músicas', () => {
    // teste 7    
        test('deve atualizar as informações de uma música corretamente', () => {
          const gerenciador = new GerenciadorDeMusicas();
          const musica = new Musica('Música A', 'Autor A', 2000, 'Rock');
      
          gerenciador.adicionarMusica(musica);
          const novaInformacao = new Musica('Nova Música A', 'Novo Autor', 2022, 'Pop');
          gerenciador.atualizarMusica(musica, novaInformacao);
      
          const musicasListadas = gerenciador.listarMusicas();
      
          expect(musicasListadas).toHaveLength(1);
          expect(musicasListadas[0]).toEqual(novaInformacao);
        });
      // teste 8
        test('não deve atualizar se a música não existir no gerenciador', () => {
          const gerenciador = new GerenciadorDeMusicas();
          const musicaExistente = new Musica('Música A', 'Autor A', 2000, 'Rock');
          const musicaNaoExistente = new Musica('Música B', 'Autor B', 2010, 'Pop');
      
          gerenciador.adicionarMusica(musicaExistente);
          gerenciador.atualizarMusica(musicaNaoExistente, musicaExistente);
      
          const musicasListadas = gerenciador.listarMusicas();
      
          expect(musicasListadas).toHaveLength(1);
          expect(musicasListadas[0]).toEqual(musicaExistente);
        });
        //teste 9
      test('não deve atualizar se as novas informações da música forem inválidas', () => {
        const gerenciador = new GerenciadorDeMusicas();
        const musica = new Musica('Música A', 'Autor A', 2000, 'Rock');
        gerenciador.adicionarMusica(musica);
    
        const novasInformacoes = new Musica('', '', 0, '');
    
        gerenciador.atualizarMusica(musica, novasInformacoes);
    
        const musicasListadas = gerenciador.listarMusicas();
    
        expect(musicasListadas).toHaveLength(1);
        expect(musicasListadas[0]).toEqual(musica); // Verifica se a música permanece a mesma
      });
      
      test('não deve atualizar uma música com o ano maior que 2023', () => {
        const gerenciador = new GerenciadorDeMusicas();
        const musica = new Musica('Música A', 'Autor A', 2022, 'Rock');
        gerenciador.adicionarMusica(musica);
    
        const novasInformacoes = new Musica('Música A', 'Novo Autor', 2024, 'Pop');
    
        gerenciador.atualizarMusica(musica, novasInformacoes);
    
        const musicasListadas = gerenciador.listarMusicas();
    
        expect(musicasListadas).toHaveLength(1);
        expect(musicasListadas[0]).toEqual(musica);
      });

      test('não deve atualizar uma música com título vazio', () => {
        const gerenciador = new GerenciadorDeMusicas();
        const musica = new Musica('Música A', 'Autor A', 2000, 'Rock');
        gerenciador.adicionarMusica(musica);
    
        const novasInformacoes = new Musica('', 'Novo Autor', 2022, 'Pop');
        gerenciador.atualizarMusica(musica, novasInformacoes);
    
        const musicasListadas = gerenciador.listarMusicas();
    
        expect(musicasListadas).toHaveLength(1);
        expect(musicasListadas[0]).toEqual(musica); // Verifica se a música permanece a mesma
      });
    });

    describe('GerenciadorDeMusicas - Buscar Música por Título', () => {
        test('deve retornar uma música específica com base no título', () => {
          const gerenciador = new GerenciadorDeMusicas();
          const musica1 = new Musica('Música A', 'Autor A', 2000, 'Rock');
          const musica2 = new Musica('Música B', 'Autor B', 2010, 'Pop');
      
          gerenciador.adicionarMusica(musica1);
          gerenciador.adicionarMusica(musica2);
      
          const tituloBuscado = 'Música A';
          const musicaEncontrada = gerenciador.buscarMusicaPorTitulo(tituloBuscado);
      
          expect(musicaEncontrada).toEqual(musica1);
        });
      
        test('deve retornar null se a música não existir no gerenciador', () => {
          const gerenciador = new GerenciadorDeMusicas();
          const musica1 = new Musica('Música A', 'Autor A', 2000, 'Rock');
          const musica2 = new Musica('Música B', 'Autor B', 2010, 'Pop');
      
          gerenciador.adicionarMusica(musica1);
          gerenciador.adicionarMusica(musica2);
      
          const tituloBuscado = 'Música C';
          const musicaEncontrada = gerenciador.buscarMusicaPorTitulo(tituloBuscado);
      
          expect(musicaEncontrada).toBeNull();
        });
    });

        describe('GerenciadorDeMusicas - Contagem de Músicas por Gênero', () => {
            test('deve retornar a contagem correta de músicas com o mesmo gênero', () => {
              const gerenciador = new GerenciadorDeMusicas();
              const musica1 = new Musica('Música A', 'Autor A', 2000, 'Rock');
              const musica2 = new Musica('Música B', 'Autor B', 2010, 'Pop');
              const musica3 = new Musica('Música C', 'Autor C', 2015, 'Rock');
              const musica4 = new Musica('Música D', 'Autor D', 2020, 'Pop');
              
              gerenciador.adicionarMusica(musica1);
              gerenciador.adicionarMusica(musica2);
              gerenciador.adicionarMusica(musica3);
              gerenciador.adicionarMusica(musica4);
          
              const generoRock = gerenciador.contarMusicasPorGenero('Rock');
              const generoPop = gerenciador.contarMusicasPorGenero('Pop');
              const generoIndefinido = gerenciador.contarMusicasPorGenero('Indefinido');
          
              expect(generoRock).toBe(2); // Espera-se que haja 2 músicas de Rock
              expect(generoPop).toBe(2); // Espera-se que haja 2 músicas de Pop
              expect(generoIndefinido).toBe(0); // Espera-se que não haja músicas com gênero indefinido
            });
        });

        describe('GerenciadorDeMusicas - Contagem de Músicas por Autor', () => {
            test('deve retornar a contagem correta de músicas para um autor específico', () => {
              const gerenciador = new GerenciadorDeMusicas();
          
              const musica1 = new Musica('Música A', 'Autor A', 2000, 'Rock');
              const musica2 = new Musica('Música B', 'Autor A', 2010, 'Pop');
              const musica3 = new Musica('Música C', 'Autor B', 2015, 'Jazz');
          
              gerenciador.adicionarMusica(musica1);
              gerenciador.adicionarMusica(musica2);
              gerenciador.adicionarMusica(musica3);
          
              const contagemAutorA = gerenciador.contarMusicasPorAutor('Autor A');
              const contagemAutorB = gerenciador.contarMusicasPorAutor('Autor B');
              const contagemAutorC = gerenciador.contarMusicasPorAutor('Autor C'); // Autor não existente
          
              expect(contagemAutorA).toBe(2);
              expect(contagemAutorB).toBe(1);
              expect(contagemAutorC).toBe(0);
            });
          });

          describe('GerenciadorDeMusicas - Limite de Músicas por Autor', () => {
            test('deve limitar no máximo 20 músicas com o mesmo autor', () => {
              const gerenciador = new GerenciadorDeMusicas();
          
              // Adiciona 20 músicas com o mesmo autor
              const autor = 'Autor A';
              for (let i = 0; i < 20; i++) {
                const musica = new Musica(`Música ${i}`, autor, 2000 + i, 'Rock');
                gerenciador.adicionarMusica(musica);
              }
          
              // Adiciona uma música adicional com o mesmo autor
              const musicaExtra = new Musica('Música Extra', autor, 2022, 'Pop');
              gerenciador.adicionarMusica(musicaExtra);
          
              const contagemMusicasAutor = gerenciador.contarMusicasPorAutor(autor);
              const musicasDoAutor = gerenciador.listarMusicasPorAutor(autor);
          
              expect(contagemMusicasAutor).toBe(20);
              expect(musicasDoAutor).toHaveLength(20);
              expect(musicasDoAutor).not.toContain(musicaExtra);
            });
          });

          describe('GerenciadorDeMusicas - Listar Músicas por Gênero', () => {
            let gerenciador;
          
            beforeEach(() => {
              gerenciador = new GerenciadorDeMusicas();
          
              gerenciador.adicionarMusica(new Musica('Música A', 'Autor A', 2020, 'Pop'));
              gerenciador.adicionarMusica(new Musica('Música B', 'Autor B', 2021, 'Rock'));
              gerenciador.adicionarMusica(new Musica('Música C', 'Autor C', 2019, 'Pop'));
              gerenciador.adicionarMusica(new Musica('Música D', 'Autor D', 2022, 'Rock'));
              gerenciador.adicionarMusica(new Musica('Música E', 'Autor E', 2020, 'Pop'));
            });
          
            it('deve listar todas as músicas com o gênero "Pop"', () => {
              const musicasPop = gerenciador.listarMusicasPorGenero('Pop');
          
              expect(musicasPop).toHaveLength(3);
              expect(musicasPop.every((musica) => musica.genero === 'Pop')).toBe(true);
            });
          
            it('deve retornar uma lista vazia se não houver músicas com o gênero "Rap"', () => {
              const musicasRap = gerenciador.listarMusicasPorGenero('Rap');
          
              expect(musicasRap).toHaveLength(0);
            });
          });
    


    

