const shoes = [
  {
    brand: "New Original",
    model: "Air Max",
    price: "120.00 €",
    img: "assets/Nike_Air_Max_1.png",
  },
  {
    brand: "New Balance",
    model: "408 ML408N",
    price: "80.00 €",
    img: "assets/New_Balance_408_Silver_ML408N_Running_Shoes.jpg",
  },
  {
    brand: "Nike Original",
    model: "Revolution",
    price: "90.00 €",
    img: "assets/Nike_Air_Max_Blue.png",
  },
  {
    brand: "Adidas ",
    model: "Boost Pure Puzzle",
    price: "100.00 €",
    img: "assets/Adidas_ZX_2K_Boost_Pure_Puzzle.jpeg",
  },
  {
    brand: "Adidas Original",
    model: "Campus",
    price: "120.00 €",
    img: "assets/Adidas_Campus.png",
  },
  {
    brand: "New Balance",
    model: "M1906RHA",
    price: "120.00 €",
    img: "assets/New_Balance_1906R_Grey_Black_M1906RHA.jpg",
  },
  {
    brand: "Nike Original",
    model: "Dunk Low",
    price: "100.00 €",
    img: "assets/Nike_Dunk_Low_Retro.png",
  },
  {
    brand: "Adidas Original",
    model: "Gazelle",
    price: "90.00 €",
    img: "assets/Adidas_Ivy_Park.jpeg",
  },
  {
    brand: "Nike Original",
    model: "Air Max SC",
    price: "150.00 €",
    img: "assets/Nike_Air_Max_SC.png",
  },
  {
    brand: "Adidas Original",
    model: "Kaptir 30",
    price: "120.00 €",
    img: "assets/Adidas_Kaptir30.jpeg",
  },
  {
    brand: "Nike Original",
    model: "Air Force",
    price: "130.00 €",
    img: "assets/Nike_Force_Low.png",
  },
  {
    brand: "New Balance",
    model: "Fresh Foam X Move",
    price: "100.00 €",
    img: "assets/New_Balance_Fresh_Foam_X_Move.jpeg",
  },
  {
    brand: "New Balance",
    model: "FuelCell RC Elite",
    price: "150.00 €",
    img: "assets/New_Balance_FuelCell_RC_Elite_White_Neo_Flame.jpg",
  },
  {
    brand: "Nike Original",
    model: "Full Force Low",
    price: "70.00 €",
    img: "assets/Nike_Air_Force.png",
  },
  {
    brand: "Nike Original",
    model: "Air Max SC",
    price: "160.00 €",
    img: "assets/Nike_Air_Max_SC_Black.png",
  },
  {
    brand: "Adidas Original",
    model: "Gazelle",
    price: "140.00 €",
    img: "assets/Adidas_Original_Gazelle.png",
  },
];

//? Creo elementos dentro del header
// Array para la navList de categorías
const menuCategoriesList = [
  {
    text: "Hombre",
    href: "#",
  },
  {
    text: "Mujer",
    href: "#",
  },
  {
    text: "Niño",
    href: "#",
  },
  {
    text: "Ofertas",
    href: "#",
  },
];

//! Paso 1: Seleccionar el elemento header
const header = document.querySelector("header");

//! Paso 2: Creo una imagen con la clase .leftSideMenu que tiene que estar dentro del nav en la parte izquierda
const imgJdLogo = document.createElement("img"); // Asigno y creo la img
imgJdLogo.className = "leftSideMenu"; // le pongo el className
imgJdLogo.src = "assets/JDLogo.jpg";
header.appendChild(imgJdLogo); // Inserto el div dentro del header antes de mi nav

//! Paso 2: Crear el elemento nav
const navCategories = document.createElement("nav");
//! Paso 3: insertar el nav en el header
header.appendChild(navCategories);

