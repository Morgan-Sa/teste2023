const { Musica, GerenciadorDeMusicas } = require('./musicas');

describe('Testes de Integração - GerenciadorDeMusicas', () => {
  test('deve adicionar, listar e remover músicas corretamente em conjunto', () => {
    const gerenciador = new GerenciadorDeMusicas();

    // Adiciona algumas músicas
    const musica1 = new Musica('Música A', 'Autor A', 2000, 'Rock');
    const musica2 = new Musica('Música B', 'Autor B', 2010, 'Pop');
    const musica3 = new Musica('Música C', 'Autor C', 2015, 'Jazz');

    gerenciador.adicionarMusica(musica1);
    gerenciador.adicionarMusica(musica2);
    gerenciador.adicionarMusica(musica3);

    // Verifica se as músicas foram adicionadas corretamente
    const musicasListadas = gerenciador.listarMusicas();
    expect(musicasListadas).toHaveLength(3);
    expect(musicasListadas).toContainEqual(musica1);
    expect(musicasListadas).toContainEqual(musica2);
    expect(musicasListadas).toContainEqual(musica3);

    // Remove uma música e verifica se foi removida corretamente
    gerenciador.removerMusica(musica2);
    expect(gerenciador.listarMusicas()).not.toContain(musica2);
  });

describe('Testes de Integração - GerenciadorDeMusicas', () => {
  test('deve atualizar e buscar uma música por título corretamente em conjunto', () => {
    const gerenciador = new GerenciadorDeMusicas();

    // Adiciona uma música
    const musicaOriginal = new Musica('Música A', 'Autor A', 2000, 'Rock');
    gerenciador.adicionarMusica(musicaOriginal);

    // Atualiza informações da música
    const novasInformacoes = new Musica('Nova Música A', 'Novo Autor', 2022, 'Pop');
    gerenciador.atualizarMusica(musicaOriginal, novasInformacoes);

    // Verifica se a música foi atualizada corretamente
    const musicaAtualizada = gerenciador.buscarMusicaPorTitulo('Nova Música A');
    expect(musicaAtualizada).toEqual(novasInformacoes);
  });
});

describe('Testes de Integração - GerenciadorDeMusicas', () => {

  test('deve adicionar músicas e listar/contar por gênero corretamente em conjunto', () => {
    const gerenciador = new GerenciadorDeMusicas();

    // Adiciona algumas músicas de diferentes gêneros
    const musica1 = new Musica('Música A', 'Autor A', 2000, 'Rock');
    const musica2 = new Musica('Música B', 'Autor B', 2010, 'Pop');
    const musica3 = new Musica('Música C', 'Autor C', 2015, 'Rock');

    gerenciador.adicionarMusica(musica1);
    gerenciador.adicionarMusica(musica2);
    gerenciador.adicionarMusica(musica3);

    // Verifica se as músicas foram adicionadas corretamente
    const musicasRock = gerenciador.listarMusicasPorGenero('Rock');
    const musicasPop = gerenciador.listarMusicasPorGenero('Pop');

    expect(musicasRock).toHaveLength(2);
    expect(musicasPop).toHaveLength(1);

    // Verifica se a contagem de músicas por gênero está correta
    const contagemRock = gerenciador.contarMusicasPorGenero('Rock');
    const contagemPop = gerenciador.contarMusicasPorGenero('Pop');

    expect(contagemRock).toBe(2);
    expect(contagemPop).toBe(1);
  });

});

const { Musica, GerenciadorDeMusicas } = require('./musicas');

describe('Testes de Integração - GerenciadorDeMusicas', () => {
  test('deve adicionar músicas e listar/contar por autor corretamente em conjunto', () => {
    const gerenciador = new GerenciadorDeMusicas();

    // Adiciona músicas de diferentes autores
    const musica1 = new Musica('Música A', 'Autor A', 2000, 'Rock');
    const musica2 = new Musica('Música B', 'Autor B', 2010, 'Pop');
    const musica3 = new Musica('Música C', 'Autor A', 2015, 'Rock');

    gerenciador.adicionarMusica(musica1);
    gerenciador.adicionarMusica(musica2);
    gerenciador.adicionarMusica(musica3);

    // Verifica se as músicas foram adicionadas corretamente
    const musicasAutorA = gerenciador.listarMusicasPorAutor('Autor A');
    const musicasAutorB = gerenciador.listarMusicasPorAutor('Autor B');

    expect(musicasAutorA).toHaveLength(2);
    expect(musicasAutorB).toHaveLength(1);

    // Verifica se a contagem de músicas por autor está correta
    const contagemAutorA = gerenciador.contarMusicasPorAutor('Autor A');
    const contagemAutorB = gerenciador.contarMusicasPorAutor('Autor B');

    expect(contagemAutorA).toBe(2);
    expect(contagemAutorB).toBe(1);
  });
});

});
