//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema

const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

let amigos = [];
let ganhador = ""; 

function adicionarAmigo() {
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Insira um nome válido!');
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = '';

    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    listaAmigos.innerHTML = '';

    let template = '';
    for (let i = 0; i < amigos.length; i++) {
        template += `<li>${amigos[i]}</li>`;
    }

    listaAmigos.innerHTML = template;
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert('Adicione seus amigos para sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    ganhador = amigos[indiceSorteado];
    
    listaAmigos.innerHTML = ''; 
    resultado.textContent = "O amigo secreto sorteado é: " + ganhador;
}
