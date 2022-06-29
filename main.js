window.addEventListener("load", function () {
  this.alert("Izrada sajta za tablete i mobilne telefone je u toku.");
});

const quantity = document.querySelectorAll(".quantity");
let amount = document.querySelectorAll(".amount");
let main = document.querySelector(".menu");

const allMeals = [
  {
    name: "Pileća čorba",
    category: "Čorbe",
    price: 300,
    imgUrl: "img/corba1.jpg",
    description: "Piletina, šargarepa, krompir, luk",
  },
  {
    name: "Riblja čorba",
    category: "Čorbe",
    price: 350,
    imgUrl: "img/corba2.jpg",
    description: "Šaran, šargarepa, crni luk, celer",
  },
  {
    name: "Teleća čorba",
    category: "Čorbe",
    price: 350,
    imgUrl: "img/corba3.jpg",
    description: "Teletina, šargarepa, krompir, luk",
  },
  {
    name: "Pohovano belo meso",
    category: "Glavno jelo",
    price: 380,
    imgUrl: "img/pohovana.jpg",
    description: "Pileći file",
  },
  {
    name: "Rolovana piletina",
    category: "Glavno jelo",
    price: 400,
    imgUrl: "img/piletina.jpg",
    description: "Piletina, kačkavalj, šunka",
  },
  {
    name: "Ćufte u paradajz sosu",
    category: "Glavno jelo",
    price: 420,
    imgUrl: "img/cufte.jpg",
    description: "Junetina, paradajz sos, pire",
  },
  {
    name: "Riba na žaru",
    category: "Glavno jelo",
    price: 400,
    imgUrl: "img/riba.jpg",
    description: "Pastrmka, pomfrit",
  },
  {
    name: "Punjene paprike",
    category: "Glavno jelo",
    price: 360,
    imgUrl: "img/punjene-paprike.jpeg",
    description: "Junetina, paprika, sos",
  },
  {
    name: "Karađorđeva snicla",
    category: "Glavno jelo",
    price: 400,
    imgUrl: "img/karadjordjeva-snicla.jpg",
    description: "Šnicla, sos, pomfrit, povrće",
  },
  {
    name: "Bolonjeze",
    category: "Glavno jelo",
    price: 350,
    imgUrl: "img/bolonjeze.jpg",
    description: "Pasta, bolonjeze sos",
  },
  {
    name: "Pohovane tikvice",
    category: "Glavno jelo",
    price: 320,
    imgUrl: "img/pohovane-tikvice.jpg",
    description: "Tikvice, jaja, povrce",
  },
  {
    name: "Krem pasta",
    category: "Glavno jelo",
    price: 400,
    imgUrl: "img/krem-pasta.jpg",
    description: "Pasta, krem sos, zacini",
  },
  {
    name: "Meksicka salata",
    category: "Salate",
    price: 350,
    imgUrl: "img/meksicka.jpg",
    description: "Mix povrća",
  },
  {
    name: "Salata fantazija",
    category: "Salate",
    price: 320,
    imgUrl: "img/salata-fantazija.jpeg",
    description: "Rotkvice, paradajz, krastavac",
  },
  {
    name: "Susam salata",
    category: "Salate",
    price: 350,
    imgUrl: "img/susam-salata.jpg",
    description: "Sir, susam, kiseli krastavac",
  },
  {
    name: "Šopska salata",
    category: "Salate",
    price: 350,
    imgUrl: "img/sopska-salata.jpg",
    description: "Paradajz, luk, tvrdi sir, krastavac",
  },
  {
    name: "Sveža salata",
    category: "Salate",
    price: 300,
    imgUrl: "img/sveza.jpg",
    description: "Paprika, paradajz, krastavac, luk",
  },
  {
    name: "Proteinska salata",
    category: "Salate",
    price: 350,
    imgUrl: "img/proteinska.jpg",
    description: "Jaja, majonez, paradajz, paprika",
  },
  {
    name: "BBQ burger",
    category: "Burgeri",
    price: 400,
    imgUrl: "img/burger1.jpg",
    description: "Junetina, luk, panceta",
  },
  {
    name: "Ljuti burger",
    category: "Burgeri",
    price: 350,
    imgUrl: "img/burger2.jpg",
    description: "Piletina, salata, luk, urnebes",
  },
  {
    name: "Domaći burger",
    category: "Burgeri",
    price: 370,
    imgUrl: "img/burger3.jpg",
    description: "Junetina, paradajz, kačkavalj",
  },
  {
    name: "Klasik burger",
    category: "Burgeri",
    price: 370,
    imgUrl: "img/burger4.jpg",
    description: "Piletina, paradajz, salata",
  },
  {
    name: "Dupli burger",
    category: "Burgeri",
    price: 450,
    imgUrl: "img/dupli-burger.jpg",
    description: "Junetina, kačkavalj, pomfrit",
  },
  {
    name: "Ćureći burger",
    category: "Burgeri",
    price: 390,
    imgUrl: "img/cureci-burger.jpg",
    description: "Ćuretina, pomfrit, paradajz",
  },
  {
    name: "Capricoza",
    category: "Pice",
    price: 350,
    imgUrl: "img/kapricoza.jpg",
    description: "Šunka, kačkavalj, šampinjoni",
  },
  {
    name: "Srpska pica",
    category: "Pice",
    price: 350,
    imgUrl: "img/srpska.jpg",
    description: "Slanina, jaje, kačkavalj",
  },
  {
    name: "Italiana",
    category: "Pice",
    price: 370,
    imgUrl: "img/Italiana.jpg",
    description: "Kulen, kačkavalj, masline",
  },
  {
    name: "Palačinka nutela-plazma",
    category: "Dezerti",
    price: 320,
    imgUrl: "img/palacinke.jpg",
    description: "Nutela, plazma, voćni preliv",
  },
  {
    name: "Čokoladna fantazija",
    category: "Dezerti",
    price: 390,
    imgUrl: "img/cokoladna.jpg",
    description: "Milka, lešnik, plazma",
  },
  {
    name: "Voćna torta",
    category: "Dezerti",
    price: 350,
    imgUrl: "img/vocna.jpg",
    description: "Maline, čokolada, piškote, šlag",
  },
  {
    name: "Voćni kup",
    category: "Dezerti",
    price: 370,
    imgUrl: "img/casa.jpg",
    description: "Jagode, slatka pavlaka, plazma",
  },
  {
    name: "Voćna salata",
    category: "Dezerti",
    price: 350,
    imgUrl: "img/vocna-salata.jpg",
    description: "Mix voća, sladoled vanila",
  },
  {
    name: "Čokoladni sufle",
    category: "Dezerti",
    price: 370,
    imgUrl: "img/sufle.jpg",
    description: "Čokoladni krem, sladoled, voće",
  },
];

