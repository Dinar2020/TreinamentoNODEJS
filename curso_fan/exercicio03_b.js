console.log("-------------Fatorial (Recursividade)------------");

function fatorial(numero){
    console.log(numero + ' * ');

    if (numero != 1){
        return numero * fatorial(numero - 1);
    }

    return 1;
}

let resultado = fatorial(5);

console.log(resultado);

//5! = 5 * 4 * 3 * 2 * 1 
//5! = 5 * 4!
//4! = 5 * 4 * 3!
//3! = 5 * 4 * 3 * 2!
//2! = 5 * 4 * 3 * 2 * 1!
//1! = 5 * 4 * 3 * 2 * 1