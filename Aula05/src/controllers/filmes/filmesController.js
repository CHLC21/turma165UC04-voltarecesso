import { FilmesModel } from "../../models/filmes/filmesModels.js";

export class FilmesController {

    static listarFilmes(req, res) {
        try {
            const filmes = FilmesModel.listarTodos();

            if (!filmes || filmes.length === 0) {
                return res.status(404).json({ msg: "Nenhum filme no banco." });
            }

            res.status(200).json({
                msg: "Filmes encontrados com sucesso!",
                filmes
            });

        } catch (error) {
            res.status(500).json({
                msg: "Erro interno ao listar os filmes",
                erro: error.message
            });
        }
    }

    static buscarPorId(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ msg: "O id não pode ser vazio." });
            }

            const filme = FilmesModel.buscarPorId(id);

            if (!filme) {
                return res.status(404).json({ msg: "Nenhum filme encontrado com este ID." });
            }

            res.status(200).json({
                msg: "Filme encontrado com sucesso!",
                filme
            });

        } catch (error) {
            res.status(500).json({
                msg: "Erro interno ao buscar filme por ID",
                erro: error.message
            });
        }
    }

    static criarFilme(req, res) {
        try {
            const { titulo, diretor, anoLancamento, classificacao } = req.body;

            if ( !titulo || !diretor || !anoLancamento || !classificacao) {
                return res.status(400).json({
                    msg: "Todos os campos devem ser preenchidos para criar o filme."
                });
            }

            const novoFilme = FilmesModel.criarFilme(
            
                titulo,
                diretor,
                anoLancamento,
                classificacao
            );

            res.status(201).json({
                msg: "Filme criado com sucesso!",
                novoFilme
            });

        } catch (error) {
            res.status(500).json({
                msg: "Erro interno ao criar filme.",
                erro: error.message
            });
        }
    }

    static atualizarFilme(req, res) {
        try {
            const { id } = req.params;
            const { titulo, diretor, anoLancamento, classificacao } = req.body;

            if (!id) {
                return res.status(400).json({
                    msg: "O id deve ser informado para atualização."
                });
            }

            if (!titulo || !diretor || !anoLancamento || !classificacao) {
                return res.status(400).json({
                    msg: "Todos os campos devem ser preenchidos na atualização."
                });
            }

            const filmeExistente = FilmesModel.buscarPorId(id);

            if (!filmeExistente) {
                return res.status(404).json({
                    msg: "Filme não encontrado."
                });
            }

            const filmeAtualizado = FilmesModel.atualizarFilme(
                id,
                titulo,
                diretor,
                anoLancamento,
                classificacao
            );

            res.status(200).json({
                msg: "Filme atualizado com sucesso!",
                filmeAtualizado
            });

        } catch (error) {
            res.status(500).json({
                msg: "Erro interno ao atualizar filme.",
                erro: error.message
            });
        }
    }

    static deletarFilme(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    msg: "O id deve ser fornecido para deletar o filme."
                });
            }

            const filmeDeletado = FilmesModel.deletarFilme(id);

            if (!filmeDeletado) {
                return res.status(404).json({
                    msg: "Filme não encontrado com este id."
                });
            }

            res.status(200).json({
                msg: "Filme deletado com sucesso!"
            });

        } catch (error) {
            res.status(500).json({
                msg: "Erro interno ao deletar o filme.",
                erro: error.message
            });
        }
    }
}
