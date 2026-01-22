import express from "express";
import filmesRoutes from "./src/routes/filmes/filmesRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// Rotas de filmes
app.use("/filmes", filmesRoutes);

// Rota de teste
app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Aplicação rodando em http://localhost:${PORT}`);
});
