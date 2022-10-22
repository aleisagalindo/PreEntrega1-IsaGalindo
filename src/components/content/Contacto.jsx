import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
const Contacto = () => {
  const {carrito, agregarProducto, quitarProducto, removeAll, getTotal} = useContext(CarritoContext)
  const datosFormulario = React.useRef();

  const consultarForm = (e) => {
    e.preventDefault();
    console.log(datosFormulario);
    const datForm = new FormData(datosFormulario.current)
    console.log(Object.fromEntries(datForm))
  };


  return (
    <>
      
      <div className="container container-form">
      <p>Completa el siguiente formulario:</p>
        <form onSubmit={consultarForm} ref={datosFormulario}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="nombre"
              className="form-control"
              name="nombre"
              aria-describedby="emailHelp"
            />
            <div name="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3" >
            <label htmlFor="nombre" className="form-label">
              Apellido
            </label>
            <input type="nombre" className="form-control" name="nombre" />
          </div>
          <div className="mb-3" >
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" name="email" />
          </div>
          <div className="mb-3" >
            <label htmlFor="id" className="form-label">
              N° DNI
            </label>
            <input type="number" className="form-control" name="number" />
          </div>
          <div className="mb-3" >
            <label htmlFor="adress" className="form-label">
              Dirección
            </label>
            <input type="adress" className="form-control" name="adress" />
          </div>
          <button onClick={() => removeAll()} type="submit" className="btn btn-dark">
            <Link to={"/checkout"}>Submit purchase order</Link> 
          </button>
        </form>
      </div>
    </>
  );
};

export default Contacto;
