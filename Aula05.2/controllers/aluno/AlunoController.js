import { AlunoModel } from "../../models/aluno/AlunoModel.js";

export class AlunoController {

  static listarAlunos(req, res) {
    try {
      const alunos = AlunoModel.listarAlunos();

      if (!alunos || alunos.length === 0) {
        return res.status(404).json({
          msg: "Nenhum aluno cadastrado."
        });
      }

      res.status(200).json({
        msg: "Alunos encontrados.",
        alunos
      });

    } catch (error) {
      res.status(500).json({
        msg: "Erro interno ao listar alunos",
        erro: error.message
      });
    }
  }

  static buscarAlunoPorId(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          msg: "Nenhum id fornecido."
        });
      }

      const aluno = AlunoModel.buscarAlunoPorId(id);

      if (!aluno) {
        return res.status(404).json({
          msg: "Aluno não encontrado."
        });
      }

      res.status(200).json({
        msg: "Aluno encontrado",
        aluno
      });

    } catch (error) {
      res.status(500).json({
        msg: "Erro interno ao buscar aluno",
        erro: error.message
      });
    }
  }

  static criarAluno(req, res) {
    try {
      const { nome, cursoId } = req.body;

      if (!nome || !cursoId) {
        return res.status(400).json({
          msg: "Todos os campos devem ser preenchidos."
        });
      }

      const novoAluno = AlunoModel.criarAluno(nome, cursoId);

      if (!novoAluno) {
        return res.status(404).json({
          msg: "Curso informado não existe."
        });
      }

      res.status(201).json({
        msg: "Aluno criado com sucesso",
        novoAluno
      });

    } catch (error) {
      res.status(500).json({
        msg: "Erro interno ao cadastrar aluno",
        erro: error.message
      });
    }
  }

  static atualizarAluno(req, res) {
    try {
      const { id } = req.params;
      const { nome, cursoId } = req.body;

      if (!id) {
        return res.status(400).json({
          msg: "Nenhum id fornecido."
        });
      }

      if (!nome || !cursoId) {
        return res.status(400).json({
          msg: "Todos os campos devem ser preenchidos."
        });
      }

      const alunoAtualizado = AlunoModel.atualizarAluno(id, nome, cursoId);

      if (!alunoAtualizado) {
        return res.status(404).json({
          msg: "Aluno não encontrado ou curso inválido."
        });
      }

      res.status(200).json({
        msg: "Aluno atualizado com sucesso",
        alunoAtualizado
      });

    } catch (error) {
      res.status(500).json({
        msg: "Erro interno ao atualizar aluno",
        erro: error.message
      });
    }
  }

  static deletarAluno(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          msg: "Nenhum id fornecido."
        });
      }

      const alunoDeletado = AlunoModel.deletarAluno(id);

      if (!alunoDeletado) {
        return res.status(404).json({
          msg: "Aluno não encontrado."
        });
      }

      res.status(200).json({
        msg: "Aluno deletado com sucesso!"
      });

    } catch (error) {
      res.status(500).json({
        msg: "Erro interno ao deletar aluno",
        erro: error.message
      });
    }
  }
}
