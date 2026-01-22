import { filmes } from "../../data/banco.js";

export class FilmesModel {

    static listarTodos() {
        return filmes;
    }

    static buscarPorId(id) {
        return filmes.find(filme => filme.id === Number(id));
    }

    static criarFilme( titulo, diretor, anoLancamento, classificacao) {
        const novoFilme = {
            id: filmes.length +1,
            titulo,
            diretor,
            anoLancamento: Number(anoLancamento),
            classificacao
        };

        filmes.push(novoFilme);
        return novoFilme;
    }

    static atualizarFilme(id, titulo, diretor, anoLancamento, classificacao) {
        const index = filmes.findIndex(filme => filme.id === Number(id));

        if (index === -1) {
            return null;
        }

        filmes[index] = {
            id: Number(id),
            titulo,
            diretor,
            anoLancamento: Number(anoLancamento),
            classificacao
        };

        return filmes[index];
    }

    static deletarFilme(id) {
        const index = filmes.findIndex(filme => filme.id === Number(id));

        if (index === -1) {
            return false;
        }

        filmes.splice(index, 1);
        return true;
    }
}
