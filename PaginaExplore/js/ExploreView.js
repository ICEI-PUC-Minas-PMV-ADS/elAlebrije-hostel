const redirectPage = document.getElementById("redirecionar");

const getLocalStorage = () => JSON.parse(localStorage.getItem("exploreView"));

const setSessionStorage = (dbProvider) => {
  localStorage.setItem("exploreView", JSON.stringify(dbProvider));
};

const readReview = () => getLocalStorage();

const updateProvider = () => {
  let dbProvider = readReview();
  const data = [
    {
      id: 1,
      img: "./assets/img/explore/veu-noiva.svg",
      nome: "Cachoeira véu de Noiva",
      descricao:
        "Excelente lugar para visitar! É uma ótima opção para as pessoas que gostam de natureza e liberdade... Cachoeira com um bela queda d'agua.",
      historia:
        "Formada pelas águas do Córrego Coxipozinho, a cachoeira de 86 metros de altura é cercada por paredão de arenito num vale em forma de ferradura. Nele podem ser encontrados ninhos de araras vermelhas, que voam pelo vale e emocionam os turistas. Apesar dos trechos em declive, também a falta de sombra é a maior dificuldade do trajeto pois o trecho é a maior parte em área de campo aberto.",
      imagens: [
        "./assets/img/explore/veu-noiva.svg",
        "./assets/img/explore/veu.svg",
        "./assets/img/explore/cachoeira-veu-da-noiva.svg",
      ],
      tipo: "Cachoeiras",
    },
    {
      id: 2,
      img: "./assets/img/explore/santuário-borboletas.svg",
      nome: "santuário de Borboletas-monarca",
      descricao:
        "Todos os anos, borboletas monarcas migram até 3.000 milhas do Canadá para o México. Veja o fenômeno com seus próprios olhos em uma excursão de um dia a um santuário de borboletas.",
      historia:
        "é um Patrimônio Mundial que contém a maioria dos locais de inverno da população oriental da borboleta monarca . A reserva está localizada na ecorregião de florestas de pinheiros e carvalhos do Cinturão Vulcânico Transmexicano, na fronteira de Michoacán com o Estado do México , a 100 km (62 milhas), a noroeste da Cidade do México. Milhões de borboletas chegam à reserva anualmente. As borboletas habitam apenas uma fração dos 56.000 hectares da reserva de outubro a março. A missão da biosfera é proteger as espécies de borboletas e seu habitat.",
      imagens: [
        "./assets/img/explore/santuário-borboletas.svg",
        "./assets/img/explore/borboletas-monarcas.svg",
        "./assets/img/explore/santuario-mariposas-monarca.svg",
      ],
      tipo: "Natureza e vida selvagem",
    },
    {
      id: 3,
      img: "./assets/img/explore/image18.svg",
      nome: "Mirante La peña",
      descricao:
        "Se você deseja se aventurar e sair da rotina, Mirador La Peña é para você! Escale essa imensa montanha e aprecie uma das melhores vistas de toda a região.",
      historia:
        "La Peña é um belo mirante do Valle de Bravo cuja origem remonta à época pré-hispânica, pois acredita-se que os antigos habitantes vinham a este local para realizar rituais terapêuticos nos temazcales encontrados na rocha. Daqui também vem o antigo nome da cidade: San Francisco del Valle de Temascaltepeque. O percurso é adequado para todas as idades, no entanto, há que ter em conta que as encostas são longas e rochosas, o que exige uma certa condição física e habilidade. Recomendamos que você use roupas e calçados confortáveis, bebidas para se hidratar e itens de proteção solar. Se pretende praticar atividades como o rapel e a escalada, pode optar por uma das várias agências de turismo locais que lhe podem oferecer estas experiências.",
      imagens: [
        "./assets/img/explore/image18.svg",
        "./assets/img/explore/mirante.svg",
        "./assets/img/explore/mirante-la-pena.svg",
      ],
      tipo: "Mirantes",
    },
    {
      id: 4,
      img: "./assets/img/explore/Rectangle60.svg",
      nome: "Centro de Espiritualidad Carmel Maranatha",
      descricao:
        "A casa de Carmel Maranatha é uma casa de oração ou de exercícios espirituais, desde 1985. O seu objetivo é oferecer um espaço para favorecer o encontro pessoal e com Deus, através do silêncio, da oração e dos retratos espirituais",
      historia:
        "Carmel Maranatha é uma Casa de Oração construída na década de 70 por monges carmelitas. O nome Maranatha significa 'Vem Senhor'. O centro, considerado espiritual e de retiro, convida à meditação e ao conhecimento pessoal através do silêncio. Seu interior é ricamente decorado por obras artísticas como pinturas e esculturas.Retiros privados são realizados com frequência, mas as portas estão abertas diariamente ao público em geral.",
      imagens: [
        "./assets/img/explore/Rectangle60.svg",
        "./assets/img/explore/carmel.svg",
        "./assets/img/explore/Carmel-Maranatha.svg",
      ],
      tipo: "Locais religiosos",
    },
    {
      id: 5,
      img: "./assets/img/explore/Rectangle59.svg",
      nome: "Great Stupa Valle de Bravo",
      descricao:
        "A casa Tibet, localizada na Cidade do México, é uma das principais organizações budistas do país. Devido à localização do Valle de Bravo como um dos Pueblos Mágicos mais próximos da capital, tornou-se um centro de espiritualidade para os habitantes da megalópole.",
      historia:
        "Valle de Bravo é um lugar mágico a duas horas da Cidade do México. Tem sido o favorito de muitos cidadãos da Cidade do México para passar os fins de semana em paz e tranquilidade na floresta, no lago e no colorido centro da vila, enquanto comem nos deliciosos restaurantes e respiram o ar puro deste local. Além de ter uma infinidade de atividades como ciclismo, moto, cavalgadas, caminhadas, fogueiras sob a luz da lua e das estrelas, o Valle de Bravo é um lugar onde acontecem muitas atividades para pessoas de todas as idades: desde cursos de verão até retiros de ioga e meditação.",
      imagens: [
        "./assets/img/explore/Rectangle59.svg",
        "./assets/img/explore/great-stupa.svg",
        "./assets/img/explore/great-stupa-bon.svg",
      ],
      tipo: "Locais religiosos, Pontos de interesse",
    },
    {
      id: 6,
      img: "./assets/img/explore/image19.svg",
      nome: "Paroquia de São Francisco de Assis",
      descricao:
        "Dedicada ao padroeiro São Francisco de Asís, a Paróquia de São Francisco de Asís abriga obras escultóricas do século XVII. É o templo mais alto do Estado do México. Sua construção começou em 1880 e foi concluída mais de um século depois, em 1994.",
      historia:
        "A Catedral Basílica de São Francisco de Assis é uma igreja do século XIX, em estilo do renascimento românico. Seu estilo contrasta com as estruturas de tijolo de barro circunstantes, que datam do período anterior. Suas principais características são seus arcos, frontão, rosácea e torres, cada uma de um lado do centro da fachada. Dentro da igreja, observe seus vitrais coloridos. Admire o design com influência francesa da catedral, construída com blocos de calcário amarelo.",
      imagens: [
        "./assets/img/explore/image19.svg",
        "./assets/img/explore/sao-francisco.svg",
        "./assets/img/explore/paroquia.svg",
      ],
      tipo: "Igrejas e catedrais",
    },
  ];
  dbProvider = data;
  setSessionStorage(dbProvider);
};

console.log(redirectPage);
redirectPage.addEventListener("click", (e) => {
  console.log(getLocalStorage());
  // window.location.href = ./ExploreView.html?id=
  // alert("Dados salvos com sucesso!");
});

getLocalStorage();
