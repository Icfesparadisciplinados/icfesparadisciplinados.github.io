function cambiarImagen() {
    var imagen = document.querySelector(".home");
    imagen.src = "/img/lec.svg";
  }
  
  document.addEventListener("mouseover", cambiarImagen);