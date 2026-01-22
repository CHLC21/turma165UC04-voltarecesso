import express from "express";
import { FilmesController } from "../../controllers/filmes/filmesController.js";

const router = express.Router();

// Rota para listar todos os filmes
router.get("/", FilmesController.listarFilmes);

// Rota para buscar um filme por id
router.get("/:id", FilmesController.buscarPorId);

// Rota para criar um novo filme
router.post("/", FilmesController.criarFilme);

// Rota para atualizar um filme
router.put("/:id", FilmesController.atualizarFilme);

// Rota para deletar um filme
router.delete("/:id", FilmesController.deletarFilme);

export default router;
