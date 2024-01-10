// Developed by Juan Manuel Díaz Gómez

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