import { setLogueado } from "./admin/db.js";

// if (sessionStorage.getItem("logeado") != "true") {
//   window.location.href = "/pages/login.html";
// }

// const dataAux = sessionStorage.getItem("data")

// document.querySelector(".aux15").textContent = "adssadasd"

document.querySelector(".aux15").textContent = await setLogueado({
  documento: "dataAux[0]",
  contrasena: "dataAux[1]",
  nombre: "dataAux[2]",
  fecha: "dataAux[3]", 
  creador: "dataAux[4]",
  precio: "dataAux[5]",                       
  logueado: true,                  
}, "1004631085")

// window.addEventListener('beforeunload', async function() {
  
// });

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