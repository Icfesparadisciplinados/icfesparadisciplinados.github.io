function ajustarTitulos(numero) {
  const titulo = document.querySelector(`.t${numero}`)
  const contenido = document.querySelector(`.c${numero}`)
  titulo.addEventListener("click", () => {
    if (contenido.style.display == "none") {
      contenido.style.display = "block"
    } else {
      contenido.style.display = "none"
    }
  })
}

ajustarTitulos("1")
ajustarTitulos("2")
ajustarTitulos("21")
ajustarTitulos("22")
ajustarTitulos("23")
ajustarTitulos("3")
ajustarTitulos("4")
ajustarTitulos("5")
ajustarTitulos("51")
ajustarTitulos("52")

const back = document.querySelector(".back");

back.addEventListener("mouseenter", function() {
  back.src = "/img/backHV.svg"
});

back.addEventListener("mouseleave", function() {
  back.src = "/img/back.svg"
});


