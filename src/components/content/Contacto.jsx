import React, { useContext, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacto = () => {
  

  const { carrito, agregarProducto, quitarProducto, removeAll, getTotal } = useContext(CarritoContext);
    const [carritoLocal, setCarritoLocal] = useState([]);
  const datosFormulario = React.useRef();

  const consultarForm = (e) => {
    e.preventDefault();
    console.log(datosFormulario);
    const datForm = new FormData(datosFormulario.current);
    console.log(Object.fromEntries(datForm));
  };

  const compraRealizada = () => {
    toast.success("Succesfull purchase", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const vaciarCarrito = removeAll()
    return vaciarCarrito
  };

  

  return (
    <>
    <p className="total-order">Está por pagar : ${getTotal(carrito)}</p>
      <div className="container container-form">
        <p>Completa el siguiente formulario:</p>
        <form id="formulario" className="formulario d-block" onSubmit={consultarForm} ref={datosFormulario}>
          <div className="box-input mb-3">
            <label className="form-label">Ingresá tu nombre completo:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              placeholder="ej: María Gómez"
              required
            />
          </div>
          <div className="box-input mb-3">
            <label className="form-label">Ingesá tu N° de DNI:</label>
            <input
              className="form-control"
              name="dni"
              type="id"
              placeholder="ej: 11223344"
              required
            />
          </div>
          <div className="box-input mb-3">
            <label className="form-label">
              Ingresá tu número de teléfono (sin guiones):
            </label>
            <input
              className="form-control"
              name="numero"
              type="tel"
              placeholder="ej: +54 9 381 333 4444"
              required
            />
          </div>
          <div className="box-input mb-3">
            <label className="form-label">Ingresá tu email:</label>
            <input
              className="form-control"
              name="email"
              type="email"
              placeholder="ej: myemail@mail.com"
              required
            />
          </div>
          <div className="box-input mb-3">
            <label className="form-label">Repetí tu email:</label>
            <input
              className="form-control"
              name="email"
              type="email"
              placeholder="ej: myemail@mail.com"
              required
            />
          </div>
          <div className="box-input mb-5">
            <label className="form-label">Ingesá tu dirección:</label>
            <input
              className="form-control"
              name="address"
              type="address"
              placeholder="ej: Mainstreet 123"
              required
            />
          </div>
          <button
            onClick={compraRealizada}
            id="submit"
            type="submit"
            className="btn btn-success mb-5"
          >
            Finish
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Contacto;
