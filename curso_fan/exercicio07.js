console.log("-------------------Objetos----------------");

function Roda(aro){
    this.aro = aro;
}

function Veiculo(marca, anoFabricacao, rodas){
    this.marca = marca;
    this.anoFabricacao = anoFabricacao;
    this.rodas = rodas;
}

let rodas = Array(
    new Roda(16),
    new Roda(16),
    new Roda(16),
    new Roda(16)
);

let v1 = new Veiculo("Ford", 2021, rodas);
console.log(v1);

v1.rodas.forEach(function(valor, indice, vetor){
    console.log(indice + ' - ' + valor.aro);
});

console.log("----------------------");

let v2 = new Veiculo("Honda", 2019, [
    new Roda(13),
    new Roda(13)
]);
console.log(v2);

v2.rodas.forEach(function(valor, indice, vetor){
    console.log(indice + ' - ' + valor.aro);
});
