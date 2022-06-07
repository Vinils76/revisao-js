// Descobrir se alguém já óde dirigir no Brasil

/* const nome = "Marquinhos";
const nasc = 1990;

// Pegado a data atual

var data = new Date();
var anoAtual = data.getFullYear();
// console.log(anoAtual);

// Calculando a idade
let idade = anoAtual - nasc;
console.log(`${nome} tem ${idade} anos`);

// Verificando se é maior de 18 e dando feedback
if(idade >=18) {
    console.log(`${nome} tem ${idade} e ja pode dirigir.`);

    // aconselhando compra pela idade
    if (idade > 30) {
        console.log(`Com ${idade} anos, aconselhamos a comprar um carro zero.`);

    } else {

        console.log(`Aconselhamos comprar um carro usado.`);
    }

} else {    
    console.log(nome + ' poderá dirigir quando completar 18 anos.');

}
 */
/*  Variação 1 - Deixando o usuário digitaro nome e ano de nascimento através do prompt e exibindo na tela */

const nomeUser = prompt("Digite seu nome");
const nascUser = prompt("Digite seu ano de nascimento com 4 dígitos");

let dataUser = new Date();
let anoAtualUser = dataUser.getFullYear();

let idadeUser = anoAtualUser - nascUser;
let conteudo = document.getElementById("conteudo")

if (idadeUser >= 18) {
    conteudo.innerHTML = `${nomeUser}, atualmente você já tem <strong>${idadeUser}</strong> anos e já pode dirigir.`
    
    if(idadeUser > 30) {
        conteudo.innerHTML += `<br>Com <strong>${idadeUser}</strong> anos, aconselhamos a comprar um carro zero.`

    } else {
        conteudo.innerHTML += `<br>Aconselhamos comprar um carro usado.`
    }

} else {
    conteudo,innerHTML = `${nomeUser}, você poderá dirigir somente ao completar 18 anos`;
}

// Variação 2 -  Usando funções para não ficar restrito a um único

function podeDirigir(nome, nasc) {
 

// Pegado a data atual
    var data = new Date();
    var anoAtual = data.getFullYear();
// console.log(anoAtual);

// Calculando a idade
    let idade = anoAtual - nasc;
    console.log(`${nome} tem ${idade} anos`);

// Verificando se é maior de 18 e dando feedback
if(idade >=18) {
    console.log(`${nome} tem ${idade} e ja pode dirigir.`);

    // aconselhando compra pela idade
    if (idade > 30) {
        console.log(`Com ${idade} anos, aconselhamos a comprar um carro zero.`);

    } else {

        console.log(`Aconselhamos comprar um carro usado.`);
    }

    } else {    
    console.log(nome + ' poderá dirigir quando completar 18 anos.');

}}

podeDirigir("Antonio", 1983);
podeDirigir("nacinho", 2010);
podeDirigir("pitunguinha", 2004);