import { Router } from "express";
import { CursoController } from "../../controllers/curso/CursoController.js";

const router = Router();

// Listar cursos
router.get("/", CursoController.listarCursos);

// Buscar curso por id
router.get("/:id", CursoController.buscarCursoPorId);

// Criar curso
router.post("/", CursoController.criarCurso);

// Atualizar curso
router.put("/:id", CursoController.atualizarCurso);

// Deletar curso
router.delete("/:id", CursoController.deletarCurso);

// Buscar alunos por curso (rota específica SEMPRE por último)
router.get("/:id/alunos", CursoController.buscarAlunosPorCurso);

export default router;
