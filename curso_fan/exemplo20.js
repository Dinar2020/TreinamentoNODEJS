console.log("--------- Funções (Parâmetros REST)-------");

function calcular(multiplicador, ...valores){

    console.log(typeof(valores));

    for(let i = 0; i < valores.length; i++){
        console.log(multiplicador * valores[i]);
    }
}

calcular(2, 1, 2, 3, 4);