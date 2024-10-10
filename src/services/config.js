import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "proyecto-react-e6692.firebaseapp.com",
  projectId: "proyecto-react-e6692",
  storageBucket: "proyecto-react-e6692.appspot.com",
  messagingSenderId: "855675905364",
  appId: "1:855675905364:web:618f9441a0057e2b2714c1",
  measurementId: "G-58YK9VCBL7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
//////////////////////////

export const misProducts = [
  { id: "1", nombre: "Remera negra", stock: 10, precio: 10000, img: "/img/remera1.webp", idCat: "remeras" },
  { id: "2", nombre: "Remera azul", stock: 12, precio: 200, img: "/img/remera2.webp", idCat: "remeras" },
  { id: "3", nombre: "Remera marron", stock: 5, precio: 300, img: "/img/remera3.webp", idCat: "remeras" },
  { id: "4", nombre: "Remera Negra con logo", stock: 7, precio: 900, img: "/img/remera4.webp", idCat: "remeras" },
  { id: "5", nombre: "Pantalón negro", stock: 8, precio: 1500, img: "/img/pantalon1.webp", idCat: "pantalones" },
  { id: "6", nombre: "Pantalón azul", stock: 6, precio: 1700, img: "/img/pantalon2.webp", idCat: "pantalones" },
  { id: "7", nombre: "Pantalón de jean", stock: 4, precio: 2000, img: "/img/pantalon3.webp", idCat: "pantalones" },
  { id: "8", nombre: "zapas blancas ", stock: 20, precio: 3000, img: "/img/zapas1.webp", idCat: "zapas" },
  { id: "9", nombre: "zapas negras", stock: 25, precio: 4000, img: "/img/zapas2.webp", idCat: "zapas" },
  { id: "10", nombre: "zapas marrones", stock: 15, precio: 5000, img: "/img/zapas3.webp", idCat: "zapas" }
];

import { collection, doc, writeBatch } from "firebase/firestore"

const subirProductos = async () => {
  const batch = writeBatch(db)
  const productosRef = collection(db, "productos")

  misProducts.foreach((producto) => {
    const nuevoDoc = (productosRef)
    batch.set(nuevoDoc, producto)

  })
  try {
    await batch.commit();
    console.log("productos subidos exitosamente")
  } catch (error) {
    console.log("error subiendo producto", error)
  }
 
}

