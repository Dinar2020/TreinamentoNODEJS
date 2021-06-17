console.log("-------------------Objetos----------------");

let professor = new Object({
    nome: "Marcos",
    curso: "JS",
    matricula: 123,

    dizerOla: () => {
        console.log(`Olá, eu sou ${this.nome}, do curso ${this.curso} e com matrícula ${this.matricula}.`);
    }
});

console.log(professor);
professor.dizerOla();