let categories = new Set(allMeals.map((meal) => meal.category));

categories.forEach(function (category) {
  let h2 = document.createElement("h2");
  h2.classList.add("section-title");
  h2.innerHTML = `${category}`;
  main.appendChild(h2);

  let sections = document.createElement("section");
  sections.classList.add("section");
  main.appendChild(sections);

  let meals = allMeals.filter((item) => item.category);
  meals.forEach(function (meal) {
    if (h2.textContent == meal.category) {
      let articles = document.createElement("article");
      articles.innerHTML = ` 
        <img src="${meal.imgUrl}" class="image">
        <div class="dish-name">
          <h3>${meal.name}</h3>
          <p>${meal.description}</p>
          <hr>
          <p class="price">${meal.price}</p>
          <input type="number" placeholder="Količina" class="quantity" min=0 required>
        </div>`;
      sections.appendChild(articles);
    }
  });
});

/* ----------CORBE----------- */

// amount pileca corba
const calculate0 = function () {
  amount[0].textContent = quantity[0].value * pricesCorbe.pileca;
};
quantity[0].addEventListener("change", calculate0);

//amount riblja corba
const calculate1 = function () {
  amount[1].textContent = quantity[1].value * pricesCorbe.riblja;
};
quantity[1].addEventListener("change", calculate1);

