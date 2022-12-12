const saveModification = document.getElementById("publicar");

const getLocalStorage = () =>
  JSON.parse(sessionStorage.getItem("saveComentario"));

const setSessionStorage = (dbProvider) => {
  localStorage.setItem("saveComentario", JSON.stringify(dbProvider));
};

const readReview = () => getLocalStorage();

const updateProvider = (provider) => {
  let dbProvider = readReview();
  dbProvider = provider;
  setSessionStorage(dbProvider);
  window.location.href = "../ReviseDados/AvaliacaoPublicacao.html";
};

const getInfoClient = () => {
  const dbProvider = readReview();
  fillFields(dbProvider);
};

const fillFields = (provider) => {
  // if (provider) {
  document.getElementById("comentario").value = provider.comentario;
  // }
};

var items = [];

function guardarNumeros() {
  boxvalue = { comentario: document.getElementById("comentario").value };
  if (boxvalue) {
    items.push(boxvalue);
    updateProvider(items);
    return items;
  }
  return false; // stop submission
}

saveModification.addEventListener("click", (e) => {
  e.preventDefault();
  guardarNumeros();
});
getInfoClient();
