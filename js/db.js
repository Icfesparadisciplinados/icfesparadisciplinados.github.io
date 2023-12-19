const elimPalabra = {
  matematicas: "",
  lectura: "",
  naturales: "",
  sociales: "",
  ingles: "",
  repilos: "REPILOS - Evento de EL TIEMPO",
}

const enlaces = [  
  ["REPILOS1  2019 MATEMATICAS ", "1ybUSN2HUwE91AwflkheXbo7X_mDjsc0F", "3", "2"],
  ["REPILOS2  2019 NATURALES", "13mETaVE2JM82I9QqDfA0tvYpegPuy4Sa", "3", "1"],
  ["REPILOS3  2019 SOCIALES", "1Rxg-boQO47EL8xjiInUok9bQ7uwb-8KE", "3", "1"],
  ["REPILOS4  2019 INGLES", "1pIPPhNQb1RY-KcwNM_4z6ZDv9oS7yqn6", "3", "1"],
  ["REPILOS5  2019 LECTURA", "1jVHzQyLXZYdi0IvpJ2vxnlphrPEvvQ4e", "3", "1"],
  ["REPILOS6  2019 MATEMATICAS", "1EvoKK18xIScBH_BDE0UbgL4VqMs6QS4q", "3", "1"],
  ["REPILOS7  2019 NATURALES", "1tJ-2uyJZiNyIn_ZNOyCfl-g4LIBtRqwq", "3", "1"],
  ["REPILOS8  2019 SOCIALES", "1PngAxJ78NwYNCUATSkIt4tdea7wmdKJk", "3", "1"],
  ["REPILOS9  2019 INGLES", "1_1xM1WCT1DZJXLE_L3CqFLEDuJyp6_Mn", "3", "1"],
  ["REPILOS10 2019 LECTURA", "1Zy1wk7dyj48yrnmXRz1SpkcLA6QAvmw9", "3", "1"],
  ["REPILOS11 2019 MATEMATICAS", "1mDfzuc_-LICgxtogYw2vwxzGM10WleFQ", "3", "1"],
  ["REPILOS12 2019 NATURALES", "1shdUNZ2cGZpLuke5o0ivrlFGSQCgTmc-", "3", "1"],
  ["REPILOS13 2019 SOCIALES", "1FzCPG5-jW9BysIpJ2BkFa7sr13YXcOHl", "3", "1"],
  ["REPILOS14 2019 INGLES", "111VIOH5Z8fhgqvC4kk9GWNlz0ROEE_s0", "3", "1"],
  ["REPILOS15 2019 LECTURA", "1ioilFvB6JPSsYdxTW9h6vuz0B7nqgFm8", "3", "1"],
]

function arreglarLista(lista) {
  var nombre = lista[0].toLowerCase().split(" ")
  var auxNombre = ""
  for (const cadena of nombre) {
    var numeros = ""
    var letras = ""
    if (cadena.match(/[0-9]+/g)) {      
      numeros = cadena.match(/[0-9]+/g)
      if (numeros.toString().length == 4){
        numeros = "año " + cadena.match(/[0-9]+/g)
      } else {        
        numeros = "N° " + cadena.match(/[0-9]+/g) + " "
        
      }
      var letras_ = cadena.replace(/[0-9]+/g, "")
      if (letras_ != "") {
        letras = letras_
      }
    } else {
      letras = cadena
    }

    if (typeof elimPalabra[letras] !== "undefined") {
      letras = elimPalabra[letras]
    }
    auxNombre = auxNombre + letras + " " + numeros
  }
  nombre = auxNombre.charAt(0).toUpperCase() + auxNombre.slice(1)
  if (nombre.includes("res")) {
    nombre = nombre
  }
  const resultado = []
  resultado.push(lista[1], lista[2] + " pág", lista[3] + "MB")
  resultado.splice(0, 0, nombre)
  return resultado
}

function db(variable) {  
  const claves = ["mat", "lec", "nat", "soc", "ing"]

  var result = []

  for (const i of claves) {
    if (variable.toLowerCase().includes(i)) {
      for (const j of enlaces) {
        if (j[0].toLowerCase().includes(i)) {
          result.push(arreglarLista(j))
        }
      }
    }
  }

  return result
}