//amount teleca ccorba
const calculate2 = function () {
  amount[2].textContent = quantity[2].value * pricesCorbe.teleca;
};
quantity[2].addEventListener("change", calculate2);

/* ---------GLAVNA JELA-------- */

//amount pohovano belo meso
const calculate3 = function () {
  amount[3].textContent = quantity[3].value * pricesGlavnaJela.pohovanoBelo;
};
quantity[3].addEventListener("change", calculate3);

//amount rolavana piletina
const calculate4 = function () {
  amount[4].textContent = quantity[4].value * pricesGlavnaJela.rolovanaPiletina;
};
quantity[4].addEventListener("change", calculate4);

//amount cufte u paradajz sosu
const calculate5 = function () {
  amount[5].textContent = quantity[5].value * pricesGlavnaJela.cufte;
};
quantity[5].addEventListener("change", calculate5);

//amount riba na zaru
const calculate6 = function () {
  amount[6].textContent = quantity[6].value * pricesGlavnaJela.riba;
};
quantity[6].addEventListener("change", calculate6);

//amount punjene paprike
const calculate7 = function () {
  amount[7].textContent = quantity[7].value * pricesGlavnaJela.paprike;
};
quantity[7].addEventListener("change", calculate7);

//amount karadjordjeva snicla
const calculate8 = function () {
  amount[8].textContent = quantity[8].value * pricesGlavnaJela.karadjordjeva;
};
quantity[8].addEventListener("change", calculate8);

//amount bolonjeze
const calculate9 = function () {
  amount[9].textContent = quantity[9].value * pricesGlavnaJela.bolonjeze;
};
quantity[9].addEventListener("change", calculate9);

//amount pohovane tikvice
const calculate10 = function () {
  amount[10].textContent =
    quantity[10].value * pricesGlavnaJela.pohovaneTikvice;
};
quantity[10].addEventListener("change", calculate10);

//amount krem pasta
const calculate11 = function () {
  amount[11].textContent = quantity[11].value * pricesGlavnaJela.pasta;
};
quantity[11].addEventListener("change", calculate11);

/* ----------SALATE---------*/

//amount meksicka salata
const calculate12 = function () {
  amount[12].textContent = quantity[12].value * pricesSalate.meksicka;
};
quantity[12].addEventListener("change", calculate12);

//amount salata fantazija
const calculate13 = function () {
  amount[13].textContent = quantity[13].value * pricesSalate.fantazija;
};
quantity[13].addEventListener("change", calculate13);

//amount susam salata
const calculate14 = function () {
  amount[14].textContent = quantity[14].value * pricesSalate.susam;
};
quantity[14].addEventListener("change", calculate14);

//amount sopska salata
const calculate15 = function () {
  amount[15].textContent = quantity[15].value * pricesSalate.sopska;
};
quantity[15].addEventListener("change", calculate15);

//amount sveza salata
const calculate16 = function () {
  amount[16].textContent = quantity[16].value * pricesSalate.sveza;
};
quantity[16].addEventListener("change", calculate16);

//amount proteinska salata
const calculate17 = function () {
  amount[17].textContent = quantity[17].value * pricesSalate.proteinska;
};
quantity[17].addEventListener("change", calculate17);

/* -----------BURGERI-----------*/

//amount bbq burger
const calculate18 = function () {
  amount[18].textContent = quantity[18].value * pricesBurgeri.bbq;
};
quantity[18].addEventListener("change", calculate18);

