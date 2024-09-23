//! Comentarios de creación de elementos para el DOM
//? Comentarios con funciones
// Comentarios para explicar con más detalles qué hace un bucle, condicional, métodos, etc.

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

//! Paso 3: Crear el elemento nav
const navCategories = document.createElement("nav");
//! Paso 4: insertar el nav en el header
header.appendChild(navCategories);

//! Paso 5: Crear un ul con la clase .navList
const ulCategoriesList = document.createElement("ul");
ulCategoriesList.className = "categoriesList"; // le pongo un className
navCategories.appendChild(ulCategoriesList); // inserto el ul dentro del nav
//! Paso 6 con un for crear los li's y a (links) del ul navList
for (const menuCategoryList of menuCategoriesList) {
  const liCategory = document.createElement("li"); // Creo el li
  liCategory.className = "liCategoryList"; // Le pongo un className
  //! Paso 7: creo e inserto un a href dentro de mis li
  const a = document.createElement("a"); // asigno y creo loa a
  a.href = menuCategoryList.href; // le pongo un href
  a.text = menuCategoryList.text; // le pongo texto cogiéndolo del array de objetos menuCategoriesList

  //! Paso 8: Inserto los a dentro de los li
  liCategory.appendChild(a);
  //!Paso 9: Inserto los li dentro del ul
  ulCategoriesList.appendChild(liCategory);
}

//! Paso extra para media querie max-width 500px
const imgHamburgerMenu = document.createElement("img");
imgHamburgerMenu.className = "hamburgerMenu";
imgHamburgerMenu.src = "assets/hamburgermenu.png";
navCategories.appendChild(imgHamburgerMenu);
//!Paso 10: necesito un div con la clase .rigthSideMenu dentro del nav
const divNavRightSide = document.createElement("div");
divNavRightSide.className = "rightSideMenu";
navCategories.appendChild(divNavRightSide);

//!Paso 11: Creo un array buttonNames que serán los nombres de los botones
const buttonNames = ["⚙️", "🧺", "Perfil"];

//! Paso 12: Con la ayuda de un for creo 3 botones extrayendo los nombres del array buttonNames
for (let index = 0; index < buttonNames.length; index++) {
  const navButton = document.createElement("button"); // asignar y crear el botón

  navButton.className = `btn-${index + 1}`;

  navButton.textContent = buttonNames[index];

  divNavRightSide.appendChild(navButton);
}

//! Aquí empiezan los elementos del main

//! Paso 1: Selecciono el elemento main para crear los elementos que necesite
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
for (let filter of filters) {
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
  dropdown.setAttribute("data-filter", filter.name.toLowerCase()); // Agregar data-filter con el nombre del filtro en minúsculas sacando los datos del array filters

  // Añadir las opciones al dropdown
  for (const option of filter.options) {
    const optionElement = document.createElement("a");
    optionElement.textContent = option;
    optionElement.href = "#";
    optionElement.classList.add("filter-option"); // Agregar clase para estilo y selección
    optionElement.setAttribute("data-filter", filter.name.toLowerCase()); // Agregar data-filter para identificar el filtro

    dropdown.appendChild(optionElement); // Insertar el tag a al div con la variable asignada dropdown (.dropDownContent)
  }

  // Añadir el botón y el dropdown al container (.dropDownContainer) que desplegará las opciones del array filters
  divDropDownContainer.appendChild(filterBtn);
  divDropDownContainer.appendChild(dropdown);

  // Añadir el container al div de los filtros
  divFilterButtons.appendChild(divDropDownContainer);
}

// Evento para los dropdowns (fuera del bucle).  primero el botón y luego el menú desplegable
const filterBtns = document.querySelectorAll(".dropDownBtn");
//Selecciono todos los elementos con la clase .dropDownBtn y los almaceno en una variable llamada filterBtns
const menus = document.querySelectorAll(".dropDownContent");
// Selecciono todos los elementos con la clase .dropDownContent, que son los menús desplegables asociados con los botones y los almaceno en una variable llamada menu

for (let index = 0; index < filterBtns.length; index++) {
  // En este bucle for recorre todos los botones en filterBtns. El bucle comienza en index = 0; y se ejecuta hasta que index sea igual al número de botones.
  filterBtns[index].addEventListener("click", function () {
    // Añado un event listener para cada botón en la lista filterBtns. Cuando el botón en la posición index es clicado, se ejecuta la función anónima
    for (let indexJ = 0; indexJ < menus.length; indexJ++) {
      // Inicio otro ciclo for anidado para recorrer todos los menús en la lista menus con la variable indexJ
      if (indexJ !== index) {
        //Si indexJ no es igual a index del botón clicado (es decir, si el menú no corresponde al botón clickado),
        menus[indexJ].classList.remove("show");
        // se elimina la clase show de ese menú. Esto asegura que sólo se muestre el menú relacionado con el botón clicado
      }
    }
    // Alternar el menú correspondiente
    menus[index].classList.toggle("show");
    // Añade o elimina (alterna) la clase show al menú en la posición index (el menú asociado al botón clicado). Si el menú ya está abierto, lo cerrará; si está cerrado, lo abrirá.
    //Abre o cierra el menú correspondiente al botón clicado
  });
}

