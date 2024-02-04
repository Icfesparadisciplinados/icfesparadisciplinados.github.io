// import { setLogueado } from "./admin/db.js";

if (sessionStorage.getItem("logeado") != "true") {
  window.location.href = "/pages/login.html";
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////  Error en beforeunload  ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const date = new Date();
// const fechaYHora =
//   date.getDate() +
//   "/" +
//   (date.getMonth() + 1) +
//   "/" +
//   date.getFullYear() +
//   "\t" +
//   date.getHours() +
//   ":" +
//   date.getMinutes() +
//   ":" +
//   date.getSeconds();

// await setLogueado({
//   documento: sessionStorage.getItem("documento"),
//   contrasena: sessionStorage.getItem("contrasena"),
//   nombre: sessionStorage.getItem("nombre"),
//   fecha: sessionStorage.getItem("fecha") ,
//   creador: sessionStorage.getItem("creador"),
//   precio: sessionStorage.getItem("precio"),    
//   logueado: false,
//   fechaLogueado: fechaYHora,
// }, sessionStorage.getItem("documento"));

// window.addEventListener('beforeunload', async function(event) {
//   event.preventDefault();  
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////  Error en beforeunload  ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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