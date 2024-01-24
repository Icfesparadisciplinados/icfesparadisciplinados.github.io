import { getPago } from "../admin/firebase.js"

const auxId = document.querySelector(".auxId")
var pago = []

try {  
  const usrlParams = new URLSearchParams(window.location.search)
  const id = usrlParams.get("id")  
  pago = await getPago("pagos", id)  
} catch (error){
  pago = [0, "0"]
}


