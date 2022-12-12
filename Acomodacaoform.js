const saveModification = document.getElementById("salvar-alteracoes");

const getLocalStorage = () =>
  JSON.parse(sessionStorage.getItem("escolha-quarto"));

const setSessionStorage = (dbProvider) => {
  localStorage.setItem("escolha-quarto", JSON.stringify(dbProvider));
};

const readReview = () => getLocalStorage();

const updateProvider = (provider) => {
  let dbProvider = readReview();
  dbProvider = provider;
  setSessionStorage(dbProvider);
};

const getInfoClient = () => {
  const dbProvider = readReview();
  fillFields(dbProvider);
};

const fillFields = (provider) => {
  document.querySelector('input[type="radio"]:checked').value = provider.quarto;
  document.getElementById("startDate").value = provider.entrada;
  document.getElementById("endDate").value = provider.entrada;
};

saveModification.addEventListener("click", (e) => {
  e.preventDefault();

  const provider = {
    quarto: document.querySelector('input[type="radio"]:checked').value,
    entrada: document.getElementById("startDate").value,
    saida: document.getElementById("endDate").value,
  };

  updateProvider([provider]);
  window.location.href = "../ReviseDados/ReviseDados.html";
});
getInfoClient();
