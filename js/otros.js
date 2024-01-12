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

makeContenido(".contDes");

function makeContenido(tipo) {
  for (let i of [".contCon", ".contPag", ".contRef", ".contDes"]) {
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

ajustarTitulo("titulo1");
ajustarTitulo("titulo2");
ajustarTitulo("t1");
ajustarTitulo("t2");
ajustarTitulo("t3");
ajustarTitulo("t4");
ajustarTitulo("t5");
ajustarTitulo("t6");
ajustarTitulo("t7");
ajustarTitulo("t8");
ajustarTitulo("t9");
ajustarTitulo("t10");

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

const descargarTodo = document.querySelector(".descargarTodo");

descargarTodo.addEventListener("click", () => {  
  // var url = `https://drive.google.com/uc?export=download&id=1H5sQLSV8fD8rl028AQ3zx7kNb7YCL0O5`;
  window.location.href = `https://drive.google.com/uc?export=download&id=1H5sQLSV8fD8rl028AQ3zx7kNb7YCL0O5`
  // for (let i of allEnlaces()) {
  //   setTimeout(function () {
  //     window.location.href = `https://drive.google.com/uc?export=download&id=${i}`
      // window.open(`https://drive.google.com/uc?export=download&id=${i}`, "_blank");
      // window.open(`https://drive.google.com/uc?export=download&id=${i}`, "_blank"); 
  //   }, 2000);
  // }
});
