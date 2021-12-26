console.log("connecté !");

// Le formulaire
const form = document.getElementById("form");
// console.log(form);
// Les champs -input text et input date
const pays = document.getElementById("pays");
const start = document.getElementById("start");
const end = document.getElementById("end");
const listeResultats = document.querySelector('.liste-resultats');
// console.log(listeResultats);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Formulaire validé");

  // Je stocke les valeurs dans l'objet choix
  const choix = {
    pays: pays.value,
    start: start.value,
    end: end.value,
  };
  // console.log(choix, "choix");

  // Je transforme l'objet
  const choixString = JSON.stringify(choix);
  //   console.log(choixString);

  // Je place l'objet dans le localStorage
  localStorage.setItem("details", choixString);
//   Rafraîchissement de la page
window.location.href = window.location.href;
});

//Stockage des voyages dans un tableau
const voyages = [
    {
        pays : "borabora",
        prix : 1790,
        voyageurs : 4 
    },
    {
        pays : "bahamas",
        prix : 1790,
        voyageurs : 4 
    },
    {
        pays : "bahamas",
        prix : 1490,
        voyageurs : 2 
    },
    {
        pays : "tahiti",
        prix : 1790,
        voyageurs : 4
    }
]
console.log(voyages, "tableau de voyages");

function displayDetails() {
//   console.log("fonction déclenchée");
  // Récupération du stockage local
  const choixObjet = JSON.parse(localStorage.getItem("details"));
//   console.log(choixObjet, "choixObjet");
// Pré-remplir les champs
pays.value = choixObjet.pays;
start.value = choixObjet.start;
end.value = choixObjet.end;
// Filtrer en fonction du pays enregistré
const resultats = voyages.filter((voyage)=>voyage.pays === pays.value);
// console.log(resultats, "resultats");
// Boucle dans le tableau
resultats.forEach(resultat => {
    console.log(resultat, "résultat");
    // Création affichage des résultats
    const item = `
    <div class="item">
    <p class="item-pays">
        ${resultat.pays}
    </p>
    <p>Offre pour ${resultat.voyageurs} personnes</p>
    <p>
        Prix vol inclus ${resultat.prix}€
    </p>
    <button>Go !</button>
</div>
    `
    listeResultats.innerHTML += item;
});
};

displayDetails();
