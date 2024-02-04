import { valuesPalabras, dbBuscar, buscar} from "./admin/db.js"

if (sessionStorage.getItem("logeado") != "true") {
  window.location.href = "/pages/login.html";
}

const buscador = document.querySelector(".buscador");
const buscarBoton = document.querySelector(".buscarBoton");
const contenido = document.querySelector(".contenido");
const contBuscador = document.querySelector(".contBuscador");
const masOpcBot = document.querySelector(".masOpcBot")
const indicador = document.getElementById("indicador")
const imgToTop = document.querySelector(".imgToTop");
const auxiliar = document.querySelector(".auxiliar");

buscador.focus()

function limpiarSugerencias() {
  for (const elemento of document.querySelectorAll(".sugerencia")) {
    elemento.remove();
  }
}

buscador.addEventListener("input", () => {
  limpiarSugerencias()
  for (const element of buscar(buscador.value.toString())) {
    if (element != buscador.value) {
      const p = document.createElement("div");
    p.className = "sugerencia";
    p.textContent = element;
    p.addEventListener("click", () => {
      buscador.value = p.textContent
      limpiarSugerencias()
      generarListado(buscador.value.toLowerCase());
    });      
    contBuscador.append(p);
    }    
  }
});

document.addEventListener("click", () => {
  limpiarSugerencias()
})


buscador.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    generarListado(buscador.value.toLowerCase());
  }
});

buscarBoton.addEventListener("mouseleave", function(event) {
  buscarBoton.src = "/img/buscar.svg"
});

buscarBoton.addEventListener("mouseenter", function(event) {
  buscarBoton.src = "/img/buscarHV.svg"
})

buscarBoton.addEventListener("click", function(event) {
  generarListado(buscador.value.toLowerCase());
})

function addOpciones(){
  const palabras = valuesPalabras()
  for (const palabra of palabras) {
    addOpcion(palabra)
  }
}

function addOpcion(opcion) {
  const columna = document.createElement("p");
  columna.textContent = opcion[0];      
  columna.setAttribute("class", "opcion");
  columna.addEventListener("click", () => {    
    buscador.value = opcion[1];
    indicador.textContent = "close"
    generarListado(opcion[1].toLowerCase());
    gsap.to(masOpcBot, {
      rotate: 0,
      duration: 1,
    })
    gsap.to(".masOpc", {
      y: 0,
      duration: 1,
    })      
  })
  const fila = document.createElement("tr");
  fila.appendChild(columna);  
  document.getElementById("opciones").appendChild(fila);
}

addOpciones()

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
      duration: 2,
    })
    gsap.to(".masOpc", {
      y: alturaMasOpc + 12,
      duration: 2,
    })    
  }  
})

function cambiarImagen(elemento, imagen, src, color) {
  elemento.src = src;
  imagen.style.color = color;
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
  linkMirar.setAttribute(
    "target","_blank"
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
  document.querySelector(".toTop").style.display = "none";  
  if (window.innerHeight <= document.getElementById("mainTable").clientHeight){
    document.querySelector(".toTop").style.display = "block";
  }
  document.getElementById("mainTable").appendChild(fila);
}

function generarListado(por) {
  document.querySelector(".toTop").style.display = "none";
  const tabla = document.getElementById("mainTable");
  const filas = tabla.querySelectorAll("tr");
  for (const fila of filas) {
    fila.remove();
  }
  const datos = dbBuscar(por)
  if (datos.length > 0) {
    auxiliar.style.display = "none"
    for (const enlace of datos){
      auxiliar.innerHTML = ""
      addFila(enlace[0], enlace[1], enlace[2], enlace[3])
    }
  } else {
    // N O  B O R R A R
    // var result = []
    // for (let i of allClavesF()){      
    //   result.push(i + "<br>")
    // }
    // auxiliar.innerHTML = result
    auxiliar.innerHTML = `No se encuantra "${por.toUpperCase()}" entre los archivos.`
    auxiliar.style.display = "block"
  }  
}

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
