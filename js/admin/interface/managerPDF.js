const input = document.querySelector(".input");
const table = document.querySelector(".tablaDeResultados");

input.addEventListener("input", () => {
  arreglar2(input.value);
});

function arreglar(value) {
  while (table.rows.length > 0) {
    table.deleteRow(0);
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
      document.querySelector("table").appendChild(fila);
    }
  }
}

function arreglar2(value) {
  while (table.rows.length > 0) {
    table.deleteRow(0);
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
      document.querySelector("table").appendChild(fila);
    }
  }
}
