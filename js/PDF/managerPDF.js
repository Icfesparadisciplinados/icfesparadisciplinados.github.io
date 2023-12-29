const res = document.querySelector(".res");
const imput = document.querySelector(".input");
const nombresIm = document.querySelector(".nombresIm");
const enlacesIm = document.querySelector(".enlacesIm");
const pesosIm = document.querySelector(".pesosIm");

imput.addEventListener("input", () => {
  arreglar(imput.value);
});

function arreglar(value) {
  const elementos = value.split("\n");
  for (let elemento of elementos) {
    if (elemento) {
      const fila = document.createElement("tr");
      const aux = elemento.split(",");
      const colNombre = document.createElement("td");
      colNombre.textContent = aux[2].replace('"', "").replace('"', "").replace('.pdf', "");
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
