console.log("------------Vetores (Métodos Importantes)---------");

let nomes = [ 'Marcos', 'Maria' ];

//Inserir elemento no final do vetor
nomes.push('José');
console.log(nomes);

//Remover elemento do final do vetor
nomes.pop();
console.log(nomes);

//Inserir elemento no inicio do vetor
nomes.unshift('José');
console.log(nomes);

//Remover elemento do início do vetor
nomes.shift();
console.log(nomes);

//Retorna o indice de um determinado elemento em uma coleção
//Caso o elemento não faça parte da coleção, o método retorna -1
console.log(nomes.indexOf('Marcos'));
console.log(nomes.indexOf('José'));

//Método splice remove um ou mais elementos de um vetor
//O primeiro argumento representa o indice que ele irá iniciar o corte
//O segundo argumento representa a quantidade de elementos que ele irá cortar
nomes.push('José');
console.log(nomes);
nomes.splice(1, 1);
console.log(nomes);

//Iteração entre elementos
nomes.forEach(function(valor, indice, vetor){
    console.log(indice + ' - ' + valor);
})

//Iteração entre elementos
nomes.map(function(valor, indice){
    console.log(indice + ' - ' + valor);
})