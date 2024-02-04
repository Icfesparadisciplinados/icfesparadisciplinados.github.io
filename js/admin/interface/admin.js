import { getUsuarios, addUser } from "../firebase.js";
import { crearRecibo } from "./recibo.js";

///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// U S E R S ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

function makeContenido(tipo) {
  for (let i of [".opc1Cont", ".opc2Cont"]) {
    const auxiliar = document.querySelector(i);
    auxiliar.style.display = "none";
  }
  const contenedor = document.querySelector(tipo);
  contenedor.style.display = "block";
}

function ajustarOpciones(opcion) {
  document.querySelector(opcion).addEventListener("click", () => {
    makeContenido(`${opcion}Cont`);
  });
}

function ajustarOpciones2(opcion) {
  document.querySelector(`${opcion}Cont`).style.display = "none";
  document.querySelector(opcion).addEventListener("click", () => {
    const elemento = document.querySelector(`${opcion}Cont`);
    if (elemento.style.display == "none") {
      elemento.style.display = "block";
    } else {
      elemento.style.display = "none";
    }
  });
}

ajustarOpciones(".opc1");
ajustarOpciones2(".opc11")
ajustarOpciones2(".opc12");
ajustarOpciones(".opc2");
ajustarOpciones2(".opc21")
makeContenido(".opc1Cont");

const addUserDocumento = document.querySelector(".addUserDocumento");
const addUserContrasena = document.querySelector(".addUserContrasena");
const addUserNombre = document.querySelector(".addUserNombre");
const addUserFecha = document.querySelector(".addUserFecha");
const addUserCreador = document.querySelector(".addUserCreador");
const addUserPrecio = document.querySelector(".addUserPrecio");
const confUsuaCrea = document.querySelector(".confirmacionUsuarioCreado");
const addUserButton = document.querySelector(".addUserButton");
const addUserConfirmacion = document.querySelector(".addUserconfirmacion");
const addUserAuxEstado = document.querySelector(".addUserButtonConfirm");
const audescargarrecibob = document.querySelector(".addUserDescargarReciboButton");
const crearListadoDeUsuarios = document.querySelector(".crearListadoDeUsuarios")
confUsuaCrea.style.display = "none";

const date = new Date();

addUserFecha.value =
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

addUserContrasena.value = generarStringAleatorio();
addUserPrecio.value = "4000";

addUserContrasena.addEventListener("input", () => {
  addUserContrasena.value = addUserContrasena.value.toUpperCase()
})

addUserButton.addEventListener("click", async () => {
  if (addUserAuxEstado.textContent == "add") {
    addUserAuxEstado.textContent = "none";
    location.reload();        
  } else {
    if (
      await addUser({
        documento: addUserDocumento.value,
        contrasena: addUserContrasena.value,
        nombre: addUserNombre.value,
        fecha: addUserFecha.value,
        creador: addUserCreador.value,
        precio: addUserPrecio.value,
        logueado: false,
        fechaLogueado: addUserFecha.value,
      }, addUserDocumento.value)
    ) {
      addUserButton.textContent = "Reiniciar";
      addUserConfirmacion.textContent = `Se a registrado correctamente a ${addUserNombre.value}, por favor enviele el comprovante con su usuario y contraseña`;
      addUserConfirmacion.style.color = "#0f0";
      confUsuaCrea.style.display = "block";
      addUserAuxEstado.textContent = "add";
    } else {
      addUserButton.textContent = "Intentar denuevo";
      addUserConfirmacion.textContent =
        "A ocurrido un error, reinicie y intentelo nuevamente";
        addUserAuxEstado.textContent = "add";
    }
  }
});

audescargarrecibob.addEventListener("click", () => {
  crearRecibo(
    addUserDocumento.value,
    addUserContrasena.value,
    addUserNombre.value,
    addUserPrecio.value
  );
});

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

function crearCajaElemento(nom, width) {
  const nombre = document.createElement("td");  
  nombre.textContent = nom;  
  nombre.style.width = width;    
  nombre.style.textAlign = "left";
  nombre.style.cursor = "default";
  return nombre
}

