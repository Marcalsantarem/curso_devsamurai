var convidados = JSON.parse(localStorage.getItem("convidados")) || [];        

const lista = document.querySelector('#lista');
const campo = document.querySelector('#campo');
const botao = document.querySelector('#botao');

exibeLista();
        
botao.addEventListener('click', adicionaConvidado);
campo.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionaConvidado();
    }
});

function exibeLista(){
    lista.innerHTML = "";
    for (const convidado of convidados) {
        const elConvidado = document.createElement('li');
        const elSpanNome = document.createElement("span");
        elSpanNome.classList.add("name-span");
        const elNome = document.createTextNode(convidado.name);
        elSpanNome.appendChild(elNome);

        const elSpanRemove = document.createElement("span");
        elSpanRemove.classList.add("remove-span");
        const excluir = document.createElement('a');
        excluir.setAttribute("href", "#");
        excluir.addEventListener("click", () => {
            convidados = convidados.filter(c => c.name !== convidado.name);
            salvarConvidados();
            exibeLista();
        });
                
        var excluirText = document.createTextNode("Excluir");
        excluir.appendChild(excluirText);
        elSpanRemove.appendChild(excluir);

        elConvidado.appendChild(elSpanNome);
        elConvidado.appendChild(elSpanRemove);
        lista.appendChild(elConvidado);
    }
}

function adicionaConvidado() {    
    const nome = campo.value;
    if (nome) {
        convidados.push({name: nome});
        campo.value = "";
        salvarConvidados();
        exibeLista();
    }
}

function salvarConvidados() {
    localStorage.setItem("convidados", JSON.stringify(convidados));
}