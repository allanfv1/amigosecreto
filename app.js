let listaAmigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    if (nome.trim() === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    listaAmigos.push(nome);
    document.getElementById('amigo').value = '';
    exibirListaAmigos();
}

function exibirListaAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = "";

    listaAmigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

function sortearAmigos() {
    if (listaAmigos.length < 1) {
        alert("Adicione pelo menos um amigo para fazer o sorteio.");
        return;
    }

    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    exibirResultadoSorteio(sorteado);
}

function exibirResultadoSorteio(sorteado) {
    let listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = "";

    let li = document.createElement('li');
    li.textContent = `O amigo sorteado é: ${sorteado}`;
    listaResultado.appendChild(li);
}


//foi dificil isso aqui, mas facilitou muito a navegação
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});
