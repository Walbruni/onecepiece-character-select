/* 
OBJETIVO 1 - quando passar o mouse em cima do personagem terá que:  

- Colocar a classe selecionado no personagem para adicionar a animação nele
- Retirar a classe selecionado do personagem que estava selecionado
*/

/*
OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem, trocar a imagem e nome do personagem grande

- Alterar a imagem do jogador 1
- Alterar o nome do jogador 1
*/

// const zoro = document.getElementById("zoro");
// zoro.addEventListener("mouseenter", () => {
//   zoro.classList.add("selecionado");
// });

// const usopp = document.getElementById("usopp");
// usopp.addEventListener("mouseenter", () => {
//   usopp.classList.add("selecionado");
// });

// const sanji = document.getElementById("sanji");
// sanji.addEventListener("mouseenter", () => {
//   sanji.classList.add("selecionado");
// });

// const franky = document.getElementById("franky");
// franky.addEventListener("mouseenter", () => {
//   franky.classList.add("selecionado");
// });

// const law = document.getElementById("law");
// law.addEventListener("mouseenter", () => {
//   law.classList.add("selecionado");
// });

// const marshall = document.getElementById("marshall");
// marshall.addEventListener("mouseenter", () => {
//   marshall.classList.add("selecionado");
// });

// const crocodile = document.getElementById("crocodile");
// crocodile.addEventListener("mouseenter", () => {
//   crocodile.classList.add("selecionado");
// });

// Ao inves de selecionar um a um, pega-se todos pela classe '.personagem' // forEach = significa ''para cada um''

const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    const idSelecionado = personagem.attributes.id.value;

    if (idSelecionado === "doflamingo") return;

    // OBJETIVO 1 //
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagem.classList.add("selecionado");

    // OBJETIVO 2 //

    const imagemJogador1 = document.getElementById("personagem-jogador-1");
    imagemJogador1.src = `./images/${idSelecionado}.png`;

    const nomeJogador1 = document.getElementById("nome-jogador-1");
    const nomeSeleacionado = personagem.getAttribute("data-name");

    nomeJogador1.innerHTML = nomeSeleacionado;
  });
});
