if (sessionStorage.getItem("logeado") != "true") {
  window.location.href = "/pages/login.html";
}

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
  superHover("gui", "/img/gui.svg", "/img/guiHV.svg", "#fff", "#004fa7");
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
    for (const tipos of ["gui", "con", "pag", "ref", "des"]) {
      if (tipos !== tipo) {
        cambiarImagen2(tipos, "#fff");
      }
    }
    switch (tipo) {
      case "gui":
        makeContenido(".contGui");
        auxAjustarHover(tipo, "#004fa7");
        break;
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

ajustarHover("gui", ".guiTex");
ajustarHover("con", ".conTex");
ajustarHover("pag", ".pagTex");
ajustarHover("ref", ".refTex");
ajustarHover("des", ".desTex");
ajustarHover("gui", ".gui");
ajustarHover("con", ".con");
ajustarHover("pag", ".pag");
ajustarHover("ref", ".ref");
ajustarHover("des", ".des");

for (let i of [".contCon", ".contPag", ".contRef", ".contDes", ".contGui"]) {
  const auxiliar = document.querySelector(i);
  auxiliar.style.display = "none";
}

// makeContenido(".contGui");

function makeContenido(tipo) {
  for (let i of [".contCon", ".contPag", ".contRef", ".contDes", ".contGui"]) {
    const auxiliar = document.querySelector(i);
    auxiliar.style.display = "none";
  }
  document.querySelector(".mensajeSeleccione").style.display = "none";
  const contenedor = document.querySelector(tipo);
  contenedor.style.display = "block";
}

function ajustarTitulo(nombre) {
  const titulo = document.querySelector(`.${nombre}`);
  const ctitulo = document.querySelector(`.c${nombre}`);
  ctitulo.style.display = "none";
  titulo.addEventListener("click", () => {
    if (getComputedStyle(ctitulo).display == "none") {
      ctitulo.style.display = "block";
    } else {
      ctitulo.style.display = "none";
    }
  });
}

["lectura" 
,"lectura1" ,"l11" ,"l12" ,"l13" 
,"lectura2" ,"l21" ,"l22" ,"l23" 
,"lectura3" ,"l31" ,"l32" ,"l33" ,"l34" 
,"lectura4" ,"l41" ,"l42" ,"l43" ,"l44" 
,"lectura5","l51"
,"lecturainfo" 
,"matematicas" 
,"sociales" 
,"naturales" 
,"ingles" 
,"horarios" 
,"enfoque" 
,"info" 
,"titulo1" ,"titulo2" ,"t1" ,"t2" ,"t3" ,"t4" ,"t5" ,"t6" ,"t7" ,"t8" ,"t9" ,"t10"].forEach((element) => {
  ajustarTitulo(element);
})

function ajustarHoverReferencias(nombre) {
  const con = document.querySelector(`.${nombre}`);
  const img = document.querySelector(`.${nombre}Img`);
  const tit = document.querySelector(`.${nombre}Tit`);
  con.addEventListener("mouseover", () => {
    img.src = `/img/${nombre}HV.svg`;
    con.style.background = "#ffffff";
    tit.style.color = "#004fa7";
    gsap.to(con, {
      scale: 1.1,
      duration: 1,
    });
  });
  con.addEventListener("mouseout", () => {
    img.src = `/img/${nombre}.svg`;
    con.style.background = "#11111100";
    tit.style.color = "#fff";
    gsap.to(con, {
      scale: 1,
      duration: 1,
    });
  });
}

ajustarHoverReferencias("abel");
ajustarHoverReferencias("formarte");
ajustarHoverReferencias("milton");
ajustarHoverReferencias("calenda");