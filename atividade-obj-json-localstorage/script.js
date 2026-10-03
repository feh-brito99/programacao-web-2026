/* 1. SELEÇÃO DE ELEMENTOS DO DOM */
const form = document.getElementById("form-tarefa");
const inputIndice = document.getElementById("indice-edicao");
const inputNome = document.getElementById("nome-tarefa");
const inputDescricao = document.getElementById("descricao-tarefa");
const inputPrazo = document.getElementById("prazo-tarefa");
const btnSubmit = document.getElementById("btn-submit");
const btnSecundario = document.getElementById("btn-secundario");
const listaTarefas = document.getElementById("lista-tarefas");

/* 2. REGRA DOS 5 DIAS: LIMPA TAREFAS CONCLUÍDAS HÁ MAIS DE 5 DIAS */
function limparTarefasExpiradas() {
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    const agora = Date.now();
    const cincoDiasEmMs = 5 * 24 * 60 * 60 * 1000;

    const tarefasValidas = tarefas.filter(item => {
        if (!item.concluida) return true;
        return (agora - item.dataConclusao) < cincoDiasEmMs;
    });

    localStorage.setItem("tarefas", JSON.stringify(tarefasValidas));
}

/* 3. DESENHAR A LISTA NA TELA */
function renderizarTarefas() {
    limparTarefasExpiradas();
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    listaTarefas.innerHTML = "";
    let i = 0;

    for (const item of tarefas) {
        const li = document.createElement("li");
        if (item.concluida) {
            li.classList.add("concluida");
        }

        let prazoFormatado = "Sem prazo";
        if (item.prazo) {
            prazoFormatado = item.prazo.split("-").reverse().join("/");
        }

        li.innerHTML = `
            <div class="info-tarefa">
                <strong>${item.nome}</strong> (Prazo: ${prazoFormatado})<br>
                <small>${item.descricao}</small>
            </div>
            <div class="acoes-tarefa">
                <button type="button" class="btn-acao btn-check" title="Concluir" onclick="alternarConclusao(${i})">
                    ${item.concluida ? "↩" : "✓"}
                </button>
                <button type="button" class="btn-acao btn-editar" title="Editar" onclick="iniciarEdicao(${i})">
                    ✎
                </button>
                <button type="button" class="btn-acao btn-apagar" title="Apagar Tarefa" onclick="apagarTarefa(${i})">
                    ✕
                </button>
            </div>
        `;

        listaTarefas.appendChild(li);
        i++;
    }
}

/* 4. SALVAR OU ATUALIZAR TAREFA */
form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = inputNome.value.trim();
    const descricao = inputDescricao.value.trim() || "Sem descrição";
    const prazo = inputPrazo.value;
    const indiceEdicao = parseInt(inputIndice.value);

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    if (indiceEdicao === -1) {
        const novaTarefa = {
            nome: nome,
            descricao: descricao,
            prazo: prazo,
            concluida: false,
            dataConclusao: null
        };
        tarefas.push(novaTarefa);
    } else {
        tarefas[indiceEdicao].nome = nome;
        tarefas[indiceEdicao].descricao = descricao;
        tarefas[indiceEdicao].prazo = prazo;
        resetarModoEdicao();
    }

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    form.reset();
    renderizarTarefas();
});

/* 5. AÇÕES: CONCLUIR, APAGAR E EDITAR */
window.alternarConclusao = function (indice) {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas[indice].concluida = !tarefas[indice].concluida;
    tarefas[indice].dataConclusao = tarefas[indice].concluida ? Date.now() : null;

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    renderizarTarefas();
};

window.apagarTarefa = function (indice) {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.splice(indice, 1); // Apaga a tarefa na hora

    // Se estiver editando a tarefa que acabou de ser apagada, cancela a edição
    if (parseInt(inputIndice.value) === indice) {
        resetarModoEdicao();
        form.reset();
    }

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    renderizarTarefas();
};

window.iniciarEdicao = function (indice) {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    const item = tarefas[indice];

    inputIndice.value = indice;
    inputNome.value = item.nome;
    inputDescricao.value = item.descricao === "Sem descrição" ? "" : item.descricao;
    inputPrazo.value = item.prazo;

    btnSubmit.textContent = "Salvar Alterações";
    btnSecundario.textContent = "Cancelar Edição";
    btnSecundario.classList.add("cancelar");
    inputNome.focus();
};

function resetarModoEdicao() {
    inputIndice.value = "-1";
    btnSubmit.textContent = "Cadastrar Tarefa";
    btnSecundario.textContent = "Limpar Tudo";
    btnSecundario.classList.remove("cancelar");
}

/* 6. BOTÃO SECUNDÁRIO (LIMPAR TUDO OU CANCELAR EDIÇÃO) */
btnSecundario.addEventListener("click", function () {
    const editando = parseInt(inputIndice.value) !== -1;

    if (editando) {
        form.reset();
        resetarModoEdicao();
    } else {
        localStorage.removeItem("tarefas");
        renderizarTarefas();
    }
});

/* 7. CARREGAMENTO INICIAL */
renderizarTarefas();