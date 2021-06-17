console.log("------------------Objetos (Relações)------------------");

function Endereco(logradouro, numero){
    this.logradouro = logradouro;
    this.numero = numero;
}

function Professor(nome, endereco){
    this.nome = nome;
    this.endereco = endereco;

    this.retornarRua = function(){
        console.log('RUA: ' + this.endereco.logradouro);
    }
}

let e = new Endereco("Rua A", 123);
let p1 = new Professor("Marcos", e);

let p2 = new Professor("Maria", new Endereco("Rua B", 456));

console.log(e);
console.log(p1);
console.log(p2);

console.log('-------------------');

console.log(p1.nome);
console.log(p1.endereco.logradouro);
console.log(p1.endereco.numero);
p1.retornarRua();

console.log('--------------------');

console.log(p2.nome);
console.log(p2.endereco.logradouro);
console.log(p2.endereco.numero);
p2.retornarRua();

