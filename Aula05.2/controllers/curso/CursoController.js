import { CursoModel } from "../../models/curso/CursoModel.js";

export class CursoController {

  static listarCursos(req, res) {
    try {
      const cursos = CursoModel.listarCursos();

      if (!cursos || cursos.length === 0) {
        return res.status(404).json({
          msg: "Nenhum curso cadastrado no banco!"
        });
      }

      res.status(200).json({
        msg: "Cursos encontrados.",
        cursos
      });

    } catch (error) {
      res.status(500).json({
        msg: "Erro interno ao listar os cursos",
        erro: error.message
      });
    }
  }

  static buscarCursoPorId(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ msg: "Nenhum id fornecido." });
      }

      const curso = CursoModel.buscarCursoPorId(id);

      if (!curso) {
        return res.status(404).json({ msg: "Curso não encontrado!" });
      }

      res.status(200).json({ msg: "Curso encontrado", curso });

    } catch (error) {
      res.status(500).json({
        msg: "Erro interno ao buscar curso",
        erro: error.message
      });
    }
  }

  static criarCurso(req, res) {
    try {
      const { nome } = req.body;

      if (!nome) {
        return res.status(400).json({
          msg: "Todos os campos devem ser preenchidos!"
        });
      }

      const cursos = CursoModel.listarCursos();
      const cursoExistente = cursos.find(
        c => c.nome.toLowerCase() === nome.toLowerCase()
      );

      if (cursoExistente) {
        return res.status(400).json({
          msg: "Curso já existente."
        });
      }

      const novoCurso = CursoModel.criarCurso(nome);

      res.status(201).json({
        msg: "Curso criado com sucesso",
        novoCurso
      });

    } catch (error) {
      res.status(500).json({
        msg: "Erro interno ao cadastrar curso",
        erro: error.message
      });
    }
  }

  static atualizarCurso(req, res) {
    try {
      const { id } = req.params;
      const { nome } = req.body;

      if (!id) {
        return res.status(400).json({ msg: "Nenhum id fornecido." });
      }

      if (!nome) {
        return res.status(400).json({
          msg: "Todos os campos devem ser preenchidos."
        });
      }

      const cursoAtual = CursoModel.buscarCursoPorId(id);

      if (!cursoAtual) {
        return res.status(404).json({
          msg: "Curso inexistente!"
        });
      }

      const cursos = CursoModel.listarCursos();
      const cursoDuplicado = cursos.find(
        c => c.nome.toLowerCase() === nome.toLowerCase() && c.id !== id
      );

      if (cursoDuplicado) {
        return res.status(400).json({
          msg: "Curso já existente na base de dados!"
        });
      }

      const cursoAtualizado = CursoModel.atualizarCurso(id, nome);

      res.status(200).json({
        msg: "Curso atualizado com sucesso",
        cursoAtualizado
      });

    } catch (error) {
      res.status(500).json({
        msg: "Erro interno ao atualizar curso",
        erro: error.message
      });
    }
  }

  static deletarCurso(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ msg: "Nenhum id fornecido." });
      }

      const cursoDeletado = CursoModel.deletarCurso(id);

      if (!cursoDeletado) {
        return res.status(404).json({
          msg: "Curso não encontrado."
        });
      }

      res.status(200).json({
        msg: "Curso deletado com sucesso!"
      });

    } catch (error) {
      res.status(500).json({
        msg: "Erro interno ao deletar curso.",
        erro: error.message
      });
    }
  }

  static buscarAlunosPorCurso(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ msg: "Nenhum id fornecido." });
      }

      const curso = CursoModel.buscarCursoPorId(id);

      if (!curso) {
        return res.status(404).json({
          msg: "Curso inexistente."
        });
      }

      const alunosCurso = CursoModel.listarAlunosPorCurso(id);

      if (alunosCurso.length === 0) {
        return res.status(200).json({
          msg: "Nenhum aluno vinculado ao curso.",
          alunosCurso
        });
      }

      res.status(200).json({
        msg: "Alunos encontrados",
        alunosCurso
      });

    } catch (error) {
      res.status(500).json({
        msg: "Erro interno ao buscar alunos por curso",
        erro: error.message
      });
    }
  }
}
