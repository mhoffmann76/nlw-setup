const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");
button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert(" O dia atual, já está cadastrado!!⛔️ ");
    return;
  }
  alert("Dia Adicionado com sucesso ✅️");
  nlwSetup.addDay(today);
}

function save() {alert("Dia Adicionado com sucesso ✅️");
  window.localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};
nlwSetup.setData(data);
nlwSetup.load();
