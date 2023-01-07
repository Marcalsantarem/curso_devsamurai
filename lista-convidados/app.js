var convidados = JSON.parse(localStorage.getItem("convidados")) || [];        

const lista = document.querySelector('#lista');
const campo = document.querySelector('#campo');
const botao = document.querySelector('#botao');

exibeLista();
        
botao.addEventListener('click', () => {    
    const nome = campo.value;
    if (nome) {                
        convidados.push({name: nome});
        campo.value = "";
        salvarConvidados();
        exibeLista();
    }
})

function exibeLista(){
    lista.innerHTML = "";
    for (const convidado of convidados) {
        const elConvidado = document.createElement('li');
        const elNome = document.createTextNode(convidado.name);

        const excluir = document.createElement('a');
        excluir.setAttribute("href", "#");
        excluir.addEventListener("click", () => {
            convidados = convidados.filter(c => c.name !== convidado.name);
            salvarConvidados();
            exibeLista();
        });
                
        var excluirText = document.createTextNode("Excluir");
                
        excluir.appendChild(excluirText);
        elConvidado.appendChild(elNome);
        elConvidado.appendChild(excluir);
        lista.appendChild(elConvidado);
    }
}

function salvarConvidados() {
    localStorage.setItem("convidados", JSON.stringify(convidados));
}