function addFila(nombre, documento, contrasena, precio, creador, date, id) {
  const fila = document.createElement("tr");  
  fila.appendChild(crearCajaElemento(nombre, "410px"));
  fila.appendChild(crearCajaElemento(documento, "130px"));
  fila.appendChild(crearCajaElemento(contrasena, "70px"));
  fila.appendChild(crearCajaElemento(creador, "120px"));
  fila.appendChild(crearCajaElemento(precio, "70px"));
  fila.appendChild(crearCajaElemento(date, "180px"));
  fila.appendChild(crearCajaElemento(id, "200px"));  
  document.getElementById("listadoDeUsuariosTable").appendChild(fila);
}

crearListadoDeUsuarios.addEventListener("click", async () => {  
  const usuarios = await getUsuarios()
  try {    
    for (let i of usuarios) {
      addFila(i[0], i[1], i[2], i[3], i[4], i[5], i[6])
    }  
  } catch (e) {
    addFila(e, "WRNG", "ERROR", "WRNG", "ERROR", "WRNG", "ERROR")
  }  
})

///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// D O C S //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

const inputManagerDocs = document.querySelector(".inputManagerDocs");
const tableManagerDocs = document.querySelector(".tablaDeResultadosManagerDocs");
const res1ManagerDocs = document.querySelector(".res1ManagerDocs");
const res2ManagerDocs = document.querySelector(".res2ManagerDocs");

res1ManagerDocs.addEventListener("click", () => {
  arreglar(inputManagerDocs.value);
});

res2ManagerDocs.addEventListener("click", () => {
  arreglar2(inputManagerDocs.value);
});

function arreglar(value) {
  while (tableManagerDocs.rows.length > 0) {
    tableManagerDocs.deleteRow(0);
  }  
  const elementos = value.split("\n");
  for (let elemento of elementos) {
    if (elemento) {
      const fila = document.createElement("tr");
      const aux = elemento.split(",");
      const colNombre = document.createElement("td");
      colNombre.textContent = aux[2]
        .replace('"', "")
        .replace('"', "")
        .replace(".pdf", "");
      fila.appendChild(colNombre);
      const colEnlace = document.createElement("td");
      colEnlace.textContent = aux[3].substring(32, 65);
      fila.appendChild(colEnlace);
      const casillaWhite = document.createElement("td");
      casillaWhite.textContent = " ";
      fila.appendChild(casillaWhite);
      const colPeso = document.createElement("td");
      if (aux[4].includes("KB")) {
        colPeso.textContent = "1";
        fila.appendChild(colPeso);
      } else {
        if (aux[4].includes(".")) {
          colPeso.textContent = aux[4].split(".")[0].replace('"', "");
          fila.appendChild(colPeso);
        } else {
          colPeso.textContent = aux[4].split(" ")[0].replace('"', "");
          fila.appendChild(colPeso);
        }
      }
      tableManagerDocs.appendChild(fila);
    }
  }
}

function arreglar2(value) {
  while (tableManagerDocs.rows.length > 0) {
    tableManagerDocs.deleteRow(0);
  }  
  const elementos = value.split("\n");
  for (let elemento of elementos) {
    if (elemento) {
      const fila = document.createElement("tr");
      const aux = elemento.split("\t");      
      const colNombre = document.createElement("td");
      colNombre.textContent = aux[0]
      fila.appendChild(colNombre);
      const colEnlace = document.createElement("td");
      colEnlace.textContent = aux[1].substring(39, 72);
      fila.appendChild(colEnlace);      
      const colTam = document.createElement("td");
      colTam.textContent = aux[2]
      fila.appendChild(colTam);
      const colPeso = document.createElement("td");
      colPeso.textContent =  aux[3]
      fila.appendChild(colPeso);
      const casillaWhite = document.createElement("td");
      casillaWhite.textContent = " ";
      fila.appendChild(casillaWhite);
      tableManagerDocs.appendChild(fila);
    }
  }
}
