import { listadoDeDocumentosYDatos, setLogueado} from "./admin/db.js";

sessionStorage.setItem("logeado", "false")

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
  document.querySelector("body").style.transform = "rotate(-90deg)"      
} else { }

const ced = document.querySelector(".ced");
const ctr = document.querySelector(".ctr");
const boton = document.querySelector(".boton");
const verf = document.querySelector(".verf");
const docsYCont = await listadoDeDocumentosYDatos()
const docus = docsYCont.map((lista) => lista[0]);
const nombreTex = document.getElementById("nombre")
const fechaTex = document.getElementById("fecha")
const horaTex = document.getElementById("hora")
const userdataTex = document.getElementById("userData")
const loginCont = document.querySelector(".loginCont")
const altCont = document.querySelector(".altCont")
const button2 = document.querySelector(".button2")

function docADatos(numero){
  for (let i of docsYCont) {
    if (i[0] == numero) {
      return i
    }
  }
}

function existe() {
  if (docus.includes(ced.value)) {
    return true;
  } else {
    return false;
  }
}

function contraDeDoc(doc) {
  for (let i of docsYCont) {
    if (i[0] == doc) {
      return i[1]
    }
  }
}

async function comprobar() {
  var valorActual = "";
  if (ced.value.toString().length > 0) {
    ced.style.borderBottomColor = "#004fa7";
  } else {
    ced.style.borderBottomColor = "#fff";
  }
  if (ctr.value.toString().length > 0) {
    ctr.style.borderBottomColor = "#004fa7";
  } else {
    ctr.style.borderBottomColor = "#fff";
  }
  if (ced.value.toString().length > 4) {
    if (existe()) {
      valorActual = "DOCUMENTO CORRECTO";
      ced.style.borderBottomColor = "#0f0";
    }
    if (ctr.value.toString().length == 4) {
      valorActual = "DOCUMENTO O CONTRASEÑA INCORRECTOS";
      ced.style.borderBottomColor = "#f00";
      ctr.style.borderBottomColor = "#f00";
      if (existe()) {
        valorActual = "DOCUMENTO CORRECTO, CONTRASEÑA INCORRECTA";
        ced.style.borderBottomColor = "#0f0";
        ctr.style.borderBottomColor = "#f00";
        if (contraDeDoc(ced.value).toUpperCase() == ctr.value.toUpperCase()) {
          valorActual = "DOCUMENTO Y CONTRASEÑA CORRECTOS";
          ced.style.borderBottomColor = "#0f0";
          ctr.style.borderBottomColor = "#0f0";
          const data = docADatos(ced.value)
          if (data[6]) {        
            altCont.style.display = "block"    
            loginCont.style.display = "none"
            nombreTex.textContent = data[2].split(" ")[0]
            fechaTex.textContent = data[7].split(" ")[0]
            horaTex.textContent = data[7].split(" ")[1]
            userdataTex.textContent = navigator.userAgent
          } else {
            // valorActual = await setLogueado({
            //   documento: data[0],
            //   contrasena: data[1],
            //   nombre: data[2],
            //   fecha: data[3], 
            //   creador: data[4],
            //   precio: data[5],                       
            //   logueado: true,                      
            // }, data[8])
            sessionStorage.setItem("logeado", "true")  
            sessionStorage.setItem("documento",  data[0])
            sessionStorage.setItem("contrasena",  data[1])
            sessionStorage.setItem("nombre",  data[2])
            sessionStorage.setItem("fecha",  data[3]) 
            sessionStorage.setItem("creador",  data[4])
            sessionStorage.setItem("precio",  data[5])  
            sessionStorage.setItem("fechaLogueado",  data[7])              
            window.location.href = "/index.html";
          }                              
        }
      }
    }
  }
  // verf.textContent = valorActual;
  verf.textContent = "Iniciando sección";
}

function limitar(casilla, longitud) {
  if (casilla.value.length > longitud) {
    casilla.value = casilla.value.substring(0, longitud);
  }
}

document.querySelector(".ctr").addEventListener("keydown", function (e) {
  const caracter = e.key;
  if (!/[a-zA-Z]/.test(caracter)) {
    e.preventDefault();
  }
});

document.querySelector(".ced").addEventListener("input", (event) => {
  limitar(document.querySelector(".ced"), 12);
  comprobar();
});

document.querySelector(".ctr").addEventListener("input", (event) => {
  limitar(document.querySelector(".ctr"), 4);
  comprobar();
});

button2.addEventListener("click", () => {
  location.reload()
})

const masOpcBot = document.querySelector(".masOpcBot");
const indicador = document.getElementById("indicador");
masOpcBot.addEventListener("click", (event) => {
  if (indicador.textContent == "open") {
    indicador.textContent = "close";
    gsap.to(masOpcBot, {
      rotate: 0,
      duration: 1,
    });
    gsap.to(".masOpc", {
      x: 0,
      duration: 1,
    });
    masOpcBot.src = "/img/plus.svg";
  } else {
    indicador.textContent = "open";
    gsap.to(masOpcBot, {
      rotate: 225,
      duration: 1,
    });
    gsap.to(".masOpc", {
      x: 195,
      duration: 1,
    });
    masOpcBot.src = "/img/plusHV.svg";
  }
});