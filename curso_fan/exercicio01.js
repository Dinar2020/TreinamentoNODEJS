console.log("-------Número perfeito--------");

let numero = 5;
let somaFatores = 0;

for(let i = numero - 1; i > 0; i--){
    if (numero % i == 0){
        console.log(i);
        somaFatores += i;
    }     
}

console.log((somaFatores == numero) ? `O número ${numero} é um número perfeito` : `O número ${numero} não é um número perfeito`);