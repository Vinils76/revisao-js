


let formulario = document.querySelector("form");
let conteudo 

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let nasc = document.getElementById("nasc").value;

    var data = new Date();
    var ano = data.getFullYear();
    let idade = ano - nasc;

    if (idade >= 18) {
    conteudo.innerHTML = `<p>${nome} tem ${idade} anos e ja pode dirigir</p>`;
    } else {
        conteudo.innerHTML = `<p>${nome} só poderá dirigir quando fizer 18 anos</p>`;
    }

    });