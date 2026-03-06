import {AlunoController} from "../controllers/AlunoController.js";
import express from "express";
const router = express.Router();

router.get("/", AlunoController.listarPorOrdemAlfabeto);
router.get("/alunos/notas", AlunoController.buscarPorNota);
router.get("/alunos/nomes", AlunoController.buscarNomeNota);
router.get("/alunos/cursos", AlunoController.listarOsCursos);
router.get("/alunos/:partenome", AlunoController.buscarParteNome);
router.get("/aluno/buscarnote", AlunoController.buscarNota);
router.get("/aluno/notasbuscar", AlunoController.buscarNota2);
router.get("/aluno/media", AlunoController.media);
export default router