// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDocs, getDoc, updateDoc} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFyY6h0hMNF2zHarAHJcHfNtyo-s8muPw",
  authDomain: "proyectofinal-isagalindo.firebaseapp.com",
  projectId: "proyectofinal-isagalindo",
  storageBucket: "proyectofinal-isagalindo.appspot.com",
  messagingSenderId: "217119843243",
  appId: "1:217119843243:web:17a6050c026d092416e8ee",
  measurementId: "G-B6732607E9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

const cargarBaseDeDatos = async () => {
const promise = await fetch("./json/productos.json")
const productos = await promise.json()
productos.forEach( async(producto) => {
  await addDoc(collection(db,"productos"), {
    nombre: producto.nombre,
    descripcion: producto.descripcion,
    descripcionDetallada: producto.descripcionDetallada,
    idCategoria: producto.idCategoria,
    piel: producto.piel,
    stock: producto.stock,
    precio: producto.precio,
    img: producto.img

  })
})
}

const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  return producto
}

const getProductos = async() => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(producto => [producto.id, producto.data()])
  return items
}

const getProdCategory = async() => {
  const productos = await getDocs(collection(db, "productos"))
  const prodCategory = productos.docs.map(producto => [producto[1].idCategoria, producto.data()])
  return prodCategory
}

const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db, "productos", id), info)
  return estado
}

const createOrdenDeCompra = async(preTotal, nombre, apellido, email, dni, direccion) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
    nombre: nombre,
    apellido: apellido,
    email: email,
    dni: dni,
    direccion: direccion,
    precioTotal: preTotal
  })
  return ordenCompra
}
  
  const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra",id))
    return ordenCompra
  }

export {cargarBaseDeDatos, getProductos, getProducto, updateProducto, createOrdenDeCompra, getOrdenCompra, getProdCategory}