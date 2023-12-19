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
  superHover("mat", "/img/mat.svg", "/img/matHV.svg", "#fff", "#fbca8f");
  superHover("lec", "/img/lec.svg", "/img/lecHV.svg", "#fff", "#cca8fa");
  superHover("nat", "/img/nat.svg", "/img/natHV.svg", "#fff", "#a9fac2");
  superHover("soc", "/img/soc.svg", "/img/socHV.svg", "#fff", "#f6a7c2");
  superHover("ing", "/img/ing.svg", "/img/ingHV.svg", "#fff", "#f9f5ab");
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
    generarListado(materia);
    for (const materias of ["mat", "lec", "nat", "soc", "ing"]) {
      if (materias !== materia) {
        cambiarImagen2(materias, "#fff");
      }
    }
    switch (materia) {
      case "mat":
        auxAjustarHover(materia, "#fbca8f");
        break;
      case "lec":
        auxAjustarHover(materia, "#cca8fa");
        break;
      case "nat":
        auxAjustarHover(materia, "#a9fac2");
        break;
      case "soc":
        auxAjustarHover(materia, "#f6a7c2");
        break;
      case "ing":
        auxAjustarHover(materia, "#f9f5ab");
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

  gsap.from(fila, {
    duration: 0.3,
    opacity: 0,
    scaleX: 0,
  }, "linear");

  // const tabla = document.querySelector("table");

  // // Animación de aparición de todas las filas
  // const animacion = gsap.timeline({
  //   duration: 1,
  // });

  // const animacionFila = (fila1) => {
  //   return gsap.from(fila1, {
  //     opacity: 0,
  //     scale: 0.5,
  //   });
  // };

  // tabla.addEventListener("DOMNodeInserted", (event) => {
  //   if (event.target.tagName === "TR") {
  //     const fila1 = event.target;
  //     animacionFila(fila1).addTo(animacion);
  //   }
  // });

  document.querySelector("table").appendChild(fila);
  // Animación de aparición
}

function reinTabla() {
  const miTabla = document.querySelector("table");
  miTabla.innerHTML = "";
}

generarListado("mat");

function generarListado(por) {
  const tabla = document.querySelector("table");

  const filas = tabla.querySelectorAll("tr");

  for (const fila of filas) {
    fila.remove();
  }
  const listado = db(por);
  for (const i of listado) {
    addFila(i[0], i[1], i[2], i[3]);
  }
}

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
    scale: 1.5,
    y: -10,
    duration: 1,
  });
  imgToTop.src = "/img/topArrowHV.svg";
});
