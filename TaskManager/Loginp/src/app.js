function login() {
  const checkbox = document.getElementById("check");
  const user = document.getElementById("user");
  const pass = document.getElementById("password");
  let encontrou = false;
  let passwordTyped = pass.value;
  let UserTyped = user.value;
  let CorrectValue = [
    {
      user: "test",
      password: "test",
    },
  ];
  //verifica user
  for (let user of CorrectValue) {
    if (passwordTyped == user.password && UserTyped == user.user) {
      encontrou = true;
      break;
    }
  }

  if (encontrou === true) {
    if (checkbox.checked) {
      localStorage.setItem("logado", "true");
    }
    window.location.href = "../tarefas gerenciador/Main/tarefas.html";
  } else {
    alert("something went wrong!, please try again.");
    return;
  }
}
