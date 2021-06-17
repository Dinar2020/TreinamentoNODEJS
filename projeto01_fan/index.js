const express = require('express'); //primeiro passo, inclusão da biblioteca no projeto

const app = express(); //segundo passo, criação do objeto

app.use(express.urlencoded({ extended : false }));
app.set('view engine', 'ejs');

//terceiro passo, utilização de métodos do objeto criado
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!");
});

//HTTP - GET
app.get('/', (req, res) => {    
    res.send("Olá Mundo!!!");
});

app.get('/outra_rota', (req, res) =>{
    res.send("<h1>Você está acessando outra rota!</h1>");
});

app.get('/tabuada', (req, res) => {
    // let numero = 9;
    let numero = (req.query.numero === undefined) ? 1 : req.query.numero;
    let resposta = '';

    for(let i = 1; i <= 10; i++){
        resposta += numero + ' * ' + i + ' = ' + (numero * i) + '<br/>';
    }

    res.send(resposta);
});

app.get('/tabuada/:numero', (req, res) => {

    let numero = req.params.numero;

    let resposta = '';

    for(let i = 1; i <= 10; i++){
        resposta += numero + ' * ' + i + ' = ' + (numero * i) + '<br/>';
    }

    res.send(resposta);

});

app.post('/ola', (req, res) => {
    let nome = (req.query.nome === undefined) ? '' : req.query.nome;
    let idade = (req.query.idade === undefined) ? '' : req.query.idade;

    res.send('Olá, ' + nome + ', você tem ' + idade + ' anos.');
});

app.get('/ola/:nome/:idade', (req, res) => {
    res.send('Olá, ' + req.params.nome + ', você tem ' + req.params.idade + ' anos.');
});

app.get('/teste_ejs', (req, res) => {
    res.render('teste');
});

app.get('/ola_com_view', (req, res) =>{
    let x = 'Marcos';

    res.render('ola', { nome : x });
});

app.get('/pares_solucao01', (req, res) => {

    let x = 1;
    let y = 10;
    let resposta = '';

    for(let i = x; i < y; i++){
        if (i % 2 == 0)
            resposta += i + ',';
    }

    res.render('pares01', { x : x, y : y, pares : resposta });
});

app.get('/pares_solucao02', (req, res) => {
    let x = 1;
    let y = 10;

    res.render('pares02', { x : x, y : y });
});

app.get('/formulario', (req, res) => {
    res.render('formulario');
});

app.post('/salvar', (req, res) => {
    let nome = req.body.nome;
    let idade = req.body.idade;

    res.render('resultado', { msg : `Olá ${nome}! Você tem ${idade} anos e seus dados foram recebidos!`});
});

app.get('/buscar_aluno/:matricula', (req, res) => {

    let matricula = req.params.matricula;
    let alunoEncontrado = {};

    let alunos = [
        { nome: 'Marcos', idade: 36, matricula: 123 },
        { nome: 'Maria', idade: 30, matricula: 456 },
        { nome: 'José', idade: 45, matricula: 789 },
        { nome: 'João', idade: 24, matricula: 343 },
    ];

    alunos.forEach((aluno) => {
        if (aluno.matricula == matricula)
            alunoEncontrado = aluno;
    });

    res.render('buscar_aluno', { aluno_encontrado : alunoEncontrado });
});

var alunos = [
    { nome: 'Marcos', idade: 36, matricula: 123 },
    { nome: 'Maria', idade: 30, matricula: 456 },
    { nome: 'José', idade: 45, matricula: 789 },
    { nome: 'João', idade: 24, matricula: 343 },
];

app.get('/formulario_buscar_aluno', (req, res) => {
    res.render('formulario_aluno', { alunos : alunos });
});

app.post('/formulario_buscar_aluno', (req, res) => {
    let matricula = req.body.matricula;
    let alunosEncontrados = (req.body.matricula !== '') ? [] : alunos;

    alunos.forEach((aluno) => {
        if (aluno.matricula == matricula)
            alunosEncontrados.push(aluno);
    });

    res.render('formulario_aluno', { alunos : alunosEncontrados });
});

app.get('/adicionar_aluno', (req, res) => {
    res.render('adicionar_aluno');
});

app.post('/adicionar_aluno', (req, res) => {    
    let nome = req.body.nome;
    let idade = req.body.idade;
    let matricula = req.body.matricula;

    alunos.push({ nome : nome, idade : idade, matricula : matricula });

    res.redirect('/formulario_buscar_aluno');
});

app.get('/excluir_aluno/:indice', (req, res) => {

    let indice = req.params.indice;
    alunos.splice(indice, 1);

    res.redirect('/formulario_buscar_aluno');
});

app.get('/editar_aluno/:indice', (req, res) => {

    let indice = req.params.indice;

    aluno = alunos[indice];

    res.render('editar_aluno', { aluno : aluno, indice : indice });
});

app.post('/editar_aluno', (req, res) => {
    let indice = req.body.indice;
    let nome = req.body.nome;
    let idade = req.body.idade;
    let matricula = req.body.matricula;

    alunos[indice].nome = nome;
    alunos[indice].idade = idade;
    alunos[indice].matricula = matricula;

    res.redirect('/formulario_buscar_aluno');
});