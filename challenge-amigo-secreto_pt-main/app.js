// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    // Pega o valor que o usuário digitou no campo de texto
    let nome = document.getElementById("amigo").value;

    // Verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return; // Se estiver vazio, não faz nada
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de texto após adicionar o nome
    document.getElementById("amigo").value = "";

    // Atualiza a lista de amigos visível na página
    exibirAmigos();
}

// Função para exibir a lista de amigos
function exibirAmigos() {
    // Pega o elemento onde vamos mostrar os nomes
    let lista = document.getElementById("listaAmigos");

    // Limpa a lista para evitar nomes repetidos
    lista.innerHTML = "";

    // Para cada nome no array de amigos, cria um item na lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i]; // Define o texto do item como o nome do amigo
        lista.appendChild(li); // Adiciona o item à lista
    }
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return; // Se não houver amigos, não faz nada
    }

    // Gera um número aleatório para escolher um amigo
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Pega o nome do amigo sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostra o nome do amigo sorteado na página
    document.getElementById("resultado").textContent = "O amigo sorteado é: " + amigoSorteado;
}
