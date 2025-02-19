let amigos = [];

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim(); // Remove espaços extras
    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(nome);
    inputAmigo.value = ""; // Limpa o campo de entrada

    atualizarLista();
}

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar
    listaAmigos.style.display = "block"; // Garante que a lista reapareça quando novos amigos forem adicionados
    resultado.innerHTML = ""; // Remove o nome do sorteado ao criar uma nova lista
    
    for (let amigo of amigos) {
        const item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione amigos antes de sortear.");
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
    
    // Limpa a lista e esconde-a para permitir um novo sorteio
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("listaAmigos").style.display = "none";
}
