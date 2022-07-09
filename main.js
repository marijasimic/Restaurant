const main = document.querySelector(".menu");
const typeOfMeal = document.querySelectorAll(".type-of-meal");

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
    category: "Glavna jela",
    price: 380,
    imgUrl: "img/pohovana.jpg",
    description: "Pileći file",
  },
  {
    name: "Rolovana piletina",
    category: "Glavna jela",
    price: 400,
    imgUrl: "img/piletina.jpg",
    description: "Piletina, kačkavalj, šunka",
  },
  {
    name: "Ćufte u paradajz sosu",
    category: "Glavna jela",
    price: 420,
    imgUrl: "img/cufte.jpg",
    description: "Junetina, paradajz sos, pire",
  },
  {
    name: "Riba na žaru",
    category: "Glavna jela",
    price: 400,
    imgUrl: "img/riba.jpg",
    description: "Pastrmka, pomfrit",
  },
  {
    name: "Punjene paprike",
    category: "Glavna jela",
    price: 360,
    imgUrl: "img/punjene-paprike.jpeg",
    description: "Junetina, paprika, sos",
  },
  {
    name: "Karađorđeva snicla",
    category: "Glavna jela",
    price: 400,
    imgUrl: "img/karadjordjeva-snicla.jpg",
    description: "Šnicla, sos, pomfrit, povrće",
  },
  {
    name: "Bolonjeze",
    category: "Glavna jela",
    price: 350,
    imgUrl: "img/bolonjeze.jpg",
    description: "Pasta, bolonjeze sos",
  },
  {
    name: "Pohovane tikvice",
    category: "Glavna jela",
    price: 320,
    imgUrl: "img/pohovane-tikvice.jpg",
    description: "Tikvice, jaja, povrce",
  },
  {
    name: "Krem pasta",
    category: "Glavna jela",
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

/* --------CREATING HEADER LIST-------- */

const createList = categories.forEach(function (categ) {
  const li = document.createElement("li");
  li.classList.add("type-of-meal");
  const headerList = document.querySelector(".header-list");
  headerList.appendChild(li);

  const anchor = document.createElement("a");
  anchor.innerHTML = `${categ}`;
  anchor.href = `${"#" + categ.replace(" ", "-").toLowerCase()}`;
  li.appendChild(anchor);
});

/*---------- CREATING SECTIONS AND ARTICLES-------*/

const createSections = categories.forEach(function (category) {
  // creating section title
  const h2 = document.createElement("h2");
  h2.classList.add("section-title");
  h2.innerHTML = `${category}`;
  h2.id = `${category.replace(" ", "-").toLowerCase()}`;
  main.appendChild(h2);

  // creating sections
  const sections = document.createElement("section");
  sections.classList.add("section");
  main.appendChild(sections);

  let meals = allMeals.filter((item) => item.category);

  // creating articles
  meals.forEach(function (meal) {
    if (h2.textContent == meal.category) {
      const articles = document.createElement("article");
      articles.innerHTML = ` 
         <img src="${meal.imgUrl}" class="image">
         <div class="dish-name">
            <h3 class='meal-name'>${meal.name}</h3>
            <p>${meal.description}</p>
            <hr>
            <p class="price">${meal.price}</p>
            <input type="number" placeholder="Količina" class="quantity" min=0 required>
          </div>`;
      sections.appendChild(articles);
    }
  });
});

/*------------- CALCULATE PRICE----------- */

const billLines = document.querySelectorAll(".meal-name-bill");
const articles = document.querySelectorAll("article");

articles.forEach((article) =>
  article.addEventListener("change", calculatePrice)
);

function calculatePrice(e) {
  const input = e.target;
  const quantity = input.value;
  const price = input.previousElementSibling.textContent;
  const mealName = input.parentElement.firstElementChild.textContent;

  billLines.forEach(function (line) {
    const billLine = line;
    const mealNameBill = billLine.textContent;

    if (mealNameBill == mealName) {
      billLine.nextElementSibling.textContent = price * quantity;
    }
  });
}

/*--------- TOTAL FOR PAYMENT ----------*/

const btnCalculate = document.querySelector(".calculate");
const total = document.querySelector(".total");
const amount = document.querySelectorAll(".amount");
let sum = 0;

const totalPrice = function () {
  for (let a = 0; a < amount.length; a++) {
    sum += Number(amount[a].innerText);
  }
  total.textContent = `${sum + " din"}`;
};
btnCalculate.addEventListener("click", totalPrice);

/*-------- FORM VALIDATION -------- */

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
