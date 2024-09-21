// Array de productos, que son los que se pintarán en el navegador
const shoes = [
  {
    brand: "Nike Original",
    model: "Air Max",
    price: "120.00 €",
    gender: "Unisex",
    img: "assets/Nike_Air_Max_1.png",
  },
  {
    brand: "New Balance",
    model: "408 ML408N",
    price: "80.00 €",
    gender: "Hombre",
    img: "assets/New_Balance_408_Silver_ML408N_Running_Shoes.jpg",
  },
  {
    brand: "Nike Original",
    model: "Air Max FD9082-001",
    price: "150.00 €",
    gender: "Hombre",
    img: "assets/Nike_Air_Max_2.png",
  },
  {
    brand: "Adidas ",
    model: "Boost Pure Puzzle",
    price: "100.00 €",
    gender: "Mujer",
    img: "assets/Adidas_ZX_2K_Boost_Pure_Puzzle.jpeg",
  },
  {
    brand: "Adidas Original",
    model: "Campus",
    price: "120.00 €",
    gender: "Unisex",
    img: "assets/Adidas_Campus.png",
  },
  {
    brand: "New Balance",
    model: "M1906RHA",
    price: "120.00 €",
    gender: "Hombre",
    img: "assets/New_Balance_1906R_Grey_Black_M1906RHA.jpg",
  },
  {
    brand: "Nike Original",
    model: "Dunk Low",
    price: "100.00 €",
    gender: "Unisex",
    img: "assets/Nike_Dunk_Low_Retro.png",
  },
  {
    brand: "Adidas Original",
    model: "Gazelle",
    price: "90.00 €",
    gender: "Unisex",
    img: "assets/Adidas_Ivy_Park.jpeg",
  },
  {
    brand: "Nike Original",
    model: "Air Max SC",
    price: "150.00 €",
    gender: "Hombre",
    img: "assets/Nike_Air_Max_SC.png",
  },
  {
    brand: "Adidas Original",
    model: "Kaptir 30",
    price: "120.00 €",
    gender: "Unisex",
    img: "assets/Adidas_Kaptir30.jpeg",
  },
  {
    brand: "Nike Original",
    model: "Air Force",
    price: "130.00 €",
    gender: "Unisex",
    img: "assets/Nike_Force_Low.png",
  },
  {
    brand: "New Balance",
    model: "Fresh Foam X Move",
    price: "100.00 €",
    gender: "Hombre",
    img: "assets/New_Balance_Fresh_Foam_X_Move.jpeg",
  },
  {
    brand: "New Balance",
    model: "FuelCell RC Elite",
    price: "150.00 €",
    gender: "Mujer",
    img: "assets/New_Balance_FuelCell_RC_Elite_White_Neo_Flame.jpg",
  },
  {
    brand: "Nike Original",
    model: "Full Force Low",
    price: "70.00 €",
    gender: "Unisex",
    img: "assets/Nike_Air_Force.png",
  },
  {
    brand: "Nike Original",
    model: "Air Max SC",
    price: "160.00 €",
    gender: "Hombre",
    img: "assets/Nike_Air_Max_SC_Black.png",
  },
  {
    brand: "Adidas Original",
    model: "Gazelle",
    price: "140.00 €",
    gender: "Unisex",
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
const buttonNames = ["⚙️", "🧺", "Perfil"];

//! Paso 11: Con la ayuda de un for vamos a crear 3 botones extrayendo los nombres del array buttonNames
for (let index = 0; index < buttonNames.length; index++) {
  const navButton = document.createElement("button"); // asignar y crear el botón

  navButton.className = `btn-${index + 1}`;

  navButton.textContent = buttonNames[index];

  divNavRightSide.appendChild(navButton);
}

//! Creo elementos dentro del main

//! Paso 1: Selecciono el elemento main
const main = document.querySelector("main");

//Div para la imagen después del header
const divCoverImage = document.createElement("div");
divCoverImage.className = "divCoverImage";
main.appendChild(divCoverImage);

//Imagen de JD sports
const imgCover = document.createElement("img");
imgCover.className = "imgCover";
imgCover.src = "assets/JD_cover.jpeg";
divCoverImage.appendChild(imgCover);

// Crear el divFilterButtons justo después de divCoverImage
const divFilterButtons = document.createElement("div");
divFilterButtons.className = "divFilterButtons";
divCoverImage.insertAdjacentElement("afterend", divFilterButtons);

// Array de objetos para los botones de filtros
const filters = [
  { name: "Marca", options: ["Nike", "New Balance", "Adidas"] },
  { name: "Género", options: ["Hombre", "Mujer", "Unisex"] },
  { name: "Precio", options: ["80-100€", "110-120€", "130-140€", "150-160€"] },
];

// Iteramos sobre los filtros para crear botones y menús desplegables
for (const filter of filters) {
  // Crear el container que cubra el botón y el div con el dropdown
  const divDropDownContainer = document.createElement("div");
  divDropDownContainer.className = "dropDownContainer";

  // Crear el botón que al hacer click desplegará el menú
  const filterBtn = document.createElement("button");
  filterBtn.textContent = filter.name;
  filterBtn.classList.add("dropDownBtn");

  // Crear el contenedor del dropdown
  const dropdown = document.createElement("div");
  dropdown.classList.add("dropDownContent");
  dropdown.setAttribute("data-filter", filter.name.toLowerCase()); // Agregar data-filter con el nombre del filtro en minúsculas

  // Añadir las opciones al dropdown
  for (const option of filter.options) {
    const optionElement = document.createElement("a");
    optionElement.textContent = option;
    optionElement.href = "#";
    optionElement.classList.add("filter-option"); // Agregar clase para estilo y selección
    optionElement.setAttribute("data-filter", filter.name.toLowerCase()); // Agregar data-filter para identificar el filtro

    dropdown.appendChild(optionElement);
  }

  // Añadir el botón y el dropdown al container
  divDropDownContainer.appendChild(filterBtn);
  divDropDownContainer.appendChild(dropdown);

  // Añadir el container al div de los filtros
  divFilterButtons.appendChild(divDropDownContainer);
}

// Evento para los dropdowns (fuera del bucle)
const filterBtns = document.querySelectorAll(".dropDownBtn");
const menus = document.querySelectorAll(".dropDownContent");

for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", function () {
    // Cerrar otros dropdowns
    for (let j = 0; j < menus.length; j++) {
      if (j !== i) {
        menus[j].classList.remove("show");
      }
    }
    // Alternar el menú correspondiente
    menus[i].classList.toggle("show");
  });
}

