let logado = localStorage.getItem("logado");
const input = document.getElementById("quest");
let quests = document.querySelector(".quests");
let taskCounter = document.getElementById("task-counter");

let tarefas = JSON.parse(localStorage.getItem("ListArr")) || [];
let tarefasConcluidas = JSON.parse(localStorage.getItem("ListDone")) || [];

function LogOut() {
  localStorage.setItem("logado", "false");
  window.location.href = "../../Loginp/index.html";
}

function Clearx() {
  tarefas = [];
  tarefasConcluidas = [];

  quests.innerHTML = "";

  localStorage.removeItem("ListArr");
  localStorage.removeItem("ListDone");

  atualizarContador();
}

function AddQuest() {
  let works = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let tarefa = input.value;
  tarefa = tarefa.trim();

  if (!tarefa) {
    return;
  }

  tarefas.push(tarefa);
  tarefasConcluidas.push(false);

  works.append(checkbox, tarefa);

  quests.append(works);

  localStorage.setItem("ListArr", JSON.stringify(tarefas));
  localStorage.setItem("ListDone", JSON.stringify(tarefasConcluidas));

  input.value = "";

  atualizarContador();

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      works.classList.add("completed");
    } else {
      works.classList.remove("completed");
    }

    ```
let posicao = tarefas.indexOf(tarefa);

tarefasConcluidas[posicao] = checkbox.checked;

localStorage.setItem(
  "ListDone",
  JSON.stringify(tarefasConcluidas)
);
```;
  });
}

function atualizarContador() {
  taskCounter.innerText = `${tarefas.length} tasks`;
}

for (let tarefa of tarefas) {
  let works = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.checked = tarefasConcluidas[tarefas.indexOf(tarefa)] || false;

  works.append(checkbox, tarefa);

  if (checkbox.checked) {
    works.classList.add("completed");
  }

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      works.classList.add("completed");
    } else {
      works.classList.remove("completed");
    }

    ```
let posicao = tarefas.indexOf(tarefa);

tarefasConcluidas[posicao] = checkbox.checked;

localStorage.setItem(
  "ListDone",
  JSON.stringify(tarefasConcluidas)
);
```;
  });

  quests.append(works);
}

atualizarContador();
