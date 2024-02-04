const back = document.querySelector(".back");

back.addEventListener("mouseenter", function() {
  back.src = "/img/backHV.svg"
});

back.addEventListener("mouseleave", function() {
  back.src = "/img/back.svg"
});

function ajustarContacto(nombre) {
  const contenedor = document.querySelector(`.${nombre}`)
  const img = document.querySelector(`.${nombre}Img`) 
  const tex = document.querySelector(`.${nombre}Tex`)
  const par = document.querySelector(`.${nombre}Par`)
  const par2 = document.querySelector(`.${nombre}Par2`)
  contenedor.addEventListener("mouseenter", () => {    
    img.style.borderRightColor = "#004fa7"
    img.src = `/img/${nombre}HV.svg`
    tex.style.color = "#004fa7"
    par.style.fontSize = "20px"
    par2.style.fontSize = "20px"
  })

  contenedor.addEventListener("mouseleave", () => {       
    img.style.borderRightColor = "#fff"
    img.src = `/img/${nombre}.svg`
    tex.style.color = "#fff"
    par.style.fontSize = "18px"
    par2.style.fontSize = "18px"
  })

  contenedor.addEventListener("click", () => {
  })
}

ajustarContacto("whatsapp")
ajustarContacto("gmail")

