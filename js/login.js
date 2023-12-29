const ced = document.querySelector(".ced");
const ctr = document.querySelector(".ctr");
const boton = document.querySelector(".boton");
const verf = document.querySelector(".verf");

document.querySelector(".ctr").addEventListener("keydown", function (e) {
  const caracter = e.key;
  if (!/[a-zA-Z]/.test(caracter)) {
    e.preventDefault();
  }
});

function existe() {
  if (Object.keys(contras).includes(ced.value)) {
    return true;
  } else {
    return false;
  }
}

function comprobar() {    
  var valorActual = "";
  if (ced.value.toString().length > 0) {
    ced.style.borderBottomColor = "#004fa7"
  } else {
    ced.style.borderBottomColor = "#fff"
  }
  if (ctr.value.toString().length > 0) {
    ctr.style.borderBottomColor = "#004fa7"
  } else {
    ctr.style.borderBottomColor = "#fff"
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
        if (contras[ced.value].toUpperCase() == ctr.value.toUpperCase()) {
          valorActual = "DOCUMENTO Y CONTRASEÑA CORRECTOS";
          ced.style.borderBottomColor = "#0f0";
          ctr.style.borderBottomColor = "#0f0";
        }
      }
    }
  }
  verf.textContent = valorActual;
}

function limitar(casilla, longitud) {
  if (casilla.value.length > longitud) {
    casilla.value = casilla.value.substring(0, longitud);
  }
}

document.querySelector(".ced").addEventListener("input", (event) => {
  limitar(document.querySelector(".ced"), 12);
  comprobar();
});

document.querySelector(".ctr").addEventListener("input", (event) => {
  limitar(document.querySelector(".ctr"), 4);
  comprobar();
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