//! Paso 4: Crear un ul con la clase .navList
const ulCategoriesList = document.createElement("ul");
ulCategoriesList.className = "categoriesList"; // le pongo un className
navCategories.appendChild(ulCategoriesList); // inserto el ul dentro del nav
//! Paso 5 con un for crear los li's y a (links) del ul navList
for (menuCategoryList of menuCategoriesList) {
  const liCategory = document.createElement("li"); // Creo el li
  liCategory.className = "liCategoryList"; // Le pongo un className
  //! Paso 6: creo e inserto un a href dentro de mis li
  const a = document.createElement("a"); // asigno y creo loa a
  a.href = menuCategoryList.href; // le pongo un href
  a.text = menuCategoryList.text; // le pongo texto cogiéndolo del array de objetos menuCategoriesList

  //! Paso 7: Inserto los a dentro de los li
  liCategory.appendChild(a);
  //!Paso 8: Inserto los li dentro del ul
  ulCategoriesList.appendChild(liCategory);
}

//! Paso extra para media querie max-width 500px
const imgHamburgerMenu = document.createElement("img");
imgHamburgerMenu.className = "hamburgerMenu";
imgHamburgerMenu.src = "assets/hamburgermenu.png";
navCategories.appendChild(imgHamburgerMenu);
//!Paso 9: necesito un div con la clase .rigthSideMenu dentro del nav
const divNavRightSide = document.createElement("div");
divNavRightSide.className = "rightSideMenu";
navCategories.appendChild(divNavRightSide);

//!Paso 10: Creo un array buttonNames que serán los nombres de los botones
const buttonNames = ["Config.", "Cesta", "Perfil"];

//! Paso 11: Con la ayuda de un for vamos a crear 3 botones extrayendo los nombres del array buttonNames
for (let index = 0; index < buttonNames.length; index++) {
  const navButton = document.createElement("button"); // asignar y crear el botón

  navButton.className = `btn-${index + 1}`;

  navButton.textContent = buttonNames[index];

  divNavRightSide.appendChild(navButton);
}

//? Creo elementos dentro del main

//! Paso 1: Selecciono el elemento main
const main = document.querySelector("main");

const section = document.createElement("section");
main.appendChild(section);

//! Paso 2: Creo un div con la clase .shoesCard que se va a repetir tantas veces el array shoes lo requiera
for (let shoe of shoes) {
  const divShoesCard = document.createElement("div"); // Div donde estará toda la info de las bambas
  divShoesCard.className = "shoesCard";

  const imgShoes = document.createElement("img"); // img de las bambas
  imgShoes.className = "shoesPictures";
  imgShoes.src = shoe.img; // Asignar la ruta de la imagen
  imgShoes.alt = `${shoe.brand} ${shoe.model}`; // Texto alternativo para la imagen

  const brandHeading = document.createElement("h2"); // Título con la marca
  brandHeading.textContent = shoe.brand;

  const modelParagraph = document.createElement("p"); // Párrafo con el modelo
  modelParagraph.textContent = `Modelo: ${shoe.model}`;

  const priceParagraph = document.createElement("p"); // Párrafo con el precio
  priceParagraph.textContent = `Precio: ${shoe.price}`;

  const detailsDiv = document.createElement("div"); // Div para agrupar modelo y precio
  detailsDiv.className = "details";
  detailsDiv.appendChild(modelParagraph);
  detailsDiv.appendChild(priceParagraph);

  const buyButton = document.createElement("button"); // Botón de compra
  buyButton.textContent = "Comprar";
  buyButton.className = "buy-btn";

  // Construimos la tarjeta añadiendo los elementos en orden
  divShoesCard.appendChild(imgShoes); // Añadir imagen primero
  divShoesCard.appendChild(brandHeading); // Añadir marca
  divShoesCard.appendChild(detailsDiv); // Añadir detalles (modelo y precio)
  divShoesCard.appendChild(buyButton); // Añadir botón de compra

  // Añadimos el divShoesCard a la sección
  section.appendChild(divShoesCard);
}
