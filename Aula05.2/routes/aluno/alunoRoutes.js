import { Router } from "express";
import { AlunoController } from "../../controllers/aluno/AlunoController.js";

const router = Router();

// listar alunos
router.get("/", AlunoController.listarAlunos);

// buscar aluno por id
router.get("/:id", AlunoController.buscarAlunoPorId);

// criar aluno
router.post("/", AlunoController.criarAluno);

// atualizar aluno
router.put("/:id", AlunoController.atualizarAluno);

// deletar aluno
router.delete("/:id", AlunoController.deletarAluno);

export default router;
