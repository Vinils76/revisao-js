// Criando arrays
const nome = ["Jose", "João", "Maria", "Jonas"];
const nasc = [1983, 2015, 2000, 1945];

const data = new Date();
const ano = data.getFullYear();

let contador = 0;


// Criando loop

while (contador < nome.length) {
    let idade = ano - nasc[contador];

    if (idade >= 18) {
    console.log(`${nome[contador]} tem ${idade} anos e pode dirigir`);
} else {
    console.log(`${nome[contador]} só poderá dirigir ao completar 18 anos`);
}
    contador++;
}