import { AlunoModel } from "../models/AlunoModel.js";

export class AlunoController{

static async listarPorOrdemAlfabeto(req, res){
    try {
        const result = await AlunoModel.listarOrdemAlfabeto();
        if(!result.rows || result.rows === 0){
            res.status(404).json({msg: "Nenhum aluno no banco."});
            return;
        }
        res.status(200).json({msg:"Alunos encontrados e listados em ordem alfabética!", alunos: result.rows});

    } catch (error) {
        res.status(500).json({msg: "Erro interno ao listar os alunos em ordem alfabética.", erro : error.message});
    }
  
}

 static async buscarPorNota(req, res){
    try {
        const result = await AlunoModel.buscarPorNota();
        if(!result.rows || result.rows === 0){
            res.status(404).json({msg: "Nenhum aluno com nota 😶‍🌫️😬."});
            return;
        }
        res.status(200).json({msg:"Alunos e suas notas", alunos: result.rows});

    } catch (error) {
        res.status(500).json({msg: "Erro interno ao listar o alunos e suas notas", erro : error.message});
    }
  
}

  static async buscarNomeNota(req, res){
        try {
            const {nome} = req.params;
            const result = await AlunoModel.buscarNomeNota(nome);
            if(result.rowCount ===0 ){
                res.status(404).json({ msg: "Nenhum aluno com este nome."});
                return;
            }
            res.status(200).json({msg: "Alunos encontrados", Aluno: result.rows});
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao buscar alunos por nome", erro: error.message});
        }
    }

    static async listarOsCursos(req, res){
        try {
            const result = await AlunoModel.listarCursos();
            if(!result.rows || result.rows === 0){
                res.status(404).json({msg: "Nenhum curso no banco."});
                return;
            }
            res.status(200).json({msg:"Cursos encontrados!", cursos: result.rows});
    
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao listar os Cursos", erro : error.message});
        }
      
    }


  static async buscarParteNome(req, res){
        try {
            const {nome} = req.params;
            const result = await AlunoModel.buscarParteNome(nome);
            if(result.rowCount ===0 ){
                res.status(404).json({ msg: "Nenhum aluno com este nome."});
                return;
            }
            res.status(200).json({msg: "Alunos encontrados", Aluno: result.rows});
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao buscar alunos por nome", erro: error.message});
        };
    };

static async buscarNota(req, res) {
    try {
        const result = await AlunoModel.buscarNota(); 
        
        if (result.rowCount === 0) {
            return res.status(404).json({ msg: "Nenhum aluno com esta nota." });
        }

        res.status(200).json({
            msg: "Alunos com nota",
            alunos: result.rows
        });
    } catch (error) {
        res.status(500).json({
            msg: "Erro interno ao buscar nota dos alunos",
            erro: error.message
        });
    }
}

static async buscarNota2(req, res) {
    try {
        const result = await AlunoModel.buscarNota2(); 
        
        if (result.rowCount === 0) {
            return res.status(404).json({ msg: "Nenhum aluno com esta nota." });
        }

        res.status(200).json({
            msg: "Alunos com nota",
            alunos: result.rows
        });
    } catch (error) {
        res.status(500).json({
            msg: "Erro interno ao buscar nota dos alunos",
            erro: error.message
        });
    }
}

static async media(req, res) {
    try {
        const result =  AlunoModel.media(); 
        
        if (result === 0) {
            return res.status(404).json({ msg: "Nenhum aluno com esta média." });
        }

        res.status(200).json({
            msg: "Alunos com média",
            alunos: result
        });
    } catch (error) {
        res.status(500).json({
            msg: "Erro interno ao buscar média dos alunos",
            erro: error.message
        });
    }
}


}