// Crear el botón "Resetear Filtros"
const resetButton = document.createElement("button");
resetButton.textContent = "Resetear Filtros";
resetButton.setAttribute("id", "actionResetBtn");
divFilterButtons.appendChild(resetButton); // Inserto el botón Resetear Filtros en el divFilterButtons

// Crear la sección después de los botones de filtro
const section = document.createElement("section");
main.appendChild(section); // Inserto la section en el main

//? Paso 2: Creo la función renderShoesCard para crear los elementos de la "card" de información de los zapatos, esta función en sí solamente creará 1, más adelante crearé un bucle para que se repitan todos los objetos del array de shoes
const renderShoeCard = (element) => {
  // coge como argumento element, que representa un objeto que contiene la información sobre un zapato (marca, modelo, precio, etc)
  const divShoesCard = document.createElement("div"); // Creo el div donde aparecerá toda la info. de los zapatos
  divShoesCard.className = "shoesCard"; // Inserto el div y le pongo un class .shoesCard

  const imgShoes = document.createElement("img"); // Creo el elemento img
  imgShoes.className = "shoesPictures"; // Le pongo un class .shoesPictures
  imgShoes.src = element.img; // Le coloco el source de la imagen
  imgShoes.alt = `${element.brand} ${element.model}`; // Le coloco el alt, marca y modelo

  const brandHeading = document.createElement("h2"); // Creo el título de las zapatillas
  brandHeading.textContent = element.brand; // Inserto el título que será la marca

  const modelParagraph = document.createElement("p"); // Creo la p que indicará el modelo
  modelParagraph.textContent = `Modelo: ${element.model}`; // Le inserto el texto visible que será la marca

  const priceParagraph = document.createElement("p"); // Crep la p del precio
  priceParagraph.textContent = `Precio: ${element.price}`; // Le inserto el texto visible que será precio

  const detailsDiv = document.createElement("div"); // Creo el div donde estarán los detalles de la marca y del precio
  detailsDiv.className = "details"; // Le pongo un class .details
  detailsDiv.appendChild(modelParagraph); // Inserto el detailsDiv con class .details en la p del modelo
  detailsDiv.appendChild(priceParagraph); // Inserto el detailsDiv con class .details en la p del precio (en este div estarán estos dos elementos)

  const buyButton = document.createElement("button"); // Creo el botón que estará dentro del div de shoesCard
  buyButton.textContent = "Comprar"; // Le añado el texto visible Comprar
  buyButton.className = "buy-btn"; // le añado un class

  divShoesCard.appendChild(imgShoes); // Inserto la imagen en el div de shoesCard
  divShoesCard.appendChild(brandHeading); // Inserto el título en el div de shoesCard
  divShoesCard.appendChild(detailsDiv); // Inserto el div con la info de modelo y precio en el div de shoesCard
  divShoesCard.appendChild(buyButton); // Inserto el botón en el div de shoesCard

  return divShoesCard;
};

//? Paso 2: Creo una función que renderizará los datos del array shoes.
const renderShoes = (data) => {
  if (data.length) {
    // Condicional si esto es true...
    for (let element of data) {
      const shoeCard = renderShoeCard(element);
      section.appendChild(shoeCard);
    } // for of, llama a la función de renderShoesCard para cada objeto en el array de data, así se crea una tarjeta para cada producto (zapato) y se le añade ala sección correspondiente del DOM
  } else {
    // en caso contrario...
    const message = document.createElement("p"); // creo la p que dará un mensaje la usuario en caso que no exista un producto con los filtros que ha escogido el usuario
    message.setAttribute("id", "alternativeMessage"); // Le pongo un ID para que en CSS lo pueda identificar con más facilidad
    message.textContent = // Añado el texto visible para el usuario
      "No se han encontrado las zapatillas con estas características, pero te mostramos otros productos sugeridos";

    section.appendChild(message); // Inserto el mensaje en la section

    // Creo un Set vacío para los zapatos sugeridos
    let randomShoesSet = new Set();

    // Bucle while hasta que el Set tenga tres elementos únicos
    while (randomShoesSet.size < 3) {
      let randomIndex = Math.floor(Math.random() * shoes.length); // Fórmula para que me de un número aleatorio en relación a la longitud de mi array shoes
      randomShoesSet.add(shoes[randomIndex]); // Le añado a mi Set un objeto del array shoes en la posición randomIndex
    }

    // Convierto el Set en un array
    let randomShoesArray = Array.from(randomShoesSet);

    // Renderizo las sugerencias usando la función
    for (let element of randomShoesArray) {
      const shoeCard = renderShoeCard(element); // Llamo a la función renderShoesCard para que me renderice los divs con toda la info. de mis zapatillas
      section.appendChild(shoeCard); // Lo inserto en la section
    }
  }
};

renderShoes(shoes);

//? Paso 3: Funciones para los filtros

