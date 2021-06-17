console.log("----------------Objetos--------------");

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;

    this.dizerOla = function(){
        console.log(`Olá, eu sou ${nome} e tenho ${idade} anos.`);
    }
}

let p = new Pessoa("Marcos", 36);

console.log(p);
console.log(p.nome);
console.log(p.idade);

p.dizerOla();

console.log(typeof(p));
