console.log("-------- Exercício (Funções)--------");

let credito = (saldo) => {
    if (saldo <= 200){
        return "Nenhum crédito";
    }else if (saldo <= 400){
        return "Crédito de 20% -> " + (saldo * 0.20);
    }else if (saldo <= 600){
        return "Crédito de 30% -> " + (saldo * 0.30);
    }else{
        return "Crédito de 40% -> " + (saldo * 0.40);
    }
}

console.log(credito(317));
console.log(credito(820));