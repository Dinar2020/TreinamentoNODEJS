console.log("---------- Exercício (Funções)--------");

function ordenar(colecao){
    for(let i = 0; i < colecao.length; i++){
        for(let j = i + 1; j < colecao.length; j++){
            if (colecao[i] > colecao[j]){
                let temp = colecao[i];
                colecao[i] = colecao[j];
                colecao[j] = temp;
            }
        }
    }

    colecao.map((valor, indice) =>{
        console.log(indice + ' - ' + valor);
    });
}

let colecao = [ 10, 4, 1, 66, 7 ];
ordenar(colecao);