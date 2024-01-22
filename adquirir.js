const back = document.querySelector(".back");
const tituloOferta = document.querySelectorAll(".tituloOferta");
const oferta1 = document.querySelector(".oferta1")
const oferta2 = document.querySelector(".oferta2")
const oferta3 = document.querySelector(".oferta3")
const boton1 = document.querySelector(".oferta1Button")
const boton2 = document.querySelector(".oferta2Button")
const boton3 = document.querySelector(".oferta3Button")
const contenidoOfertas = document.querySelector(".contenido")
const contenidoPagos = document.querySelector(".contenidoPagos")
const buttonBack = document.querySelector(".buttonBack")

boton1.addEventListener("click", () => {
  contenidoOfertas.style.display = "none"
  contenidoPagos.style.display = "block"
  buttonBack.addEventListener("click", () => {
    location.reload();
  })
})

boton2.addEventListener("click", () => {
  contenidoOfertas.style.display = "none"
  contenidoPagos.style.display = "block"
  buttonBack.addEventListener("click", () => {
    location.reload();
  })
})


boton3.addEventListener("click", () => {
  contenidoOfertas.style.display = "none"
  contenidoPagos.style.display = "block"
  buttonBack.addEventListener("click", () => {
    location.reload();
  })
})



back.addEventListener("mouseenter", function() {
  back.src = "/img/backHV.svg"
});

back.addEventListener("mouseleave", function() {
  back.src = "/img/back.svg"
});

function ocultarContenido(){
  document.querySelector(".contenidoGeneral").style.display = "none"  
  document.querySelector(".oferta1Contenido").style.display = "none"
  document.querySelector(".oferta2Contenido").style.display = "none"
  document.querySelector(".oferta3Contenido").style.display = "none"   
}

function reiniciarOfertasHover() {
  document.querySelector(".oferta1").style.color = "#fff"  
  document.querySelector(".oferta2").style.color = "#fff"  
  document.querySelector(".oferta3").style.color = "#fff"  
  document.querySelector(".oferta1").style.backgroundColor = "#11111100"
  document.querySelector(".oferta2").style.backgroundColor = "#11111100"
  document.querySelector(".oferta3").style.backgroundColor = "#11111100"
}


function ajustarOfertas(nombre){
  const oferta = document.querySelector(nombre)
  const contenido = document.querySelector(`${nombre}Contenido`)
  contenido.style.display = "none"
  oferta.addEventListener("click", () => {    
    if (contenido.style.display == "none") {      
      ocultarContenido()
      reiniciarOfertasHover()
      contenido.style.display = "block"      
      oferta.style.color = "#111"  
      oferta.style.backgroundColor = "#fff"
    } else {      
      location.reload();   
    }
  })
}  

ajustarOfertas(".oferta1")
ajustarOfertas(".oferta2")
ajustarOfertas(".oferta3")

gsap.to(tituloOferta, {
  scale: 1.15,  
  duration: 0.6,
  repeat: -1,
  yoyo: true,
  ease: "easeOutQuart",
});

gsap.to(oferta1, {
  border: "3px solid #004fa7",
  duration: 3,  
  repeat: -1,
  yoyo: true,
});

gsap.to(oferta2, {
  border: "3px solid #004fa7",
  duration: 2,  
  repeat: -1,
  yoyo: true,
});

gsap.to(oferta3, {
  border: "3px solid #004fa7",
  duration: 1,  
  repeat: -1,
  yoyo: true,
});

function ocultarContenidoPagos(){
  document.querySelector(".contenidoGeneralPagos").style.display = "none"  
  document.querySelector(".pago1Contenido").style.display = "none"
  document.querySelector(".pago2Contenido").style.display = "none"
  document.querySelector(".pago3Contenido").style.display = "none"   
  document.querySelector(".pago4Contenido").style.display = "none"   
}

function reiniciarPagosHover() {
  document.querySelector(".pago1").style.height = "50px"
  document.querySelector(".pago2").style.height = "50px"
  document.querySelector(".pago3").style.height = "50px"
  document.querySelector(".pago4").style.height = "50px"
  document.querySelector(".pago1").style.backgroundColor = "#11111100"
  document.querySelector(".pago2").style.backgroundColor = "#11111100"
  document.querySelector(".pago3").style.backgroundColor = "#11111100"
  document.querySelector(".pago4").style.backgroundColor = "#11111100"
}


function ajustarPagos(nombre){
  const pagos = document.querySelector(nombre)
  const contenido = document.querySelector(`${nombre}Contenido`)
  contenido.style.display = "none"
  pagos.addEventListener("click", () => {    
    if (contenido.style.display == "none") {      
      ocultarContenidoPagos()
      reiniciarPagosHover()
      contenido.style.display = "block"      
      pagos.height = "60px" 
      pagos.style.backgroundColor = "#fff"
    } else {      
      location.reload();   
    }
  })
}  

ajustarPagos(".pago1")
ajustarPagos(".pago2")
ajustarPagos(".pago3")
ajustarPagos(".pago4")

// ?valor=4000?cantidad=1
const textoContenidoPagos = document.querySelector(".pagoExitosoNombre")
const valores = ""
const cantidad = ""
try {
  valores = window.location.search;  
  textoContenidoPagos.textContent = valores
} catch (error){
  textoContenidoPagos.textContent = error
}