//amount ljuti burger
const calculate19 = function () {
  amount[19].textContent = quantity[19].value * pricesBurgeri.ljuti;
};
quantity[19].addEventListener("change", calculate19);

//amount domaci burger
const calculate20 = function () {
  amount[20].textContent = quantity[20].value * pricesBurgeri.domaci;
};
quantity[20].addEventListener("change", calculate20);

//amount klasik burger
const calculate21 = function () {
  amount[21].textContent = quantity[21].value * pricesBurgeri.klasik;
};
quantity[21].addEventListener("change", calculate21);

//amount dupli burger
const calculate22 = function () {
  amount[22].textContent = quantity[22].value * pricesBurgeri.dupli;
};
quantity[22].addEventListener("change", calculate22);

//amount cureci burger
const calculate23 = function () {
  amount[23].textContent = quantity[23].value * pricesBurgeri.cureci;
};
quantity[23].addEventListener("change", calculate23);

/* ------------PICE--------------*/

//amount capricosa
const calculate24 = function () {
  amount[24].textContent = quantity[24].value * pricesPice.capricosa;
};
quantity[24].addEventListener("change", calculate24);

//amount srpska pica
const calculate25 = function () {
  amount[25].textContent = quantity[25].value * pricesPice.srpska;
};
quantity[25].addEventListener("change", calculate25);

//amount italiana
const calculate26 = function () {
  amount[26].textContent = quantity[26].value * pricesPice.italiana;
};
quantity[26].addEventListener("change", calculate26);

/* -----------DEZERTI----------*/

//amount palacinka nutela-plazma
const calculate27 = function () {
  amount[27].textContent = quantity[27].value * pricesDezerti.palacinka;
};
quantity[27].addEventListener("change", calculate27);

//amount cokoladna fantazija
const calculate28 = function () {
  amount[28].textContent =
    quantity[28].value * pricesDezerti.cokoladnaFantazija;
};
quantity[28].addEventListener("change", calculate28);

//amount vocna torta
const calculate29 = function () {
  amount[29].textContent = quantity[29].value * pricesDezerti.vocnaTorta;
};
quantity[29].addEventListener("change", calculate29);

//amount vocni kup
const calculate30 = function () {
  amount[30].textContent = quantity[30].value * pricesDezerti.vocniKup;
};
quantity[30].addEventListener("change", calculate30);

//amount vocna salata
const calculate31 = function () {
  amount[31].textContent = quantity[31].value * pricesDezerti.vocnaSalata;
};
quantity[31].addEventListener("change", calculate31);

//amount cokoladni sufle
const calculate32 = function () {
  amount[32].textContent = quantity[32].value * pricesDezerti.sufle;
};
quantity[32].addEventListener("change", calculate32);

/*--------- TOTAL FOR PAYMENT ----------*/

const btnCalculate = document.querySelector(".calculate");
const fieldTotal = document.querySelector(".total");
let sum = 0;

const total = function () {
  for (let a = 0; a < amount.length; a++) {
    sum += Number(amount[a].innerText);
  }
  fieldTotal.textContent = sum;
};
btnCalculate.addEventListener("click", total);

/* FORM VALIDATION */

const btnSubmit = document.querySelector(".btn");
const field = document.querySelectorAll(".field");
let xx;

function validation(e) {
  xx = 1;
  for (let i = 0; i < field.length; i++) {
    if (field[i].value == "") {
      field[i].value = "Ovo polje je obavezno";
      field[i].style.color = "red";
      xx = 0;
    }
    e.preventDefault();
  }
}

btnSubmit.addEventListener("click", validation);

// clear field
function clearField() {
  this.value = "";
  this.style.color = "black";
}

for (let f = 0; f < field.length; f++) {
  field[f].addEventListener("focus", clearField);
}

//successful order
btnSubmit.addEventListener("click", function succesfully() {
  if (xx == 1) {
    alert("Vaša porudžbina je uspešno prihvaćena!");
    window.location.assign("index.html");
  }
});
