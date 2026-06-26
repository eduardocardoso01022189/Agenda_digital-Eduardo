console.log("Aplicativo iniciado!");

function adicionarTarefa() {

    let input = document.getElementById("inputTarefa");
    let tarefa = input.value.trim();

    if (tarefa === "") {
        alert("Qual matéria de hoje? Me fala aí!");
        return;
    }

    let lista = document.getElementById("listaTarefas");

    let item = document.createElement("li");

    item.textContent = tarefa;

    item.addEventListener("click", function () {

        if (item.style.textDecoration === "line-through") {

            item.style.textDecoration = "none";
            item.style.opacity = "1";

        } else {

            item.style.textDecoration = "line-through";
            item.style.opacity = "0.6";

        }

    });

    lista.appendChild(item);

    let contador = document.getElementById("contador");
    contador.textContent = lista.children.length;

    input.value = "";
    input.focus();
}

function mostrarTela(tela) {

    document.getElementById("inicio").style.display = "none";
    document.getElementById("tarefas").style.display = "none";
    document.getElementById("config").style.display = "none";

    document.getElementById(tela).style.display = "block";
}

function alterarTema() {

    let tema = document.getElementById("tema").value;

    if (tema === "escuro") {

        document.body.classList.add("dark-mode");

    } else {

        document.body.classList.remove("dark-mode");

    }

}

window.onload = function () {

    mostrarTela("inicio");

};