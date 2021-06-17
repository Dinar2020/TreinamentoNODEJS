console.log("--------------Médias---------------");

let medias = [ 9.2, 5.3, 7.8, 2.3, 10.0 ];

let soma = 0;
let menor = medias[0];
let maior = medias[0];

console.log("Méidas da turma:")
for(let i = 0; i < medias.length; i++){
    console.log(medias[i]);
    soma += medias[i];

    if (medias[i] < menor)
        menor = medias[i];

    if (medias[i] > maior)
        maior = medias[i];
}

console.log("A média geral da turma: " + (soma/medias.length));
console.log("A menor média: " + menor);
console.log("A maior média: " + maior);