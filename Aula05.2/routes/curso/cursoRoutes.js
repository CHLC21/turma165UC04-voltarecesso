import { Router } from "express";
import { CursoController } from "../../controllers/curso/CursoController.js";

const router = Router();

router.get("/", CursoController.listarCursos);

export default router;
