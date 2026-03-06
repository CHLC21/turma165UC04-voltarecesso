import db from "../config/db.js"

export class AlunoModel{

static listarOrdemAlfabeto(){
    const sql = `select * from  alunos order by nome`;
    return db.query(sql);
}
static buscarPorNota(){
    const sql = `select * from alunos order by nota desc`;
    return db.query(sql);
}

static buscarNomeNota(){
    const sql = `select nome, nota from  alunos `;
    return db.query(sql);
}

static listarCursos(){
    const sql = `select curso from alunos limit 19`;
    return db.query(sql);
}

static buscarParteNome(nome){
    const sql = "SELECT * FROM alunos WHERE nome LIKE $1";
    return db.query(sql, [`%${nome}%`]);
}

static buscarNota(){
    const sql = `select * from alunos where nota > 7`;
    return db.query(sql);
}

static buscarNota2(){
    const sql = `select * from alunos where nota > 8 or nota < 9`;
    return db.query(sql);
}

static media() {
    const sql = `SELECT * FROM alunos WHERE nota > (SELECT AVG(nota) FROM alunos)`;
    return db.query(sql);
}
}