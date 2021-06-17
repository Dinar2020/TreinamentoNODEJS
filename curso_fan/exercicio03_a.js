console.log("-------------Fatorial------------");

let numero = 6;
let fatorial = 1;

//6! = 6 * 5 * 4 * 3 * 2 * 1

for(let i = numero; i > 1; i--){
    fatorial *= i; //fatorial = fatorial * i
}

console.log(fatorial);