console.log("--------------Alteraçõa de fluxo padrão-------------");

for(let i = 0; i < 10; i++){

    if (i == 2)
        continue;

    console.log(i);
}

console.log("---------------------");

for(let i = 0; i < 10; i++){

    if (i == 2)
        break;

    console.log(i);
}