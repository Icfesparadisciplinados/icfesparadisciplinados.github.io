function cambiarImagen(elemento, imagen, src, color) {
  elemento.src = src;
  imagen.style.color = color;
}

function cambiarImagen2(nombre, color) {
  texto = document.querySelector(`.${nombre}Tex`);
  imagen = document.querySelector(`.${nombre}`);
  imagen.src = `/img/${nombre}.svg`;
  texto.style.color = color;
}

function hover(elemento, imagen, srcNor, srcHov, colorNor, colorHov) {
  elemento.addEventListener("mouseenter", () =>
    cambiarImagen(elemento, imagen, srcHov, colorHov)
  );
  elemento.addEventListener("mouseleave", () =>
    cambiarImagen(elemento, imagen, srcNor, colorNor)
  );
  imagen.addEventListener("mouseenter", () =>
    cambiarImagen(elemento, imagen, srcHov, colorHov)
  );
  imagen.addEventListener("mouseleave", () =>
    cambiarImagen(elemento, imagen, srcNor, colorNor)
  );
}

function superHover(nombre, srcNor, srcHov, colorNor, colorHov) {
  hover(
    document.querySelector(`.${nombre}`),
    document.querySelector(`.${nombre}Tex`),
    srcNor,
    srcHov,
    colorNor,
    colorHov
  );
}

function supSupHover() {
  superHover("mat", "/img/mat.svg", "/img/matHV.svg", "#fff", "#fcb05c");
  superHover("lec", "/img/lec.svg", "/img/lecHV.svg", "#fff", "#8c70ff");
  superHover("nat", "/img/nat.svg", "/img/natHV.svg", "#fff", "#14eb8c");
  superHover("soc", "/img/soc.svg", "/img/socHV.svg", "#fff", "#ff91bd");
  superHover("ing", "/img/ing.svg", "/img/ingHV.svg", "#fff", "#fced87");
}

supSupHover();

function auxAjustarHover(materia, color) {
  for (const cell of document.querySelectorAll("td")) {
    cell.style.borderColor = color;
    cell.style.color = color;
  }
  superHover(
    materia,
    `/img/${materia}HV.svg`,
    `/img/${materia}HV.svg`,
    color,
    color
  );
}

function ajustarHover(materia, ref) {
  document.querySelector(ref).addEventListener("click", function () {
    supSupHover();    
    for (const materias of ["mat", "lec", "nat", "soc", "ing"]) {
      if (materias !== materia) {
        cambiarImagen2(materias, "#fff");
      }
    }
    switch (materia) {
      case "mat":
        generarListado("matem", true);
        auxAjustarHover(materia, "#fcb05c");
        break;
      case "lec":
        generarListado("lect", true);        
        auxAjustarHover(materia, "#8c70ff");
        break;
      case "nat":        
        generarListado("natu", true);
        generarListado("fisi"), false;
        generarListado("quim"), false;
        generarListado("biol"), false;
        auxAjustarHover(materia, "#14eb8c");
        break;
      case "soc":        
        generarListado("soci", true);
        auxAjustarHover(materia, "#ff91bd");
        break;
      case "ing":        
        generarListado("ingl", true);
        auxAjustarHover(materia, "#fced87");
        break;
      default:
    }
  });
}

ajustarHover("mat", ".matTex");
ajustarHover("lec", ".lecTex");
ajustarHover("nat", ".natTex");
ajustarHover("soc", ".socTex");
ajustarHover("ing", ".ingTex");
ajustarHover("mat", ".mat");
ajustarHover("lec", ".lec");
ajustarHover("nat", ".nat");
ajustarHover("soc", ".soc");
ajustarHover("ing", ".ing");

function addFila(nom, link, numPag, tamMB) {
  const nombre = document.createElement("td");
  nombre.textContent = nom;
  nombre.style.width = "80%";
  nombre.style.textAlign = "left";
  nombre.style.cursor = "default";
  const p1 = document.createElement("p");
  p1.textContent = tamMB;
  p1.style.width = "65px";
  p1.style.float = "right";
  p1.style.textAlign = "right";
  nombre.appendChild(p1);
  const p2 = document.createElement("p");
  p2.textContent = numPag;
  p2.style.width = "65px";
  p2.style.float = "right";
  p2.style.textAlign = "right";
  nombre.appendChild(p2);
  const imgDescarga = document.createElement("img");
  imgDescarga.src = "/img/des.svg";
  hover(imgDescarga, imgDescarga, "/img/des.svg", "/img/desHV.svg", "", "");
  imgDescarga.style.width = "20px";
  imgDescarga.style.marginTop = "5px";
  const linkDescarga = document.createElement("a");
  linkDescarga.appendChild(imgDescarga);
  linkDescarga.setAttribute(
    "href",
    `https://drive.google.com/uc?export=download&id=${link}`
  );
  const descarga = document.createElement("td");
  descarga.appendChild(linkDescarga);
  descarga.setAttribute("width", "10%");
  const imgMirar = document.createElement("img");
  imgMirar.src = "/img/ver.svg";
  hover(imgMirar, imgMirar, "/img/ver.svg", "/img/verHV.svg", "", "");
  imgMirar.style.height = "20px";
  imgMirar.style.marginTop = "3px";
  const linkMirar = document.createElement("a");
  linkMirar.appendChild(imgMirar);
  linkMirar.setAttribute(
    "href",
    `https://drive.google.com/file/d/${link}/edit`
  );
  const mirar = document.createElement("td");
  mirar.appendChild(linkMirar);
  mirar.setAttribute("width", "10%");
  const fila = document.createElement("tr");
  fila.appendChild(nombre);
  fila.appendChild(descarga);
  fila.appendChild(mirar);
  gsap.from(
    fila,
    {
      duration: 0.3,
      opacity: 0,
      scaleX: 0,
    },
    "linear"
  );

  if (window.innerHeight <= document.querySelector("table").clientHeight) {
    document.querySelector(".toTop").style.display = "block";
    document.querySelector(".mensajeSeleccione").style.display = "none";
  } else {
    document.querySelector(".toTop").style.display = "none";
    document.querySelector(".mensajeSeleccione").style.display = "block";
  }

  document.querySelector("table").appendChild(fila);
}

function generarListado(por, limpiar) {
  if (limpiar) {
    const tabla = document.querySelector("table");
    const filas = tabla.querySelectorAll("tr");
    for (const fila of filas) {
      fila.remove();
    }
  }
  const listado = dbMaterias(por);
  for (const i of listado) {
    addFila(i[0], i[1], i[2], i[3]);
  }
}

// generarListado("mat");

var imgToTop = document.querySelector(".imgToTop");

imgToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
  animation.play();
});

imgToTop.addEventListener("mouseleave", () => {
  gsap.to(imgToTop, {
    scale: 1,
    y: 0,
    duration: 1,
  });
  imgToTop.src = "/img/topArrow.svg";
});

imgToTop.addEventListener("mouseover", () => {
  gsap.to(imgToTop, {
    scale: 1.2,
    y: -10,
    duration: 1,
  });
  imgToTop.src = "/img/topArrowHV.svg";
});
