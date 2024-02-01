import { getPago, addUser } from "../admin/firebase.js"
import { crearRecibo } from "../admin/interface/recibo.js";

var pagoData = []

try {  
  const usrlParams = new URLSearchParams(window.location.search)    
  pagoData = await getPago(usrlParams.get("id"))  
} catch (error){
  pagoData = [0, 0, ""]
}

if (pagoData[0] == 16000) {
  pagoData[0] = 3200
}

if (pagoData[0] == 40000) {
  pagoData[0] = 2000
}

const date = new Date();

const fechaActual =
  date.getDate() +
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

const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generarStringAleatorio() {
  const numerosAleatorios = [];
  for (let i = 0; i < 4; i++) {
    numerosAleatorios.push(Math.floor(Math.random() * caracteres.length));
  }
  return (
    caracteres.substr(numerosAleatorios[0], 1) +
    caracteres.substr(numerosAleatorios[1], 1) +
    caracteres.substr(numerosAleatorios[2], 1) +
    caracteres.substr(numerosAleatorios[3], 1)
  );
}

function crearFormulario(numero) {  
  const titNumeracion = document.createElement("h2");
  titNumeracion.classList.add("numeracionFormulario");
  titNumeracion.textContent = `Cuenta N°${numero}`

  const documento = document.createElement("input");
  documento.classList.add("input2");
  documento.classList.add("inputDocumento");
  documento.placeholder = "Número de documento" 

  const nombre = document.createElement("input");
  nombre.classList.add("input2");
  nombre.classList.add("inputNombre");
  nombre.placeholder = "Nombre del usuario" 

  const auxContrasena = document.createElement("p");
  auxContrasena.style.display = "none"
  auxContrasena.textContent = generarStringAleatorio() 

  const botonForm = document.createElement("button");
  botonForm.classList.add("button2");
  botonForm.textContent = "Registrar"
  botonForm.addEventListener("click", async () => {       
    if (botonForm.textContent == "Registrar") {
      if ( 
        await addUser({
          documento: documento.value,
          contrasena: auxContrasena.textContent,
          nombre: nombre.value,
          fecha: fechaActual,
          creador: `user (${pagoData[2]})`,
          precio: pagoData[0],
          logueado: false,
          fechaLogueado: fechaActual,
        }, documento.value)
      ) {
        crearRecibo(
          documento.value,
          auxContrasena.textContent,
          nombre.value,
          pagoData[0],
        );     
        botonForm.textContent = "Contraseña";    
        document.querySelector(".mensajeDeError").style.display = "none" 
      } else {   
        document.querySelector(".mensajeDeError").style.display = "block"        
      }             
    } else {
      crearRecibo(
        documento.value,
        auxContrasena.textContent,
        nombre.value,
        pagoData[0],
      );
    }
  })

  const contenedor = document.createElement("div")  
  contenedor.classList.add("contenido");
  contenedor.appendChild(titNumeracion);  
  contenedor.appendChild(documento);
  contenedor.appendChild(nombre);
  contenedor.appendChild(auxContrasena);
  contenedor.appendChild(botonForm);

  document.querySelector(".contenedorGeneral").appendChild(contenedor);
}

for (let i = 1; i <= pagoData[1]; i++) {
  crearFormulario(i)
}

