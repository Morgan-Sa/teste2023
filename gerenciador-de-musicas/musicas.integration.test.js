const { Musica, GerenciadorDeMusicas } = require('./musicas');

describe('Testes de Integração - GerenciadorDeMusicas', () => {
  let gerenciador;

  beforeEach(() => {
    gerenciador = new GerenciadorDeMusicas();
  });

  test('deve adicionar e listar músicas corretamente', () => {
    const musica1 = new Musica('Música A', 'Autor A', 2000, 'Rock');
    const musica2 = new Musica('Música B', 'Autor B', 2010, 'Pop');

    gerenciador.adicionarMusica(musica1);
    gerenciador.adicionarMusica(musica2);

    const musicasListadas = gerenciador.listarMusicas();

    expect(musicasListadas).toHaveLength(2);
    expect(musicasListadas).toContainEqual(musica1);
    expect(musicasListadas).toContainEqual(musica2);
  });

  test('deve remover uma música corretamente', () => {
    const musica1 = new Musica('Música A', 'Autor A', 2000, 'Rock');
    const musica2 = new Musica('Música B', 'Autor B', 2010, 'Pop');

    gerenciador.adicionarMusica(musica1);
    gerenciador.adicionarMusica(musica2);

    gerenciador.removerMusica(musica1);

    const musicasListadas = gerenciador.listarMusicas();

    expect(musicasListadas).toHaveLength(1);
    expect(musicasListadas).not.toContain(musica1);
    expect(musicasListadas).toContainEqual(musica2);
  });

  test('não deve adicionar músicas repetidas', () => {
    const musica = new Musica('Música A', 'Autor A', 2000, 'Rock');

    gerenciador.adicionarMusica(musica);
    gerenciador.adicionarMusica(musica); // Tenta adicionar a mesma música novamente

    const musicasListadas = gerenciador.listarMusicas();

    expect(musicasListadas).toHaveLength(1);
    expect(musicasListadas).toContainEqual(musica);
  });

  test('deve adicionar múltiplas músicas e remover uma corretamente', () => {
    const musica1 = new Musica('Música A', 'Autor A', 2000, 'Rock');
    const musica2 = new Musica('Música B', 'Autor B', 2010, 'Pop');
    const musica3 = new Musica('Música C', 'Autor C', 2015, 'Jazz');

    gerenciador.adicionarMusica(musica1);
    gerenciador.adicionarMusica(musica2);
    gerenciador.adicionarMusica(musica3);

    gerenciador.removerMusica(musica2);

    const musicasListadas = gerenciador.listarMusicas();

    expect(musicasListadas).toHaveLength(2);
    expect(musicasListadas).toContainEqual(musica1);
    expect(musicasListadas).not.toContainEqual(musica2);
    expect(musicasListadas).toContainEqual(musica3);
  });
});