// Crear el botón "Resetear Filtros"
const resetButton = document.createElement("button");
resetButton.textContent = "Resetear Filtros";
resetButton.setAttribute("id", "actionResetBtn");
divFilterButtons.appendChild(resetButton);

// Crear la sección después de los botones de filtro
const section = document.createElement("section");
main.appendChild(section);

//? Paso 2: Creo un div con la clase .shoesCard que se va a repetir tantas veces el array shoes lo requiera
const renderShoes = (data) => {
  if (data.length) {
    for (let element of data) {
      const divShoesCard = document.createElement("div"); // Div donde estará toda la info de las bambas
      divShoesCard.className = "shoesCard";

      const imgShoes = document.createElement("img"); // img de las bambas
      imgShoes.className = "shoesPictures";
      imgShoes.src = element.img; // Asignar la ruta de la imagen
      imgShoes.alt = `${element.brand} ${element.model}`; // Texto alternativo para la imagen

      const brandHeading = document.createElement("h2"); // Título con la marca
      brandHeading.textContent = element.brand;

      const modelParagraph = document.createElement("p"); // Párrafo con el modelo
      modelParagraph.textContent = `Modelo: ${element.model}`;

      const priceParagraph = document.createElement("p"); // Párrafo con el precio
      priceParagraph.textContent = `Precio: ${element.price}`;

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
  } else {
    const message = document.createElement("p");
    message.textContent = "No se han encontrado zapatillas";

    section.appendChild(message);
  }
};

renderShoes(shoes);

//? Funciones para los filtros
//! Objeto para almacenar los valores seleccionados Marca, Género y Precio

let selectedFilters = {
  brand: null,
  gender: null,
  price: null,
};

// Selecciono todos los elementos de opciones de filtro
document.querySelectorAll(".filter-option").forEach((option) => {
  option.addEventListener("click", (event) => {
    const filterName = event.target.getAttribute("data-filter");
    const filterValue = event.target.textContent.trim(); // trim() para eliminar espacios innecesarios

    // Actualizo los filtros seleccionados
    if (filterName === "marca") {
      selectedFilters.brand = filterValue;
    } else if (filterName === "género") {
      selectedFilters.gender = filterValue;
    } else if (filterName === "precio") {
      // Convertimos el rango de precios en un formato numérico
      const priceRange = filterValue.split("-");
      selectedFilters.price = priceRange
        .map((price) => price.replace("€", "").trim())
        .join("-");
    }

    // Llamamos a la función para filtrar y renderizar los productos
    filterAndRenderShoes();

    // Cierra el dropdown después de seleccionar una opción
    event.target.closest(".dropDownContent").classList.remove("show");
  });
});

const filterAndRenderShoes = () => {
  const filteredShoes = shoes.filter((shoe) => {
    let brandMatch = selectedFilters.brand
      ? shoe.brand.includes(selectedFilters.brand)
      : true;
    let genderMatch = selectedFilters.gender
      ? shoe.gender === selectedFilters.gender
      : true;
    let priceMatch = true;

    if (selectedFilters.price) {
      const [minPrice, maxPrice] = selectedFilters.price.split("-");
      const shoePrice = parseFloat(shoe.price.replace("€", "").trim());
      priceMatch =
        shoePrice >= parseFloat(minPrice) && shoePrice <= parseFloat(maxPrice);
    }

    return brandMatch && genderMatch && priceMatch;
  });

  section.innerHTML = ""; // Limpiar la sección antes de renderizar
  renderShoes(filteredShoes); // Volver a renderizar los zapatos filtrados
};

document.getElementById("actionResetBtn").addEventListener("click", () => {
  selectedFilters = { brand: null, gender: null, price: null };
  filterAndRenderShoes(); // Renderizar todos los zapatos de nuevo
});

//! Selecciono el elemento footer
const footer = document.querySelector("footer");
const divFooter = document.createElement("div");
divFooter.className = "moreInfo";
footer.appendChild(divFooter);

//? Creo una función para cada título de mis listados del footer
const createTitle = (text) => {
  const h3 = document.createElement("h3");
  h3.textContent = text;
  return h3;
};

//? Creo una función para crear los div con la class section
const createSection = (titleText, ulElement) => {
  const section = document.createElement("div");
  section.className = "section"; // Clase para la sección
  section.appendChild(createTitle(titleText)); // Agregar el título
  section.appendChild(ulElement); // Agregar el ul
  return section;
};

//! Primer ul Compra con JD
const ulShopInfo = document.createElement("ul");
const jdInfo = [
  {
    text: "Guía de tallas",
    url: "https://www.jdsports.es/customer-service/size-guide/",
  },
  {
    text: "Buscador de Tiendas",
    url: "https://www.jdsports.es/store-locator/all-stores/",
  },
  {
    text: "Descuento por ser estudiante",
    url: "https://www.jdsports.es/page/student-discount/",
  },
  {
    text: "Calendario de lanzamientos",
    url: "https://blog.jdsports.es/calendario-lanzamientos-sneakers/",
  },
  { text: "Inscríbete gratis a JDX", url: "https://www.jdsports.es/page/jdx/" },
  { text: "JD Blog", url: "https://blog.jdsports.es/" },
];

for (let index = 0; index < jdInfo.length; index++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = jdInfo[index].text;
  a.href = jdInfo[index].url;
  li.appendChild(a);
  ulShopInfo.appendChild(li);
}

//! Segundo ul Atención al cliente
const ulCustomerService = document.createElement("ul");
const customerServiceInfo = [
  { text: "Preguntas frecuentes", url: "https://www.jdsports.es/pages/faqs/" },
  {
    text: "Envíos y devoluciones",
    url: "https://www.jdsports.es/page/delivery-returns/",
  },
  {
    text: "Seguimiento de envío",
    url: "https://www.jdsports.es/track-my-order/",
  },
  {
    text: "contacto",
    url: "https://www.jdsports.es/customer-service/contact/",
  },
];

for (let index = 0; index < customerServiceInfo.length; index++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = customerServiceInfo[index].text;
  a.href = customerServiceInfo[index].url;
  li.appendChild(a);
  ulCustomerService.appendChild(li);
}

//! Tercer ul para aviso legal
const ulLegalAdvice = document.createElement("ul");
const legalAdviceInfo = [
  {
    text: "Términos y condiciones",
    url: "https://www.jdsports.es/customer-service/terms/",
  },
  {
    text: "Promociones y condiciones",
    url: "https://www.jdsports.es/page/terminos-condiciones-promociones/",
  },
  {
    text: "Política de privacidad",
    url: "https://www.jdsports.es/customer-service/privacy/",
  },
  {
    text: "Política de Cookies",
    url: "https://www.jdsports.es/customer-service/cookies/",
  },
  {
    text: "Resolución de litigos en línea",
    url: "https://www.jdsports.es/customer-service/ue-platform/",
  },
  {
    text: "Sistema interno de información del grupo JD - Whistleblowing",
    url: "https://www.jdsports.es/customer-service/canal-sistema-interno-informacion-whistleblowing/",
  },
];

for (let index = 0; index < legalAdviceInfo.length; index++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = legalAdviceInfo[index].text;
  a.href = legalAdviceInfo[index].url;
  li.appendChild(a);
  ulLegalAdvice.appendChild(li);
}

//! Agrego los div.section con los títulos y los ul al div del footer
divFooter.appendChild(createSection("Compra con JD", ulShopInfo));
divFooter.appendChild(createSection("Atención al cliente", ulCustomerService));
divFooter.appendChild(createSection("Aviso Legal", ulLegalAdvice));
