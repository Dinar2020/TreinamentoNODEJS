console.log("------------- Funções ------------");

function mostrarMsg(){
    console.log("Olá mundo!");
}

function mostrarMsg2(msg){
    console.log(msg);
}

function mostrarMsg3(){
    return "Retorno da função";
}

function somar(x, y){
    return x + y;
}

mostrarMsg();
mostrarMsg2("Mensagem como argumento");
mostrarMsg2("Passando outro argumento");

let retorno = mostrarMsg3();
console.log(retorno);

console.log(mostrarMsg3());

console.log(somar(10, 2));
console.log(somar(6, 22));