import { alunos } from "../../data/alunos.data.js";
import { cursos } from "../../data/cursos.data.js";

export class AlunoModel {

  static listarAlunos() {
    return alunos;
  }

  static buscarAlunoPorId(id) {
    return alunos.find(a => a.id === parseInt(id));
  }

  static criarAluno(nome, cursoId) {
    const cursoExiste = cursos.find(c => c.id === parseInt(cursoId));
    if (!cursoExiste) {
      return false;
    }

    const novoAluno = {
      id: alunos.length + 1,
      nome,
      cursoId: parseInt(cursoId)
    };

    alunos.push(novoAluno);
    return novoAluno;
  }

  static atualizarAluno(id, nome, cursoId) {
    const index = alunos.findIndex(a => a.id === parseInt(id));
    if (index === -1) {
      return false;
    }

    const cursoExiste = cursos.find(c => c.id === parseInt(cursoId));
    if (!cursoExiste) {
      return false;
    }

    alunos[index] = {
      id: parseInt(id),
      nome,
      cursoId: parseInt(cursoId)
    };

    return alunos[index];
  }

  static deletarAluno(id) {
    const index = alunos.findIndex(a => a.id === parseInt(id));
    if (index === -1) {
      return false;
    }

    alunos.splice(index, 1);
    return true;
  }
}
