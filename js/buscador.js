const buscador = document.querySelector(".buscador");
const buscarBoton = document.querySelector(".buscar");
const contenido = document.querySelector(".contenido");
const contBuscador = document.querySelector(".contBuscador");
const opciones = document.querySelector(".opciones");

function limpiarSugerencias() {
  for (const elemento of document.querySelectorAll(".sugerencia")) {
    elemento.remove();
  }
}

buscador.addEventListener("input", (event) => {
  limpiarSugerencias()
  for (const element of buscar(buscador.value.toString())) {
    if (element != buscador.value) {
      const p = document.createElement("div");
    p.className = "sugerencia";
    p.textContent = element;
    p.addEventListener("click", () => {
      buscador.value = p.textContent
      limpiarSugerencias()
      buscador.focus()
    });      
    contBuscador.append(p);
    }    
  }
});

document.addEventListener("click", () => {
  limpiarSugerencias()
})

function crearTabla() {
  document.querySelector(".prueba").textContent = buscador.value + "exelente";
}

buscador.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    crearTabla()
  }
});

buscarBoton.addEventListener("mouseleave", function(event) {
  buscarBoton.src = "/img/buscar.svg"
});

buscarBoton.addEventListener("mouseenter", function(event) {
  buscarBoton.src = "/img/buscarHV.svg"
})

buscarBoton.addEventListener("click", function(event) {
  crearTabla()
})

function addOpciones(){
  const opciones = elimPalabraValues()
  for (const opcion of opciones) {
    addOpcion(opcion)
  }
}

function addOpcion(nom) {
  const texto = document.createElement("td");
  texto.textContent = nom;      
  const div = document.createElement("div");
  div.appendChild(texto)
  div.setAttribute("class", "opcion");
  const fila = document.createElement("tr");
  fila.appendChild(div);  
  document.getElementById("opciones").appendChild(fila);
}

addOpciones()

const masOpcBot = document.querySelector(".masOpcBot")
const indicador = document.getElementById("indicador")

const auxAlturaMasOpc = document.querySelector(".masOpc").clientHeight
const alturaMasOpc = auxAlturaMasOpc + ((auxAlturaMasOpc) * 0.1)
document.querySelector(".masOpc").style.top = - alturaMasOpc + "px";

masOpcBot.addEventListener("mouseenter", () => {  
  masOpcBot.src = "/img/plusHV.svg";
})

masOpcBot.addEventListener("mouseleave", () => {  
  masOpcBot.src = "/img/plus.svg";
})

masOpcBot.addEventListener("click", () => {  
  if (indicador.textContent == "open"){
    indicador.textContent = "close"
    gsap.to(masOpcBot, {
      rotate: 0,
      duration: 1,
    })
    gsap.to(".masOpc", {
      y: 0,
      duration: 1,
    })    
  } else {
    indicador.textContent = "open"
    gsap.to(masOpcBot, {
      rotate: -405,
      duration: 1,
    })
    gsap.to(".masOpc", {
      y: alturaMasOpc + 12,
      duration: 1,
    })    
  }  
})







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

  if (window.innerHeight <= document.querySelector("table").clientHeight){
    document.querySelector(".toTop").style.display = "block";
  } else {
    document.querySelector(".toTop").style.display = "none";
  }

  document.getElementById("mainTable").appendChild(fila);
}

function generarListado(por) {
  const tabla = document.querySelector("table");
  const filas = tabla.querySelectorAll("tr");
  for (const fila of filas) {
    fila.remove();
  }
  const listado = dbMaterias(por);
  for (const i of listado) {
    addFila(i[0], i[1], i[2], i[3]);
  }
}

generarListado("mat");

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
