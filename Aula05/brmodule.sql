/* Lógico_2: */

CREATE TABLE Livro (
    ISBN INTEGER PRIMARY KEY UNIQUE,
    titulo VARCHAR(100),
    autor VARCHAR(100),
    editora VARCHAR(10),
    ano_publicacao DATE
);

CREATE TABLE Leitor (
    CPF VARCHAR(11) PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(11),
    UNIQUE (email, CPF)
);

CREATE TABLE Emprestimo_Alugar (
    data_retirada DATE,
    data_devolucao DATE,
    fk_Leitor_CPF VARCHAR(11),
    fk_Livro_ISBN INTEGER
);

CREATE TABLE Paciente (
    CPF VARCHAR(11) PRIMARY KEY UNIQUE,
    nome VARCHAR(100),
    telefone VARCHAR(10),
    endereco VARCHAR(10)
);

CREATE TABLE Dentista (
    CRO VARCHAR(4) PRIMARY KEY UNIQUE,
    nome VARCHAR(100),
    especialidade VARCHAR(100)
);

CREATE TABLE Consulta_Atendimento (
    Data DATE,
    Hora TIME,
    Descricao VARCHAR(100),
    fk_Dentista_CRO VARCHAR(4),
    fk_Paciente_CPF VARCHAR(11),
    UNIQUE (fk_Paciente_CPF, fk_Dentista_CRO)
);

CREATE TABLE Produto (
    ID VARCHAR(10) PRIMARY KEY,
    Nome VARCHAR(100),
    Marca VARCHAR(10),
    Preco FLOAT,
    fk_Fornecedor_CNPJ INTEGER,
    UNIQUE (ID, fk_Fornecedor_CNPJ)
);

CREATE TABLE Fornecedor (
    CNPJ INTEGER PRIMARY KEY,
    nome_fantasia VARCHAR(100)
);

CREATE TABLE Cliente (
    CPF INTEGER PRIMARY KEY,
    nome VARCHAR(100),
    telefone VARCHAR(100),
    email VARCHAR(100),
    endereco VARCHAR(100),
    UNIQUE (email, CPF)
);

CREATE TABLE Venda (
    Id_Venda INTEGER PRIMARY KEY,
    data DATE,
    Valor_Total FLOAT,
    Forma_Pagamento VARCHAR(11),
    fk_Cliente_CPF INTEGER UNIQUE
);

CREATE TABLE Itens_Venda_Consultar (
    Quantidade FLOAT,
    Preco_Unitario FLOAT,
    fk_Produto_ID VARCHAR(10),
    fk_Venda_Id_Venda INTEGER UNIQUE
);

CREATE TABLE Curso (
    Id_Curso INTEGER PRIMARY KEY,
    idioma VARCHAR(100),
    avancado VARCHAR(10)
);

CREATE TABLE Professor (
    Matricula VARCHAR(100) PRIMARY KEY UNIQUE,
    nome VARCHAR(100),
    especialidade VARCHAR(100)
);

CREATE TABLE Turma (
    Id INTEGER PRIMARY KEY UNIQUE,
    nome VARCHAR(100),
    datainicio DATE,
    datatermino DATE,
    fk_Curso_Id_Curso INTEGER,
    fk_Professor_Matricula VARCHAR(100),
    fk_Aluno_Matricula INTEGER
);

CREATE TABLE Aluno (
    Matricula INTEGER PRIMARY KEY,
    nome VARCHAR(100),
    endereco VARCHAR(100),
    telefone VARCHAR(100),
    email VARCHAR(100) UNIQUE
);
 
ALTER TABLE Emprestimo_Alugar ADD CONSTRAINT FK_Emprestimo_Alugar_1
    FOREIGN KEY (fk_Leitor_CPF)
    REFERENCES Leitor (CPF);
 
ALTER TABLE Emprestimo_Alugar ADD CONSTRAINT FK_Emprestimo_Alugar_2
    FOREIGN KEY (fk_Livro_ISBN)
    REFERENCES Livro (ISBN);
 
ALTER TABLE Consulta_Atendimento ADD CONSTRAINT FK_Consulta_Atendimento_1
    FOREIGN KEY (fk_Dentista_CRO)
    REFERENCES Dentista (CRO);
 
ALTER TABLE Consulta_Atendimento ADD CONSTRAINT FK_Consulta_Atendimento_2
    FOREIGN KEY (fk_Paciente_CPF)
    REFERENCES Paciente (CPF);
 
ALTER TABLE Produto ADD CONSTRAINT FK_Produto_2
    FOREIGN KEY (fk_Fornecedor_CNPJ)
    REFERENCES Fornecedor (CNPJ)
    ON DELETE CASCADE;
 
ALTER TABLE Venda ADD CONSTRAINT FK_Venda_2
    FOREIGN KEY (fk_Cliente_CPF)
    REFERENCES Cliente (CPF)
    ON DELETE CASCADE;
 
ALTER TABLE Itens_Venda_Consultar ADD CONSTRAINT FK_Itens_Venda_Consultar_1
    FOREIGN KEY (fk_Produto_ID)
    REFERENCES Produto (ID);
 
ALTER TABLE Itens_Venda_Consultar ADD CONSTRAINT FK_Itens_Venda_Consultar_2
    FOREIGN KEY (fk_Venda_Id_Venda)
    REFERENCES Venda (Id_Venda);
 
ALTER TABLE Turma ADD CONSTRAINT FK_Turma_2
    FOREIGN KEY (fk_Curso_Id_Curso)
    REFERENCES Curso (Id_Curso)
    ON DELETE RESTRICT;
 
ALTER TABLE Turma ADD CONSTRAINT FK_Turma_3
    FOREIGN KEY (fk_Professor_Matricula)
    REFERENCES Professor (Matricula)
    ON DELETE RESTRICT;
 
ALTER TABLE Turma ADD CONSTRAINT FK_Turma_4
    FOREIGN KEY (fk_Aluno_Matricula)
    REFERENCES Aluno (Matricula)
    ON DELETE RESTRICT;