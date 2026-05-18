function adicionartarefa() {
    const tarefa = document.getElementById("tarefa")
    let valortarefa = tarefa.value

    if (valortarefa.trim() === "") return; 

    let list = document.createElement("li")
    list.innerText = valortarefa

    let ul = document.getElementById("ul")
    ul.appendChild(list)

    tarefa.value = "" 
}

function limparlista() {
    let ul = document.getElementById("ul")
    ul.innerHTML = ""
}

function limparinput() {
    let input = document.getElementById("tarefa")
    input.value = "" 
}

document.getElementById("tarefa").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionartarefa()
    }
})