const form = document.getElementById("novoItem");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    criaElemnto(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);
});

function criaElemnto(nome, quantidade){
    console.log(nome);
    console.log(quantidade);

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    const lista = document.getElementById("lista");
    lista.appendChild(novoItem);

    console.log(novoItem)
}

