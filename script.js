// Não mexer com o Exibir senha (Deu trabalho pra fazer funcionar)

const checkbox = document.getElementById("exibir_senha");
const campoSenha = document.getElementById("senha");

checkbox.addEventListener("change", () => {
  campoSenha.type = checkbox.checked ? "text" : "password";
});

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");
  const emailError = document.getElementById("emailError");
  const senhaError = document.getElementById("senhaError");

  const email = emailInput.value.trim();
  const senha = senhaInput.value.trim();

  emailInput.classList.remove("error");
  senhaInput.classList.remove("error");
  emailError.textContent = "";
  senhaError.textContent = "";

  let camposValidos = true;

  if (email === "") {
    emailInput.classList.add("error");
    emailError.textContent = "O email é obrigatório.";
    camposValidos = false;
  }
  if (senha === "") {
    senhaInput.classList.add("error");
    senhaError.textContent = "A senha é obrigatória.";
    camposValidos = false;
  }

  if (!camposValidos) return;

  if (email === "senai@gmail.com" && senha === "senai") {
    window.open("home.html", "_blank");
  } else {
    emailInput.classList.add("error");
    senhaInput.classList.add("error");
    senhaError.textContent = "Credenciais incorretas.";
  }
});

// Estudar melhor eventos e validação de formulário
