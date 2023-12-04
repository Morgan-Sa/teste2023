class Musica {
    constructor(titulo, autor, ano, genero) {
      this.titulo = titulo;
      this.autor = autor;
      this.ano = ano;
      this.genero = genero;
    }
  }
  
  class GerenciadorDeMusicas {
    constructor() {
      this.musicas = [];
      this.limiteMusicasPorAutor = 20; // Novo membro para limitar o número de músicas por autor
    }
  
    adicionarMusica(novaMusica) {
        const nomeExistente = this.musicas.some(
          (musica) => musica.titulo === novaMusica.titulo
        );
      
        const anoLimite = 2023;
      
        if (novaMusica.ano > anoLimite) {
          console.log(
            `"${novaMusica.titulo}" não pode ser adicionada. Ano maior que ${anoLimite}.`
          );
        } else if (nomeExistente) {
          console.log(
            `"${novaMusica.titulo}" não pode ser adicionada. Já existe uma música com o mesmo nome.`
          );
        } else if (novaMusica.titulo === '') {
          console.log(`"${novaMusica.titulo}" não pode ser adicionada. Título vazio.`);
        } else {
          const contagemMusicasAutor = this.contarMusicasPorAutor(novaMusica.autor);
          if (contagemMusicasAutor >= this.limiteMusicasPorAutor) {
            console.log(`"${novaMusica.titulo}" não pode ser adicionada. Limite de músicas para este autor atingido.`);
          } else {
            this.musicas.push(novaMusica);
            console.log(`"${novaMusica.titulo}" foi adicionada ao gerenciador.`);
          }
        }
      }
      
    listarMusicas() {
      return this.musicas;
    }
  
    removerMusica(musica) {
      this.musicas = this.musicas.filter((m) => m !== musica);
    }
  
    atualizarMusica(musicaExistente, novasInformacoes) {
      const anoLimite = 2023;
  
      if (novasInformacoes.ano > anoLimite || novasInformacoes.titulo === '') {
        console.log(`As novas informações da música são inválidas. A música não será atualizada.`);
      } else {
        const index = this.musicas.findIndex((m) => m === musicaExistente);
        if (index !== -1) {
          this.musicas[index] = novasInformacoes;
          console.log(`Informações da música "${novasInformacoes.titulo}" atualizadas.`);
        }
      }
    }
  
    buscarMusicaPorTitulo(titulo) {
      return this.musicas.find((musica) => musica.titulo === titulo) || null;
    }
  
    contarMusicasPorGenero(genero) {
      return this.musicas.filter((musica) => musica.genero === genero).length;
    }
  
    contarMusicasPorAutor(autor) {
      return this.musicas.filter((musica) => musica.autor === autor).length;
    }
  
    listarMusicasPorAutor(autor) {
      return this.musicas.filter((musica) => musica.autor === autor);
    }

    listarMusicasPorGenero(genero) {
        return this.musicas.filter((musica) => musica.genero === genero);
      }
    }
  

  
  
  module.exports = { Musica, GerenciadorDeMusicas };
  