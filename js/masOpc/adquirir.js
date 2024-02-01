import { addPago } from "../admin/firebase.js"

try {  
  const usrlParams = new URLSearchParams(window.location.search)
  const valor = usrlParams.get("valor")
  const cantidad = usrlParams.get("cantidad")  
  if (valor == "16000" || valor == "40000" ){
    const date = new Date()
    const fechaActual = date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    "\t" +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds(); 
    const id = await addPago({valor: valor, cantidad: cantidad, fecha: fechaActual})
    window.location.href = `/pages/masOpc/crearCuentas.html?id=${id}`
  }
} catch (error){}

const back = document.querySelector(".back");
const tituloOferta = document.querySelectorAll(".tituloOferta");
const oferta1 = document.querySelector(".oferta1")
const oferta2 = document.querySelector(".oferta2")
const oferta3 = document.querySelector(".oferta3")
const oferta1Button = document.querySelector(".oferta1Button")
const oferta2Button = document.querySelector(".oferta2Button")
const oferta3Button = document.querySelector(".oferta3Button")
const contenidoOfertas = document.querySelector(".contenido")
const contenidoPagos = document.querySelector(".contenidoPagos")
const buttonBack = document.querySelector(".buttonBack")

function ajustarPaginaBack() {
  contenidoOfertas.style.display = "none"
  contenidoPagos.style.display = "block"
  buttonBack.addEventListener("click", () => {
    buttonBack.href = "/pages/masOpc/adquirir.html"
    location.reload();
  })
}

oferta1Button.addEventListener("click", () => {
  ajustarPaginaBack()
})

oferta2Button.addEventListener("click", () => {  
  ajustarPaginaBack()
})

oferta3Button.addEventListener("click", () => {
  ajustarPaginaBack()
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
  // document.querySelector(".pago4Contenido").style.display = "none"   
}

function reiniciarPagosHover() {
  document.querySelector(".pago1").style.height = "50px"
  document.querySelector(".pago2").style.height = "50px"
  document.querySelector(".pago3").style.height = "50px"
  // document.querySelector(".pago4").style.height = "50px"
  document.querySelector(".pago1").style.backgroundColor = "#11111100"
  document.querySelector(".pago2").style.backgroundColor = "#11111100"
  document.querySelector(".pago3").style.backgroundColor = "#11111100"
  // document.querySelector(".pago4").style.backgroundColor = "#11111100"
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
      reiniciarPagosHover()
      ocultarContenidoPagos()
      document.querySelector(".contenidoGeneralPagos").style.display = "block"  
    }
  })
}  

ajustarPagos(".pago1")
ajustarPagos(".pago2")
ajustarPagos(".pago3")

function ajustarHoverPayU(nombre) {
  const ofertaPayU = document.querySelector(nombre)
  ofertaPayU.addEventListener("mouseleave", () => {
    ofertaPayU.src = "/img/payu.svg"
  })
  ofertaPayU.addEventListener("mouseenter", () => {
    ofertaPayU.src = "/img/payuHV.svg"
  })
}

ajustarHoverPayU(".oferta1PayU")
ajustarHoverPayU(".oferta2PayU")