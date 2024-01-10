function cambiarImagen(elemento, imagen, src, color) {
  elemento.src = src;
  imagen.style.color = color;
}

function cambiarImagen2(nombre, color) {
  texto = document.querySelector(`.${nombre}Tex`);
  imagen = document.querySelector(`.${nombre}`);
  imagen.src = `/img/${nombre}.svg`;
  texto.style.color = color;
}

function hover(elemento, imagen, srcNor, srcHov, colorNor, colorHov) {
  elemento.addEventListener("mouseenter", () =>
    cambiarImagen(elemento, imagen, srcHov, colorHov)
  );
  elemento.addEventListener("mouseleave", () =>
    cambiarImagen(elemento, imagen, srcNor, colorNor)
  );
  imagen.addEventListener("mouseenter", () =>
    cambiarImagen(elemento, imagen, srcHov, colorHov)
  );
  imagen.addEventListener("mouseleave", () =>
    cambiarImagen(elemento, imagen, srcNor, colorNor)
  );
}

function superHover(nombre, srcNor, srcHov, colorNor, colorHov) {
  hover(
    document.querySelector(`.${nombre}`),
    document.querySelector(`.${nombre}Tex`),
    srcNor,
    srcHov,
    colorNor,
    colorHov
  );
}

function supSupHover() {
  superHover("con", "/img/con.svg", "/img/conHV.svg", "#fff", "#004fa7");
  superHover("pag", "/img/pag.svg", "/img/pagHV.svg", "#fff", "#004fa7");
  superHover("ref", "/img/ref.svg", "/img/refHV.svg", "#fff", "#004fa7");
  superHover("des", "/img/des.svg", "/img/desHV.svg", "#fff", "#004fa7");
}

supSupHover();

function auxAjustarHover(tipo, color) {
  for (const cell of document.querySelectorAll("td")) {
    cell.style.borderColor = color;
    cell.style.color = color;
  }
  superHover(tipo, `/img/${tipo}HV.svg`, `/img/${tipo}HV.svg`, color, color);
}

function ajustarHover(tipo, ref) {
  document.querySelector(ref).addEventListener("click", function () {
    supSupHover();
    for (const tipos of ["con", "pag", "ref", "des"]) {
      if (tipos !== tipo) {
        cambiarImagen2(tipos, "#fff");
      }
    }
    switch (tipo) {
      case "con":
        makeContenido(".contCon");
        auxAjustarHover(tipo, "#004fa7");
        break;
      case "pag":
        makeContenido(".contPag");
        auxAjustarHover(tipo, "#004fa7");
        break;
      case "ref":
        makeContenido(".contRef");
        auxAjustarHover(tipo, "#004fa7");
        break;
      case "des":
        makeContenido(".contDes");
        auxAjustarHover(tipo, "#004fa7");
        break;
    }
  });
}

ajustarHover("con", ".conTex");
ajustarHover("pag", ".pagTex");
ajustarHover("ref", ".refTex");
ajustarHover("des", ".desTex");
ajustarHover("con", ".con");
ajustarHover("pag", ".pag");
ajustarHover("ref", ".ref");
ajustarHover("des", ".des");

makeContenido(".contPag");

function makeContenido(tipo) {
  for (let i of [".contCon", ".contPag", ".contRef", ".contDes"]) {
    const auxiliar = document.querySelector(i);
    auxiliar.style.display = "none";
  }
  document.querySelector(".mensajeSeleccione").style.display = "none";  
  const contenedor = document.querySelector(tipo);
  contenedor.style.display = "block"
  // if (window.innerHeight <= contenedor.innerHeight) {
  //   document.querySelector(".toTop").style.display = "block";    
  // } else {
  //   document.querySelector(".toTop").style.display = "none";
  // }
}

function ajustarTitulo(nombre) {
  const titulo = document.querySelector(`.${nombre}`);
  const ctitulo = document.querySelector(`.c${nombre}`)  
  ctitulo.style.display = "none"
  titulo.addEventListener("click", () => {
    if (getComputedStyle(ctitulo).display == "none") {
      ctitulo.style.display = "block"
    } else {
      ctitulo.style.display = "none"
    }       
  })
}

ajustarTitulo("titulo1")
ajustarTitulo("titulo2")
ajustarTitulo("t1")
ajustarTitulo("t2")
ajustarTitulo("t3")
ajustarTitulo("t4")
ajustarTitulo("t5")
ajustarTitulo("t6")
ajustarTitulo("t7")
ajustarTitulo("t8")
ajustarTitulo("t9")
ajustarTitulo("t10")

var imgToTop = document.querySelector(".imgToTop");

imgToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
  animation.play();
});

imgToTop.addEventListener("mouseleave", () => {
  gsap.to(imgToTop, {
    scale: 1,
    y: 0,
    duration: 1,
  });
  imgToTop.src = "/img/topArrow.svg";
});

imgToTop.addEventListener("mouseover", () => {
  gsap.to(imgToTop, {
    scale: 1.2,
    y: -10,
    duration: 1,
  });
  imgToTop.src = "/img/topArrowHV.svg";
});
