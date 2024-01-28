import { setLogueado } from "./admin/db.js";

if (sessionStorage.getItem("logeado") != "true") {
  window.location.href = "/pages/login.html";
}

const documentoData = sessionStorage.getItem("documento")
const contrasenaData = sessionStorage.getItem("contrasena")
const nombreData = sessionStorage.getItem("nombre")
const fechaData = sessionStorage.getItem("fecha") 
const creadorData = sessionStorage.getItem("creador")
const precioData = sessionStorage.getItem("precio")     

window.addEventListener('beforeunload', async function(event) {
  event.preventDefault();
  try {
    await setLogueado({
      documento: documentoData,
      contrasena: contrasenaData,
      nombre: nombreData,
      fecha: fechaData,
      creador: creadorData,
      precio: precioData,
      logueado: false,
    }, "1004631085");
    console.log('Operación asincrónica completada antes de cerrar la página.');
  } catch (error) {
    console.error('Error al realizar la operación asincrónica:', error);
  }
  var mensaje = '¿Seguro que quieres salir de la página?';
  event.returnValue = mensaje;
  return mensaje;
});

const masOpcBot = document.querySelector(".masOpcBot")
const indicador = document.getElementById("indicador")

masOpcBot.addEventListener("click", (event) => {  
  if (indicador.textContent == "open"){
    indicador.textContent = "close"
    gsap.to(masOpcBot, {
      rotate: 0,
      duration: 1,
    })
    gsap.to(".masOpc", {
      x: 0,
      duration: 1,
    })
    masOpcBot.src = "/img/plus.svg";
  } else {
    indicador.textContent = "open"
    gsap.to(masOpcBot, {
      rotate: 225,
      duration: 1,
    })
    gsap.to(".masOpc", {
      x: 195,
      duration: 1,
    })
    masOpcBot.src = "/img/plusHV.svg";
  }  
})
