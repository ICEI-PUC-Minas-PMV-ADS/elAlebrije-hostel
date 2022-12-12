//Checando teste e-mail
const email = document.querySelector(".email");
const entrar = document.getElementById("entrar");

function checkInputs() {
  const email = email.value;

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }
}

entrar.addEventListener("click", (e) => {
  e.preventDefault();

  const senha = document.getElementById("password").value;
  const emailV = document.getElementById("email").value;

  if (emailV !== null && senha !== "") {
    window.location.href = "";
  } else {
    alert("Preencha todos os campos obrigatórios");
  }
});

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
//ativando a função quando houver alterção no documento
window.location.href =“../index.html”
salvarData()