//! Objeto para almacenar los valores seleccionados Marca, Género y Precio, todas inicializadas con valor null. Este objeto será utilizado para almacenar las opciones de filtro seleccionadas por el usuario
let selectedFilters = {
  brand: null,
  gender: null,
  price: null,
}; //! El objeto selectedFilters mantiene el estado de los filtros aplicados

// Selecciono todos los elementos de opciones de filtro que tienen clase .filter-option (estos son los elementos que el usuario puede hacer clic para aplicar filtros)
document.querySelectorAll(".filter-option").forEach((option) => {
  // Almacena todos esos elementos en una lista y utiliza forEach para iterar sobre cada uno de ellos
  option.addEventListener("click", (event) => {
    // Agrego un event listener a cada opción de filtro, este escucha el evento click y ejecuta la función cada vez que el usuario hace clic en una opción
    // Cada vez que el usuario selecciona una opción de filtro, la función se ejecuta con el evento como argumento
    const filterName = event.target.getAttribute("data-filter");
    // Selecciono el atributo data-filter del elemento en el que el usuario haga click (event.target), que indica si es un filtro Marca, Género o Precio
    // La variable filterName contendrá el tipo de filtro
    const filterValue = event.target.textContent.trim(); // trim() para eliminar espacios innecesarios
    // filterValue contendrá los valores seleccionados por el usuario

    // Actualizo los filtros seleccionados
    if (filterName === "marca") {
      // Si el filtro seleccionado es "marca",
      selectedFilters.brand = filterValue; // actualiza la propiedad brand
    } else if (filterName === "género") {
      // Si el ciltro es "género",
      selectedFilters.gender = filterValue; // actualiza la propiedad a gender
    } else if (filterName === "precio") {
      // si el filtro seleccionado es "precio", actualiza la propiedad a price
      // Convertimos el rango de precios en un formato numérico
      const priceRange = filterValue.split("-"); // Creo la variable priceRange para almacenar el filterValue está dividiendo la cadena por el guión, separando los precios en dos elementos de un array
      selectedFilters.price = priceRange
        .map((price) => price.replace("€", "").trim()) // Cada elemento del array es procesado, se elimina el símbolo € y también los espacios en blanco alrededor de los números
        .join("-");
    }

    filterAndRenderShoes();
    // Llamamos a la función para filtrar y renderizar los productos

    event.target.closest(".dropDownContent").classList.remove("show");
    // Cierra el dropdown después de seleccionar una opción
  });
});

const filterAndRenderShoes = () => {
  // Esta función filtra una lista de zapatos, el array (shoes) en función de (marca, género y rango de precio). Su propósito es filtrar la lista de zapatos y renderizarlos
  const filteredShoes = shoes.filter((shoe) => {
    // Con el método filter() itera sobre el array shoes y devuelve un nuevo array filteredShoes que contiene sólo los zapatos que cumplen con los criterios del filtro
    let brandMatch = selectedFilters.brand // Verifica si se ha seleccionado una marca en los filtros
      ? shoe.brand.includes(selectedFilters.brand) // Si hay una marca seleccionada, evalúa si la marca del zapato (shoe.brand) incluye la marca seleccionada
      : true; // Si no se ha seleccionado ninguna marca, brandMatch se establece en true, lo cual, no se filtrará por marca
    let genderMatch = selectedFilters.gender
      ? shoe.gender === selectedFilters.gender
      : true;
    let priceMatch = true; // Establezco priceMatch en true por defecto, lo cual, si no se selecciona ningún rango de precios, todos los zapatos apsarán el filtro de precio

    if (selectedFilters.price) {
      // Verifica si se ha seleccionado un rango de precios
      const [minPrice, maxPrice] = selectedFilters.price.split("-");
      //Si se selecciona un rango de precios, este se divide en minPrice (precio mínimo) y maxPrice (precio máximo) utilizando el método .split("-")
      const shoePrice = parseFloat(shoe.price.replace("€", "").trim());
      // Convierte el precio del zapato (shoe.price) de una cadena de texto a un número flotante (removiendo el símbolo de euro "€" y los espacios en blanco)
      priceMatch =
        shoePrice >= parseFloat(minPrice) && shoePrice <= parseFloat(maxPrice);
      // Se comprueba si el precio del zapato (shoePrice) está dentro del rango de precios seleccionado, y actualiza priceMatch a true o false dependiendo de si cumple esta condición.
    }

    return brandMatch && genderMatch && priceMatch;
    // Devuelve true si el zapato cumple con los tres criterios de filtro (marca, género y precio), lo que significa que será incluido en el arreglo filteredShoes.
    //Si alguna de estas condiciones es false, el zapato no se incluirá en el array filtrado.
  });

  section.innerHTML = ""; // Limpiar la sección antes de renderizar
  renderShoes(filteredShoes); // Volver a renderizar los zapatos filtrados
};

document.getElementById("actionResetBtn").addEventListener("click", () => {
  selectedFilters = { brand: null, gender: null, price: null };
  filterAndRenderShoes(); // Renderizar todos los zapatos de nuevo
});

//! Aquí empiezan los elementos del footer Paso 1: Selecciono el elemento footer
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
