import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,    
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const app = initializeApp({
  apiKey: "AIzaSyAx5cF49GBsG0egy4uTpz5s0-tuovqecRw",
  authDomain: "icfes-860a9.firebaseapp.com",
  projectId: "icfes-860a9",
  storageBucket: "icfes-860a9.appspot.com",
  messagingSenderId: "521192171495",
  appId: "1:521192171495:web:f067eacdc88d10d33cff42",
  measurementId: "G-QG9LZSJ2LS",
});

const db = getFirestore(app);

export async function getUsuarios() {
  try {
    const r = [];
    const querySnapshot = await getDocs(collection(db, "usuarios"));
    querySnapshot.forEach((doc) => {
      r.push([
        doc.data().nombre,
        doc.data().documento,
        doc.data().contrasena,
        doc.data().precio,
        doc.data().creador,
        doc.data().fecha,
        doc.id,
      ]);
    });
    return r; 
  } catch (e) {
    throw e; 
  }
}

export async function addUser(col, campos) {
  try {    
    const docRef = await addDoc(collection(db, col), campos);
    return new Promise((resolve) => {
      resolve(true);
    });
  } catch (e) {
    return new Promise(resolve => {
      resolve(false);
    });
  }
}

export async function getUser(col, id) {  
  try {
    var r = []
    const result = await getDoc(doc(collection(db, col), id));  
    const dt = result.data()
    r.push(dt.nombre, dt.edad)
    return new Promise(resolve => {
      resolve(r);
    });
  } catch (e) {
    return new Promise(resolve => {
      resolve(e);
    });
  }
}

export async function addPago(col, campos) {
  try {    
    const docRef = await addDoc(collection(db, col), campos);
    // return new Promise((resolve) => {
    //   resolve(docRef.id);
    // });
    return docRef.id    
  } catch (e) {
    return new Promise(resolve => {
      resolve(e);
    });
  }
}

export async function getPago(col, id) {  
  try {
    var r = []
    const result = await getDoc(doc(collection(db, col), id));  
    const dt = result.data()
    r.push(dt.valor, dt.cantidad, dt.fecha)
    return new Promise(resolve => {
      resolve(r);
    });
  } catch (e) {
    return new Promise(resolve => {
      resolve(e);
    });
  }
}


// export async function getPago(col, id) {  
//   try {
//     var r = []
//     const result = await getDoc(doc(collection(db, col), id));  
//     const dt = result.data()
//     r.push(dt.valor, dt.cantidad, dt.fecha)
//     return r
//   } catch (e) {
//     return new Promise(resolve => {
//       resolve(e);
//     });
//   }
// }