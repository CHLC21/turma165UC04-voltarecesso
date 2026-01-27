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
  static buscarCursoPorId(req, res){
    try {
        const {id}= req.params;
        if(!id){
        res.status(400).json({msg: "nenhum id fornecido"});
        return;}
        const curso = CursoModel.buscarCursoPorId(id);
        if(!curso){
            res.status(404).json({msg: "Curso não encontrado!"});
            return;
        }
        res.status(200).json({msg: "Curso encontrado", curso});
    } catch (error) {
        res.status(500).json({msg: "erro interno ao buscar curso", erro: error.message});
    }
  }
}
