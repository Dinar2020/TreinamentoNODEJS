console.log("----------Vetores (Pares e Impares)-----------");

let colecao = [ 100, 7, 22, 1, 66, 4, 2, 55, 3 ];

let pares = [];
let impares = [];

let j = 0;
let z = 0;

console.log("Coleção inicial:");
//Estrutura responsável pela impressão da coleção inicial
//Também é utilizada para o preenchimento dos vetores pares e impares
for(let i = 0; i < colecao.length; i++){    
    console.log(colecao[i]);

    if (colecao[i] % 2 == 0){
        pares[j] = colecao[i];
        j++; //j = j + 1
    }else{
        impares[z] = colecao[i];
        z++; //z = z + 1
    }
}

console.log("Pares:");
//Imprimindo os valores do vetor pares
for(let i = 0; i < pares.length; i++){
    console.log(pares[i]);
}

console.log("Ímpares:");
//Imprimindos os valores do vetor impares
for(let i = 0; i < impares.length; i++){
    console.log(impares[i]);
}