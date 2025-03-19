let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    // Verifica se o campo está vazio
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }

    // Gera um índice aleatório usando Math.random()
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    
    // Exibe o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    let li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(li);
}