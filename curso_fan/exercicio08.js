console.log("-------------Objetos----------------");

function Produto(nome, valor){
    this.nome = nome;
    this.valor = valor;
}

function Item(produto, quantidade){
    this.produto = produto;
    this.quantidade = quantidade;
}

let listaCompras = [
    new Item(new Produto("Macarrão", 2.10), 2),
    new Item(new Produto("Arroz", 3.70), 1),
    new Item(new Produto("Feijão", 6.20), 4),
    new Item(new Produto("Carne", 45.00), 3)
];

let valorTotal = 0;

listaCompras.forEach((item, indice) => {
    console.log(item.produto.nome + ' - R$ ' + 
    item.produto.valor + ' - ' 
    + item.quantidade + ' - R$ ' 
    + (item.produto.valor * item.quantidade));

    valorTotal += item.produto.valor * item.quantidade;

});

console.log("-----------------------");
console.log("Valor Total -> R$" + valorTotal);