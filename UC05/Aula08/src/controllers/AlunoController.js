import { AlunoModel } from "../models/AlunoModel.js";

export class AlunoController{

static async listar(req, res){
    try {
        const result = await AlunoModel.listarTodos();
        if(!result.rows || result.rows === 0){
            res.status(404).json({msg: "Nenhum aluno no banco."});
            return;
        }
        res.status(200).json({msg:"Alunos encontrados!", alunos: result.rows});

    } catch (error) {
        res.status(500).json({msg: "Erro interno ao listar os alunos", erro : error.message});
    }
  
}
  static async buscarPorId(req, res){
        try {
            const {id} = req.params;
            const result = await AlunoModel.buscarPorId(id);
            if(result.rowCount.lenght ===0 ){
                res.status(404).json({ msg: "Nenhum aluno encontrado com este ID"});
                return;
            }
            res.status(200).json({msg: "Aluno encontrado", Aluno: result.rows});
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao buscar aluno por ID", erro: error.message});
        }
    }
        static async criar(req, res){
            try {
                const{nome, curso, nota} = req.body;
                    if(!nome || !curso || !nota){
                        res.status(400).json({msg: "todos os campos devem ser preenchidos."});
                        return;
                    }
const result = await AlunoModel.criar(nome, curso, nota);
if(result){
    res.status(201).json({msg: "Aluno cadastrado com sucesso!"})
    return;
}
            } catch (error) {
                res.status(500).json({msg: "erro interno ao cadastrar o aluno", erro: error.message});
            }
        }
static async deletar(req, res){
    try {
        const {id} = req.params;
        const result = await AlunoModel.deletarPorId(id);
        if(result.rowCount ===0){
            res.status(404).json({msg: "Nenhum aluno com este id."});
            return;
        }
        res.status(200).json({msg: "Aluno deletado com sucesso!"});
    } catch (error) {
        res.status(500).json({msg: "Erro interno ao deletar aluno", erro: error.message});
    }
}

static async atualizar(req, res){
    try {
        const {id} = req.params;
        const {nome, curso, nota} = req.body;
        if(!nome || !curso || !nota){
                        res.status(400).json({msg: "todos os campos devem ser preenchidos."});
                        return;
                    }
const result = await AlunoModel.atualizar(id, nome, curso, nota);
if(result.rowCount === 0){
    res.status(404).json({msg: "Nenhum aluno com este id"})
    return;
}
 res.status(201).json({msg: "Aluno atualizado com sucesso!"})
    return;
            } catch (error) {
                res.status(500).json({msg: "erro interno ao atualizar o aluno", erro: error.message});
            }
        }


         static async buscarPorCurso(req, res){
        try {
            const {curso} = req.params;
            const result = await AlunoModel.buscarPorCurso(curso);
            if(result.rowCount ===0 ){
                res.status(404).json({ msg: "Nenhum curso com este nome."});
                return;
            }
            res.status(200).json({msg: "Alunos encontrados", Aluno: result.rows});
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao buscar alunos por Curso", erro: error.message});
        }
    }

    static async buscarAprovados(req, res){
        try {
            const result = await AlunoModel.buscarAprovados();
            if (result.rowCount ===0 ){
                res.status(404).json({ msg: "Nenhum aluno aprovado."});
                return;
            }
            res.status(200).json({msg: "Alunos aprovados", Aluno: result.rows});
        } catch (error) {
             res.status(500).json({msg: "Erro interno ao buscar alunos aprovados", erro: error.message});
        }
    }
 static async buscarReprovados(req, res){
        try {
            const result = await AlunoModel.buscarReprovados();
            if (result.rowCount ===0 ){
                res.status(404).json({ msg: "Nenhum aluno reprovado."});
                return;
            }
            res.status(200).json({msg: "Alunos reprovados", Aluno: result.rows});
        } catch (error) {
             res.status(500).json({msg: "Erro interno ao buscar alunos reprovados", erro: error.message});
        }
    }

    static async buscarPorMaiorNota(req, res){
    try {
        const result = await AlunoModel.buscarPorMaiorNota();
        if(!result.rows || result.rows === 0){
            res.status(404).json({msg: "Nenhum aluno com a maior nota😶‍🌫️😬."});
            return;
        }
        res.status(200).json({msg:"Aluno com a maior nota!", alunos: result.rows});

    } catch (error) {
        res.status(500).json({msg: "Erro interno ao listar o aluno com a maior nota", erro : error.message});
    }
  
}

    }

