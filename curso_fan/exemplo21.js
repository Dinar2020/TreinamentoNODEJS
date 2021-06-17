console.log("-------------- Funções (Arrow)------------");

let colecao = [ 'Marcos', 'Maria', 'José' ];

colecao.map(function(valor, indice){
    console.log(indice +  ' - ' + valor);
});

console.log('---------------------');

colecao.map((valor, indice) => {
    console.log(indice + " - " + valor);
});

