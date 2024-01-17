alert("CV en cours de construction");
document.getElementById("formation").addEventListener("click", handleDisplayF);

function handleDisplayF() {
  document.getElementById("formation--display").classList.toggle("display");
}

document.getElementById("experience").addEventListener("click", handleDisplayE);

function handleDisplayE() {
  document.getElementById("experience--display").classList.toggle("display");
}
document.getElementById("competence").addEventListener("click", handleDisplayC);

function handleDisplayC() {
  document.getElementById("competence--display").classList.toggle("display");
}
